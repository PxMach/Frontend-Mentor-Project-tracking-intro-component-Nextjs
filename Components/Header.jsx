"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import hamburger from "@/public/icon-hamburger.svg";
import close from "@/public/icon-close.svg";

export default function Header() {
  const [show, setShow] = React.useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <header className="flex justify-between items-center mb-12">
      <Image src={logo} alt="logo" width={30} height={100} />

      <nav>
        <div>
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
        </div>

        {show && (
          <ul className="text-[0.9rem] text-[#26263f] bg-white h-35 w-8/12 text-center flex flex-col items-center justify-center gap-1.5 rounded-sm absolute bottom-125 left-10 shadow-md shadow-[#d1d1e3] ">
            <li> Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <hr className="bg-[#9090a7] w-10/12" />
            <button className="text-[#9090a7] uppercase cursor-pointer">
              Login
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
}
