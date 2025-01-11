import React from "react";
import ProductItem from "../layers/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Fruit = () => {
  const dispatch = useDispatch();
  let items = useSelector((state) => state.counter.data);
  let cartItems = useSelector((state) => state.counter.cart);
  const fruitItems = items.filter((item) => item.fruit === true);

  console.log("Cart items: ", cartItems);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {fruitItems.map((item) => (
        <ProductItem
          key={item.id}
          productImg={item.image}
          productTitle={item.name}
          productPrice={`${item.price} ${item.unit}`}
          onAddToCart={() => {
            console.log("Adding to cart: ", item);
            dispatch(addToCart({ ...item, quantity: 1 }));
          }}
        />
      ))}
    </div>
  );
};

export default Fruit;
