import React from "react";
import ProductItem from "../layers/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const AllProduct = () => {
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.counter.cart);
  let items = useSelector((state) => state.counter.data);
  console.log(items);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {items.map((items, index) => (
        <ProductItem
          key={index}
          productImg={items.image}
          productTitle={items.name}
          onAddToCart={() => {
            console.log("Adding to cart: ", items);
            dispatch(addToCart({ ...items, quantity: 1 }));
          }}
        />
      ))}
    </div>
  );
};

export default AllProduct;
