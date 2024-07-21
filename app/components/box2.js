import Image from "next/image";
import Box from '@mui/material/Box';
import Box1 from "./box1";
import { useEffect, useState } from "react";
export default function Box2() {


  return (
    <div className="flex">
      <Box sx={{ minWidth: 500 }} className="p-20 relative flex justify-center items-center flex-col h-96 w-[1000px]" >
        <div className="w-full h-full absolute  translate-x-56 translate-y-24 scale-x-75 scale-y-75 pointer-events-none rotate-90">
          <Image src={"/tape.png"} width={800} height={95}
            className="object-top " />
        </div>
        <div className="w-full h-full absolute -translate-x-96 translate-y-24 scale-x-75 scale-y-75 pointer-events-none rotate-90 ">
          <Image src={"/tape.png"} width={800} height={95}
            className="object-top " />
        </div>
        <div className="w-full h-full absolute top-100 translate-x-10 pointer-events-none -z-10">
          <Image src={"/kadak.png"} fill
            className="object-top -z-10"/>
        </div>
        <div className="flex gap-16 ">
          <Box1 />
        </div>
      </Box>
    </div>
  );
}