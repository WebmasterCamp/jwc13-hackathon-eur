"use client";
import Image from "next/image";
import AppBar from "./components/navbar";

const data = [
  {
    salary: 25000,
    reduction: 5000,
    how: [
      {
        Funds: { type: "Funds", name: "name" },
        Funds: { type: "Funds", name: "name" },
        Funds: { type: "Funds", name: "name" },
      },
    ],
  },
];
export default function Home() {
  return (
    <main className="">
      <AppBar />
    </main>
  );
}
