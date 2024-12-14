import React from "react";
import { FaSearch } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { PiCookingPotDuotone } from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";
import { BiAlarm } from "react-icons/bi";

const Header = () => {
  return (
    <div className=" flex justify-between items-center  gap-5  p-4 max-[1090px]:grid max-md:ml-[-50px]   ">
      <div className=" flex justify-between items-center">
        <img
          className=" rounded-full w-12 h-12 "
          src={"./public/yemek1.jpg"}
          alt=""
        />
        <div className="hidden custom:block text-white font-bold text-2xl gap-4 ">
          <BiAlarm />
          <TiThMenu />
        </div>
      </div>
      <div className="flex justify-center gap-7 items-center ">
        <div className=" flex justify-center  relative items-center">
          <input
            onChange={(e) => console.log(e.target.value)}
            className=" h-12 w-[400px] border border-zinc-500 outline-none rounded-md  text-zinc-500 px-3"
            placeholder="Yemek tarif ara..."
            type="text"
            name=""
            id=""
          />
          <button className=" bg-[#B8341A] h-12 w-14 flex justify-center items-center text-white text-xl absolute rounded-tr-md rounded-br-md left-[344px] top-[-1px] hover:bg-rose-800">
            <FaSearch />
          </button>
        </div>
        <button className="flex justify-center items-center h-12 px-4 rounded-md bg-[#FFCC01] text-white font-semibold max-[1384px]:hidden">
          <PiCookingPotDuotone className="w-12 text-2xl" />
          <span> Tarif Gönder</span>
        </button>
        <button className="flex justify-center items-center border border-zinc-500 h-12 px-4 rounded-md bg-white max-[1210px]:hidden ">
          <GiCook className="w-12 text-2xl" />
          <span> Giris Yap</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
