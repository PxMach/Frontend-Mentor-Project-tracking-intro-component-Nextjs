"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import hamburger from "@/public/icon-hamburger.svg";

export default function Header() {
  const [show, setShow] = React.useState(true);

  return (
    <header>
      <Image src={logo} alt="logo" width={35} height={100} />

      <nav>
        <Image src={hamburger} alt="menu hamburger" width={35} height={100} />
        <ul>
          <li> Product</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
