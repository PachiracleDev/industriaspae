import React from "react";

function CardPasarela() {
  return (
    <div className="flex justify-center">
      <div className="p-2"></div>
      <div>
        <span className="block p-2">Nombre del producto</span>
        <div className="flex gap-2">
          <div>
            <span className="text-xs text-gray-600">
              Cantidad: <span>300</span>
            </span>
          </div>
          <div>
            <span className="text-xs text-gray-600">
              Precio: S/<span>4</span>
            </span>
          </div>
        </div>

        <div>
          <span className="text-sm text-gray-600">
            Subtotal: S/<span>12</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardPasarela;
