"use client";
import Image from "next/image";
import AppBar from "./components/navbar";
// import Carousel from "./components/carousel";
import Footer from "./components/footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex flex-col justify-center itens-center">
      <AppBar />
      <img src={"/Desktop_-_1.png"} onClick={()=>{router.push('/calculator')}} className="w-full h-[1024]" />
      <Footer />
    </main>
  );
}
