import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import products from "../data/products.json";
import { formatCurreny } from "../utility/formatCurrency";
import {
  cartItemsState,
  addCartItem,
  removeCartItem,
} from "../store/cartSlice";

const CartItem = ({ id }) => {
  const dispatch = useDispatch();

  const items = useSelector(cartItemsState);
  const item = items.find((item) => item.id === id);
  const itemQuantity = item.quantity || 0;
  const itemPrice = item.totalPrice;

  const product = products.find((item) => item.id === id);

  const addItemToCart = () => {
    dispatch(addCartItem({ id, price: product.price }));
  };

  const removeItemFromCart = () => {
    dispatch(removeCartItem({ id, price: product.price }));
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center justify-center">
          <div className="py-2">
            <img
              src={product.photo}
              alt={product.name}
              className="w-[100px] h-[100px] object-fit"
            />
          </div>
          <div>
            <div className="text-xl font-semibold">{product.name}</div>
            <div className="mt-1">
              {formatCurreny(product.price)} x{" "}
              <span>{itemQuantity} pcs = </span>
              <span className="font-semibold">{formatCurreny(itemPrice)}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-16">
          {/* <div>
            Qty: <span className="font-semibold">{itemQuantity}</span>
          </div> */}
          <div className="flex justify-center items-center gap-2">
            <button
              className="bg-green-700 text-white w-[40px] h-[40px] rounded-sm flex items-center justify-center"
              onClick={addItemToCart}
            >
              <AiFillPlusCircle />
            </button>

            {itemQuantity === 1 ? (
              <button
                className="bg-red-700 text-white w-[40px] h-[40px] rounded-sm flex items-center justify-center"
                onClick={removeItemFromCart}
              >
                <BsFillTrashFill />
              </button>
            ) : (
              <button
                className="bg-red-700 text-white w-[40px] h-[40px] rounded-sm flex items-center justify-center"
                onClick={removeItemFromCart}
              >
                <AiFillMinusCircle />
              </button>
            )}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
