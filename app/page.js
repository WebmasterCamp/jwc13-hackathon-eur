"use client"
import { useEffect, useState } from "react";
import Box2 from "./components/box2";
import Box1 from "./components/box1";

export default function Home() {

  return (
    <main className="flex gap-5 relative">
      <div className="bg-[#DEF9C4] -z-20 absolute w-full h-full"></div>
      <div className="min-h-screen  flex w-full justify-center mt-52">
        <Box2 salary={250000} />
      </div>
    </main>
  );
}
