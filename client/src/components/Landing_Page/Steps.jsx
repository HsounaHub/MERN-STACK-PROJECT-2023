import React from 'react'

function Steps() {
  return (
    <div className="mx-40 my-20">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Steps to win auctions</h1>
        <div className='flex justify-between mx-5 my-10'>
 <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-slate-600 border-gray-900 hover:bg-slate-700" >
       <p className=" text-lg leading-8 text-white">Create account</p>
 </div>
 <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-slate-600 border-gray-900 hover:bg-slate-700" >
       <p className=" text-lg leading-8 text-white">Join Rooms</p>
 </div>
 <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-slate-600 border-gray-900 hover:bg-slate-700" >
       <p className=" text-lg leading-8 text-white">Start bidding</p>
 </div>
 <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-slate-600 border-gray-900 hover:bg-slate-700" >
       <p className=" text-lg leading-8 text-white">Win auction</p>
 </div>
 </div>
    </div>
  )
}

export default Steps