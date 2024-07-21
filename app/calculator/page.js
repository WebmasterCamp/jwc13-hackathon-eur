"use client"
import Box2 from "../components/box2";

export default function Home() {


  return (
    <main className="flex gap-5 relative font-Itim">
      <div className="bg-[#DEF9C4] -z-20 absolute w-full h-full"></div>
      <div className="min-h-screen  flex w-full justify-center mt-52">
        <Box2/>
      </div>
    </main>
  );
}