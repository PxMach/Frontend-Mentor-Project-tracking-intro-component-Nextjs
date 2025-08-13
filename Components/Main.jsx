import React from "react";
import Image from "next/image";
import illustration from "@/public/illustration-devices.svg";

export default function Main() {
  return (
    <main className="main sm:flex flex-row-reverse items-center gap-4 sm:pl-40">
      <Image
        className="img mb-12 sm:w-3xl "
        src={illustration}
        alt="illustration of device"
        width={350}
        height={100}
      />
      {/* <div className=""></div> */}
      <div className="sm:w-4xl">
        <div className="flex items-center gap-4 mb-2 sm:mb-4">
          <p className="bg-[#26263f] text-white rounded-full px-2 font-semibold">
            New
          </p>
          <span className="text-[#9c9cae] uppercase tracking-widest">
            Monograph Dashboard
          </span>
        </div>
        <h1 className="text-[1.6rem] sm:text-4xl text-[#26263f] font-extrabold mb-2 sm:mb-4 uppercase">
          Powerful insights into your team
        </h1>
        <p className="text-[#6f6f7e] pr-15 mb-4 sm:mb-8 sm:pr-70">
          Project planning and time tracking for agile teams
        </p>

        <div className="flex items-center gap-4 sm:mt-4">
          <button className="bg-[#f66969] text-[#f0f0f9] text-[0.8rem] px-2.5 py-2 rounded-sm font-bold uppercase">
            Schedule a demo
          </button>
          <span className="text-[#9090a7] text-[0.8rem] uppercase tracking-widest">
            to see a preview
          </span>
        </div>
      </div>
    </main>
  );
}
