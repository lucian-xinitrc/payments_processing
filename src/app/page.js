'use client'
import { useEffect } from 'react';
import Image from "next/image";
  
export default function Home() {
  
  return (
    <>
      <section className="w-screen h-screen content-center justify-center bg-black">
        <div className="w-full content-center justify-center text-center">
          <h1 className="text-5xl font-bold mt-20">Sword Fontain</h1>
          <div className="w-full flex justify-center pt-20 rounded-[100px]">
            <Image src="/images/first.jpg" alt="Imagine full screen" className="rounded-[5px] shadow-xl/30" width={300} height={100}/>
          </div>
          <div className="w-[full] flex justify-center pt-10 pb-5 rounded-[100px]">
            <p className="w-[300px] text-center">Once the payment is done you will receive on email the world with the Monument</p>
          </div>
          
          <div className="w-full flex justify-center">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="JTHYJ2TCCYMKN" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="submit" className="bg-white py-2 px-7 border border-solid border-white text-black mt-5 rounded-full shadow-xl/10 transition duration-700 ease-in-out hover:shadow-blue hover:shadow-xl/30 hover:bg-black hover:text-white hover:border-white" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Click here to pay" value="Click here to pay" />
            </form>
          </div>
          <div className="w-[full] flex justify-center pt-10 pb-5 rounded-[100px]">
            <div>
              <p className="w-[300px] text-center">After the payment is done, forward the paypal confirmation email with the invoice to this email address and I will sent you the world where is the Sword Fontain Monument:
              </p><p className="bg-white py-2 px-5 mt-2 text-black rounded-full font-bold">arch0tic@protonmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
