import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // React Router'dan useParams'ı alıyoruz
import axios from "axios";
import { MdAccessTime } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Detay = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // id parametresini alıyoruz
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:2323/api/recipe/${id}`)
        .then((response) => {
          setRecipe(response.data.recipe); // recipe'yi set ediyoruz
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [id]);
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .delete(`http://127.0.0.1:2323/api/recipe/${id}`)
      .then(() => console.log("veri silindi"))
      .catch((err) => console.log("hata geldi", err));
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="  mt-4 bg-slate-100  border  w-[1100px] p-5  relative">
      <div className=" absolute top-0 right-0">
        <button
          onClick={handleClick}
          className="text-white font-semibold w-24 p-2 rounded-md bg-rose-600 hover:bg-rose-400"
        >
          Sil
        </button>
      </div>
      {recipe ? (
        <div className=" grid grid-cols-2 gap-3">
          <img className="col-span-1 rounded-md" src={recipe.image} alt="" />

          <div className="col-span-1 text-center text-2xl">
            <div>
              <h2 className="text-[#B8341A] font-semibold">
                {recipe.recipeName} Tarifi İçin Malzemeler
              </h2>
            </div>
            <div className=" bg-slate-200 text-sm p-2">
              {recipe.ingredients.map((i) => (
                <div className=" m-1 p-1 w-[300px] bg-slate-100 rounded-lg">
                  {i}
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-[#B8341A]  font-semibold">
                {recipe.recipeName} Tarifi Yapilisi
              </h2>
              <h6 className="text-[12px]">{recipe.instructions}</h6>
            </div>
          </div>
          <h1 className=" absolute flex items-center gap-1 bg-slate-100 p-1 rounded-lg bottom-[80px] left-10">
            <MdAccessTime /> {recipe.recipeTime}dk
          </h1>
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
};

export default Detay;
