"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import hamburger from "@/public/icon-hamburger.svg";
import close from "@/public/icon-close.svg";

export default function Header() {
  // const [show, setShow] = React.useState(false);

  // function handleClick() {
  //   setShow(!show);
  // }

  return (
    <header className="flex justify-between items-center mb-12 sm:mb-20 sm:pt-4 sm:px-40">
      <Image src={logo} alt="logo" width={30} height={100} />

      <nav>
        {/* <div>
          {show ? (
            <Image
              className="cursor-pointer"
              onClick={handleClick}
              src={close}
              alt="close icon"
              width={30}
              height={100}
            />
          ) : (
            <Image
              className="cursor-pointer"
              onClick={handleClick}
              src={hamburger}
              alt="menu hamburger"
              width={30}
              height={100}
            />
          )}
        </div> */}

        {/* {show && ( */}
        <ul className="max-sm:text-[0.9rem] sm:flex gap-15 max-sm:text-[#26263f] max-sm:bg-white max-sm:h-35 max-sm:w-8/12 max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-1.5 max-sm:rounded-sm max-sm:absolute max-sm:bottom-110 max-sm:left-15 max-sm:shadow-md max-sm:shadow-[#d1d1e3]">
          <li className="cursor-pointer"> Product</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <hr className="max-sm:bg-[#9090a7] max-sm:w-10/12" />
          <button className="text-[#9090a7] uppercase cursor-pointer">
            Login
          </button>
        </ul>
        {/* )} */}
      </nav>
    </header>
  );
}
