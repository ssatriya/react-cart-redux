import { useDispatch, useSelector } from "react-redux";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { addCartItem, removeCartItem } from "../store/cartSlice";
import { cartItemsState } from "../store/cartSlice";
import { formatCurreny } from "../utility/formatCurrency";

const ProductItem = ({ id, name, price, photo }) => {
  const dispatch = useDispatch();
  const items = useSelector(cartItemsState);

  const quantity = items.find((item) => item.id === id)?.quantity || 0;

  const addToCartHandler = () => {
    dispatch(addCartItem({ id, price }));
  };

  const removeFromCartHandler = () => {
    dispatch(removeCartItem({ id, price }));
  };

  return (
    <div className="border  border-gray-200 rounded-md p-3 flex-col justify-center items-center w-full h-full ">
      <div className="flex justify-center items-center">
        <img
          src={photo}
          alt={name}
          className="w-auto h-[300px]  object-cover"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-gray-600 text-lg">{name}</h2>
      </div>
      <div className="my-2 flex justify-between items-center">
        <div className="text-gray-700 font-semibold text-2xl">
          {formatCurreny(price)}
          {quantity !== 0 && (
            <span className="text-sm font-normal ml-2">
              x <span className="text-lg font-semibold">{quantity}</span>
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {quantity > 0 && (
            <>
              {quantity === 1 ? (
                <button
                  className="bg-red-700 text-white w-[40px] h-[40px] rounded-sm flex items-center justify-center"
                  onClick={removeFromCartHandler}
                >
                  <BsFillTrashFill />
                </button>
              ) : (
                <button
                  className="bg-red-700 text-white w-[40px] h-[40px] rounded-sm flex items-center justify-center"
                  onClick={removeFromCartHandler}
                >
                  <AiFillMinusCircle />
                </button>
              )}

              <button
                className="bg-green-700 text-white w-[40px] h-[40px] rounded-sm flex items-center justify-center"
                onClick={addToCartHandler}
              >
                <AiFillPlusCircle />
              </button>
            </>
          )}
          {quantity === 0 ? (
            <button
              type="button"
              className=" h-[40px] bg-black text-white px-2 py-1 rounded-sm"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          ) : (
            <Link to="/cart">
              <button
                type="button"
                className=" h-[40px] bg-blue-700 text-white px-2 py-1 rounded-sm"
              >
                View Cart
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
