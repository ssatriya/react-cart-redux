import { useSelector } from "react-redux";

import CartItem from "../components/CartItem";
import TotalOrder from "../components/TotalOrder";
import { cartItemsState } from "../store/cartSlice";

const Cart = () => {
  const items = useSelector(cartItemsState);

  return (
    <>
      <div className="my-[3rem] text-center">
        <h1 className="text-3xl font-semibold">Cart</h1>
        <p>This is the Cart Page</p>
      </div>
      {items.length === 0 && (
        <div className="text-2xl text-black">
          <p className="text-center">No product added to cart</p>
        </div>
      )}
      <div className="flex justify-between">
        <div className="w-[900px]">
          {items.map((item) => (
            <CartItem key={item.id} id={item.id} />
          ))}
        </div>
        {items.length === 0 ? "" : <TotalOrder />}
      </div>
    </>
  );
};

export default Cart;
