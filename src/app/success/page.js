'use client'
import { useState } from 'react';
import Image from "next/image";
  
export default function Home() {

  return (
    <>
      <section className="w-screen h-screen content-center justify-center bg-black">
        <div className="w-full content-center justify-center text-center">
          <h1 className="text-5xl font-bold">Payment Successfully</h1>
          <h2 className="text-2xl mt-5 font-bold">Thank you!</h2>
          <div className="w-[full] flex justify-center pt-10 pb-5 rounded-[100px]">
            <div>
              <p className="w-[300px] text-center">Do not forget to forward the paypal confirmation email with the invoice to this email address and I will sent you the world where is the Sword Fontain Monument:
              </p><p className="bg-white py-2 px-5 mt-2 text-black rounded-full font-bold">arch0tic@protonmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
