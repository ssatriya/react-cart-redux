import React from "react";
import { useSelector } from "react-redux";

import { formatCurreny } from "../utility/formatCurrency";
import { cartState } from "../store/cartSlice";

const TotalOrder = () => {
  const { totalPrice, totalQuantity } = useSelector(cartState);

  return (
    <div className="flex-col border p-6 w-[300px]">
      <div className="mb-6">
        <div className="text-xl">Total items :</div>
        <span className="text-4xl font-semibold text-black">
          {totalQuantity} <span className="text-gray-700 text-xl">pcs</span>
        </span>
      </div>
      <div>
        <div className="text-xl">Total payment :</div>
        <span className="text-4xl font-semibold text-black">
          {formatCurreny(totalPrice)}
        </span>
      </div>
      <button
        type="button"
        className="w-full h-[40px] px-3 rounded-sm bg-black text-white mt-10 cursor-pointer"
      >
        Checkout
      </button>
    </div>
  );
};

export default TotalOrder;
