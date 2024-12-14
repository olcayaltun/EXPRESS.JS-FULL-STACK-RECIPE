import React, { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import axios from "axios";
import Cart from "../components/Cart";
import { TbPlayerSkipBack } from "react-icons/tb";
import { TbPlayerSkipForward } from "react-icons/tb";
import Modal from "../components/Modal";
import { PiCookingPotDuotone } from "react-icons/pi";
const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const params = {
      title: debouncedSearchTerm,
      order: order,
    };
    let fetchRecipes = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:2323/api/recipe`, {
          params,
        });
        setRecipes(response.data.recipes || []); // Boş dizi varsayılanı ekledik
      } catch (err) {
        setError("Veriler alınırken bir hata oluştu. Lütfen tekrar deneyin.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [debouncedSearchTerm, order]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-6 gap-4 mt-14 relative">
      <select
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        id=""
        className=" absolute p-2 rounded-md right-[-250px]"
      >
        <option disabled>Zamana Göre Sirala</option>
        <option value="asc">Artan</option>
        <option value="desc">Azalan</option>
      </select>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className=" outline-none absolute bg-white w-[350px] p-2 h-12 rounded-md top-[-200px]  left-[100px]"
        placeholder="Tarif ara..."
        type="text"
      />
      <h1 className=" absolute top-[400px] left-[100px] text-slate-100 font-semibold text-2xl">
        Patlican Kebabi Tarifi....
      </h1>
      <div className=" absolute top-[170px] text-4xl text-[#FFFFFF]">
        <TbPlayerSkipBack />
      </div>

      <div className=" absolute top-[170px] left-[470px] text-4xl text-[#FFFFFF]">
        {" "}
        <TbPlayerSkipForward />
      </div>

      <img
        className="col-span-4 rounded-lg w-[510px] h-[400px]"
        src={"./public/pat.jpeg"}
        alt=""
      />

      {recipes.length === 0 ? (
        <p>Gösterilecek tarif bulunamadı.</p>
      ) : (
        <ul className="col-span-2">
          {recipes.map((recipe) => (
            <Cart key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      )}
      <div className=" absolute   flex  left-[350px] ">
        {" "}
        <Modal open={open} setOpen={setOpen} />
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center h-12 px-4 rounded-md bg-[#FFCC01] text-white font-semibold max-[1384px]:hidden absolute top-[-200px] left-[550px]"
      >
        <PiCookingPotDuotone className="w-12 text-2xl" />
        <span> Tarif Gönder</span>
      </button>
    </div>
  );
};

export default Main;
