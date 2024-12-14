import React from "react";
import { GiRiceCooker } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { PiVideoFill } from "react-icons/pi";
import { IoMdFlame } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { FaClipboardQuestion } from "react-icons/fa6";
const Slider = () => {
  return (
    <div className=" bg-[#B8341A] mx-[-300px] h-[80px] flex justify-centers gap-16  px-[300px]  border-b-4 border-[#FFCC01] max-sm:w-[850px] max-md:gap-1  m-auto ">
      <NavLink to={"/"} className=" flex justify-center items-center gap-3">
        <span className=" w-[3px]  h-12  text-[#FFCC01] bg-[#FFCC01] mr-7 ">
          |
        </span>
        <div className=" grid  place-items-center  hover:bg-red-900">
          <GiRiceCooker className=" font-semibold text-[#FFCC01] text-5xl" />
          <span className=" text-white font-semibold">MENÜLER</span>
        </div>

        <span className=" w-[3px]  h-12  text-[#FFCC01] bg-[#FFCC01] ml-6 ">
          |
        </span>
      </NavLink>
      <NavLink to={"/ara"} className=" flex justify-center items-center gap-3 ">
        <div className=" grid  place-items-center  hover:bg-red-900">
          <PiVideoFill className=" font-semibold text-[#FFCC01] text-5xl" />
          <span className=" text-white font-semibold">VIDEOLAR</span>
        </div>

        <span className=" w-[3px]  h-12  text-[#FFCC01] bg-[#FFCC01] ml-6">
          |
        </span>
      </NavLink>
      <NavLink to={"/"} className=" flex justify-center items-center gap-3 ">
        <div className=" grid  place-items-center  hover:bg-red-900">
          <IoMdFlame className=" font-semibold text-[#FFCC01] text-5xl" />
          <span className=" text-white font-semibold">TRENDLER</span>
        </div>

        <span className=" w-[3px]  h-12  text-[#FFCC01] bg-[#FFCC01] ml-6">
          |
        </span>
      </NavLink>
      <NavLink
        to={"/"}
        className=" flex justify-center items-center gap-3 max-md:hidden"
      >
        <div className=" grid  place-items-center  hover:bg-red-900">
          <FaClipboardList className=" font-semibold text-[#FFCC01] text-5xl" />
          <span className=" text-white font-semibold">LISTELER</span>
        </div>

        <span className=" w-[3px]  h-12  text-[#FFCC01] bg-[#FFCC01] ml-6">
          |
        </span>
      </NavLink>
      <NavLink
        to={"/"}
        className=" flex justify-center items-center gap-3  max-md:hidden"
      >
        <div className=" grid  place-items-center  hover:bg-red-900">
          <FaClipboardQuestion className=" font-semibold text-[#FFCC01] text-5xl " />
          <span className=" text-white font-semibold">FORUM</span>
        </div>

        <span className=" w-[3px]  h-12  text-[#FFCC01] bg-[#FFCC01] ml-6">
          |
        </span>
      </NavLink>
    </div>
  );
};

export default Slider;
