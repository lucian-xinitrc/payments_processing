'use client'
import { useEffect } from 'react';
import Image from "next/image";
  
export default function Home() {
  
  return (
    <>
      <section className="w-screen h-screen content-center justify-center bg-black">
        <div className="w-full content-center justify-center text-center">
          <h1 className="text-5xl font-bold">Sword Fontain</h1>
          <div className="w-full flex justify-center pt-20 rounded-[100px]">
            <Image src="/images/first.jpg" alt="Imagine full screen" className="rounded-[5px] shadow-xl/30" width={300} height={100}/>
          </div>
          <div className="w-[full] flex justify-center pt-10 pb-5 rounded-[100px]">
            <p className="w-[400px] text-center">Once the payment is done you will receive on email the world with the Monument</p>
          </div>
          <div className="w-full flex justify-center">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="return" value="http://localhost:3000/success" />
                <input type="hidden" name="cancel_return" value="http://localhost:3000/cancel" />
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="JTHYJ2TCCYMKN" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="submit" className="bg-white py-2 px-7 border border-solid border-white text-black mt-5 rounded-full shadow-xl/10 transition duration-700 ease-in-out hover:shadow-blue hover:shadow-xl/30 hover:bg-black hover:text-white hover:border-white" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Click here to pay" value="Click here to pay" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
