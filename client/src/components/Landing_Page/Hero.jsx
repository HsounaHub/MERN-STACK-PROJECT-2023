import React from 'react'
import heroimg from './img/heroimg.jpg'

function Hero() {
  return (
    <>
    <section class="bg-gray-900 h-[600px]">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7 pt-20">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Your One-Stop Webstore for Car Auctions</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Connecting Buyers and Sellers for Easy and Convenient Vehicle Trading</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:ring-slate-200 ">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex pt-10">
            <img src={heroimg} alt="mok" />
        </div>                
    </div>
</section>
    </>
  )
}

export default Hero