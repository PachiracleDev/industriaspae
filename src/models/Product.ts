export interface IProduct {
  id: string;
  name: string;
  categoria: string;
  subcategoria?: string;
  color?: string;
  destacado?: boolean;
  price: number;
  image: string;
  materiales: string;
  significado: string;
  ancho: number;
  alto: number;
  quantity: number;
}
