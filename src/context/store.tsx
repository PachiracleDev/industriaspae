import React, { createContext, useReducer } from "react";
import { IProduct } from "../models/Product";
import Cookies from "js-cookie";

type StateType = {
  darkMode: boolean;
  cart: {
    cartItems: IProduct[] | [];
  };
};
interface Actions {
  type: string;
  payload?: IProduct | string | number;
}

enum actionTypes {
  DARK_MODE_ON = "DARK_MODE_ON",
  DARK_MODE_OFF = "DARK_MODE_OFF",
  CART_ADD_ITEM = "CART_ADD_ITEM",
  CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
  CART_CLEAR = "CART_CLEAR",
}

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<any>;
};
const initialState: StateType = {
  darkMode: false,
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems")!)
      : [],
  },
};

const StoreContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state = initialState, action: Actions): StateType => {
  switch (action.type) {
    case actionTypes.DARK_MODE_ON:
      return { ...state, darkMode: true };
    case actionTypes.DARK_MODE_OFF:
      return { ...state, darkMode: false };
    case actionTypes.CART_ADD_ITEM: {
      const newItem = action.payload as IProduct;

      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );
      //Ver si la cantidad es mayor a 25 o mayor a 100


      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
          item.name === existItem.name ? newItem : item
        )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case actionTypes.CART_REMOVE_ITEM: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== (action.payload as IProduct)?.id
      );
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case actionTypes.CART_CLEAR:
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    default:
      return state;
  }
};

interface props {
  children: JSX.Element | JSX.Element[];
}

const StoreProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider, actionTypes };
