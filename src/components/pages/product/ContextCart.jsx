import React, { useContext } from "react";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
      <section className="w-11/12 mx-auto my-10">
        <h1 className="font-bold text-4xl text-center mb-8">Our Product</h1>

          <div className="grid grid-cols-1 gap-5">
            {item.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
          </div>

        <div className="text-end mt-8">
          <h3 className="text-xl font-semibold">
            Cart Total : <span className="text-3xl font-bold text-orange-600">{totalAmount}</span> tk
          </h3>
          <button className="btn mt-5" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
  );
};

export default ContextCart;
