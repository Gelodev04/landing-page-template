import React from 'react'
import fetchHome from '@/utils/fetchHome'

import HomeVideo from '../video/HomeVid';

export const  HomeSection = async () => {
    const data = await fetchHome()
   const homeData = data?.data;

  return (
    <div className='h-screen bg-[#1E293B] flex flex-col justify-center items-center text-center px-5 '>
        <div className=''>
          <h1 className='text-[3.1rem] text-gray-200 font-bold '>{homeData.H1element}</h1>
          <h2 className='text-[1.5rem] text-gray-300'>{homeData.Description}</h2>
        </div>

        <div className='flex flex-col gap-4 w-96 mt-2'>
          <button className='text-white bg-[#2174ea] text-xl py-3 font-semibold rounded'>{homeData.Button1}</button>
          <button className='text-white bg-[#334155] text-xl py-3 font-semibold rounded'>{homeData.Button2}</button>
        </div>

        <div className='mt-[5rem] w-full'>
          <HomeVideo homeData={homeData}/>
        </div>
    </div>
  )
}


