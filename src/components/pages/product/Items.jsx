import React, { useContext } from "react";
import { CartContext } from "./Cart";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  const handleClick = (product) => {
    console.log(product);
  };
  return (
    <div className="w-11/12 mx-auto card card-side bg-base-200 shadow-sm hover:shadow-xl flex justify-between items-center">
      <div className="bg-white  py-4">
        <figure className="w-44">
          <img className="" src={img} alt="" />
        </figure>
      </div>
      <div className="w-1/3">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.slice(0, 40)}...
          <Link
            to={`/detail/${id}`}
            className="rounded-full text-base font-semibold"
          >
            Read More
          </Link>
        </p>
      </div>
      <div>
        <div className=" flex justify-between my-3">
          <p>
            Price:{" "}
            <span className=" text-xl font-semibold text-orange-600">
              {price}
            </span>{" "}
            tk.
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center">
          <button onClick={() => decrement(id)}>
            <AiOutlineMinusCircle />
          </button>
          <input
            className="w-12 text-center mx-2 rounded-md"
            type="text"
            placeholder={quantity}
          />
          <button onClick={() => increment(id)}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>

      <div className="">
        <button onClick={() => handleClick(Items)} className="btn">
          <AiOutlineShoppingCart className="mx-2" /> Add to Cart
        </button>
        <button onClick={() => removeItem(id)} className="btn mx-4">
          <MdDeleteForever className="text-red-700" />
        </button>
      </div>
    </div>
  );
};

export default Items;
