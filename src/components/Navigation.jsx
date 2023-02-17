import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { cartItemsState } from "../store/cartSlice";
import Container from "./Container";

const Navigation = () => {
  const items = useSelector(cartItemsState);
  const quantity = items.reduce((total, item) => total + item.quantity, 0) || 0;

  const getCartQuantity = quantity;

  return (
    <header>
      <Container>
        <nav className="max-w-xl mx-auto flex justify-between items-center my-4 text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cart">
            Cart
            <span className="px-2 font-semibold">
              ({getCartQuantity ? getCartQuantity : 0})
            </span>
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
