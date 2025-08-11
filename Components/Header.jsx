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
              onClick={handleClick}
              src={close}
              alt="close icon"
              width={30}
              height={100}
            />
          ) : (
            <Image
              onClick={handleClick}
              src={hamburger}
              alt="menu hamburger"
              width={30}
              height={100}
            />
          )}
        </div>

        {show && (
          <ul className="">
            <li> Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Login</li>
          </ul>
        )}
      </nav>
    </header>
  );
}
