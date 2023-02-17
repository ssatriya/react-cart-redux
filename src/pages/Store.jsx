import ProductItem from "../components/ProductItem";
import products from "../data/products.json";
import { addCartItem, removeCartItem } from "../store/cartSlice";

const Store = () => {
  return (
    <>
      <div className="my-[3rem] text-center">
        <h1 className="text-3xl font-semibold">Store</h1>
        <p>This is the Store Page</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Store;
