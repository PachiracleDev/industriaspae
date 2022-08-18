import { useState } from "react";

function useModal() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return {
    modal,
    toggle,
  };
}

export default useModal;
