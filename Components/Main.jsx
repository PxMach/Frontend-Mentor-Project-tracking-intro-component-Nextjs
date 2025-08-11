import React from "react";
import Image from "next/image";
import illustration from "@/public/illustration-devices.svg";

export default function Main() {
  return (
    <main>
      <Image
        className="mb-12"
        src={illustration}
        alt="illustration of device"
        width={350}
        height={100}
      />

      <div className="flex items-center gap-4">
        <p> New</p>
        <span> Monograph Dashboard</span>
      </div>
      <h1>Powerful insights into your team</h1>
      <p>Project planning and time tracking for agile teams</p>

      <div>
        <button>Schedule a demo</button>
        <span> to see a live preview</span>
      </div>
    </main>
  );
}
