import React, { useEffect, useState } from "react";
import NotifIcon from "@assets/svg/topbar/notif.svg";
import UserIcon from "@assets/svg/topbar/user.svg";
import DownIcon from "@assets/svg/topbar/down.svg";
import Vector5 from "@assets/svg/topbar/Vector4.png";

export function Topbar() {
  return (
    <>
      <header className=" flex justify-between bg-white w-full rounded-3xl p-7">
        <div className=" lg:hidden flex flex-col gap-2 cursor-pointer rounded-full p-3">
          <div
            className={`w-10 h-1 bg-[#0D294E] transition  rounded-full`}
          ></div>
          <div
            className={`w-10 h-1 bg-[#0D294E] transition  rounded-full`}
          ></div>
          <div></div>
        </div>
        <h1 className=" text-[#0D294E] max-lg:hidden font-extrabold flex items-center">
          کاربر گرامی
        </h1>
        <div className=" flex gap-10">
          <button className=" flex items-center max-lg:hidden ">
            <img
              className=" pl-2"
              src={false ? Vector5 : NotifIcon}
              alt="notif"
            />
            <h2 className=" font-normal text-sm text-[#0D294E]">اعلانات</h2>
          </button>
          <button className=" flex items-center ">
            <img
              className=" ml-2 w-10 h-10 max-lg:w-12 max-lg:h-12 bg-s-1 p-1 rounded-full"
              src={UserIcon}
              alt="notif"
            />
            <img className=" " src={DownIcon} alt="notif" />
          </button>
        </div>
      </header>
    </>
  );
}
