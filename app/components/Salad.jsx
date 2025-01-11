import React from "react";
import ProductItem from "../layers/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Salad = () => {
  const dispatch = useDispatch();
  let items = useSelector((state) => state.counter.data);
  let cartItems = useSelector((state) => state.counter.cart);
  const saladItems = items.filter((item) => item.salad === true);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {saladItems.map((item, index) => (
        <ProductItem
          key={index}
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

export default Salad;
