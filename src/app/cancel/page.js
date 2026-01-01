'use client'
import { useState } from 'react';
import Image from "next/image";
  
export default function Home() {

  return (
    <>
      <section className="w-screen h-screen content-center justify-center bg-black">
        <div className="w-full content-center justify-center text-center">
          <h1 className="text-5xl font-bold">The payment was not succesfully!!!</h1>
          <h2 className="text-2xl mt-5 font-bold">Go back to the homepage and try again!</h2>
        </div>
      </section>
    </>
  );
}
