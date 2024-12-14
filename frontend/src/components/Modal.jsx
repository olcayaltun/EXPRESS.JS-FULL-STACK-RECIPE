import React, { useRef } from "react";

import axios from "axios";
const Modal = ({ open, setOpen }) => {
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formD = new FormData(e.target);
    const dataF = Object.fromEntries(formD.entries());

    console.log(dataF);

    try {
      await axios.post("http://127.0.0.1:2323/api/recipe", dataF);
      console.log("Data eklendi");
    } catch (err) {
      console.log("Hata geldi", err.response?.data || err.message);
    }

    setOpen(true);
    formRef.current.reset();
    window.location.reload();
  };

  return (
    <div
      className={
        open
          ? `h-screen w-screen bg-black bg-opacity-60 ml-[-650px] left-[-300px] mt-[-60px] flex justify-center items-center hidden`
          : `h-screen w-screen bg-black bg-opacity-60 ml-[-650px] left-[-300px] mt-[-60px] flex justify-center items-center`
      }
    >
      <div className=" bg-white max-w-[500px] max-h-[500px] p-4 rounded-xl  shadow-lg shadow-red-600 ">
        <h1 className=" text-center text-2xl text-[#B7341A]">Tarif Ekle</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4 items-center">
            <label className="font-semibold">Yemek İsmi:</label>
            <input
              name="recipeName"
              className="bg-[#BFC0C0] p-2 rounded-md outline-none"
              type="text"
            />
          </div>
          <div className="flex gap-14 items-center">
            <label className="font-semibold">Süresi:</label>
            <input
              name="recipeTime"
              className="bg-[#BFC0C0] p-2 rounded-md outline-none"
              type="number"
            />
          </div>
          <div className="flex gap-6 items-center">
            <label className="font-semibold">Kategorisi:</label>
            <input
              name="category"
              className="bg-[#BFC0C0] p-2 rounded-md outline-none"
              type="text"
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="font-semibold">Malzemeler:</label>
            <input
              name="ingredients" // Eksik `name` alanı eklendi
              className="bg-[#BFC0C0] p-2 rounded-md outline-none"
              type="text"
            />
          </div>
          <div className="flex gap-16 items-center">
            <label className="font-semibold">Tarif:</label>
            <input
              name="instruction" // Eksik `name` alanı eklendi
              className="bg-[#BFC0C0] p-2 rounded-md outline-none"
              type="text"
            />
          </div>
          <div className="flex gap-14 items-center">
            <label className="font-semibold">Resim:</label>
            <input
              name="image"
              className="bg-[#BFC0C0] p-2 rounded-md outline-none"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-300 w-1/2 p-2 rounded-xl flex justify-center items-center ml-[110px] font-semibold"
          >
            Ekle
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
