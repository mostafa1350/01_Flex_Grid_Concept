import React from 'react'
import GridConcept from '../public/imgs/Grid_Concept.jpg'

const Gridview = () => {
  return (
    <div className='grid bg-red-100 '>
            <div className='flex justify-center items-center'>
              <img src={GridConcept} width={720} height={720} alt="Grid Concept" />
            </div>
            <div>
                <h1 className='flex justify-center items-center h-[40px] border-[2px] border-green-300 rounded-md m-4 px-4 py-[20px] text-[30px]'>
                  According to use col-start and col-end , we can use some span(col.)
                </h1>
            </div>
          <div className='w-full bg-amber-200 grid grid-cols-6 gap-2 '>
              <div className='flex justify-center items-center m-2 h-[80px] bg-red-200  col-start-2 col-span-4 '>col-start-2  ==== col-span-4 <br/> 4 cols</div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-slate-300  col-start-1 col-end-3 '>col-start-1 ====  col-end-3</div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-slate-400/65 col-end-6 col-span-3'>col-end-6 ==== col-span-3</div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-slate-400/65 col-start-1 col-end-7'>col-start-1 ====  col-end-7</div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-slate-600/65 col-start-1 col-end-4'>col-start-1 ==== col-end-4<br/> (3cols)</div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-slate-700/65 col-end-7 col-span-6'>col-end-7 ==== col-span-6</div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-blue-600/65 col-start-1 col-span-4'>col-start-1 ==== col-span-4</div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-blue-800/65 col-end-4 col-span-3'>col-end-4 ==== col-span-3</div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-green-800/65 col-end-7 col-span-5'>col-end-7 ==== col-span-5</div>
          </div>
    </div>

  )
}

export default Gridview