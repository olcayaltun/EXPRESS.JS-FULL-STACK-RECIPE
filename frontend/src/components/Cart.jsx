import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
const Cart = ({ recipe }) => {
  return (
    <Link
      to={`/tarif/${recipe.id}`}
      className="border-2 mb-3 grid grid-cols-2 gap-1 w-[350px] place-items-center p-2 bg-slate-200 relative rounded-md "
    >
      <img className=" rounded-md" src={recipe.image} alt="" />
      <div>
        <h1 className="text-slate-600">{recipe.recipeName}</h1>
        <h3 className="text-slate-400">{recipe.category}</h3>
        <h3 className="text-slate-400">{recipe.ingredients[0]}...</h3>
      </div>
      <div className=" absolute left-14 text-3xl text-[#FFFFFF]">
        <TbPlayerPlayFilled />
      </div>
    </Link>
  );
};

export default Cart;
