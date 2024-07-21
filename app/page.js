"use client";
import Image from "next/image";
import AppBar from "./components/navbar";
// import Carousel from "./components/carousel";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="">
      <AppBar />
      {/* <Carousel /> */}
      <Footer />
    </main>
  );
}
