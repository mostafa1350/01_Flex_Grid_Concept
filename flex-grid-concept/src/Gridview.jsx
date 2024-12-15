import React from 'react'
import GridConcept from '../public/imgs/Grid_Concept.jpg'

const Gridview = () => {
  return (
    <div className='grid bg-red-100 '>
            <div className='flex justify-center items-center'>
              <img src={GridConcept} width={720} height={720} alt="Grid Concept" />
            </div>
            <div>
                <h1>
                col-span-* utilities to make an element span n columns.
                </h1>
            </div>
          <div className='w-full bg-amber-200 grid grid-cols-6 gap-2 '>
              <div className='m-2 h-[80px] bg-red-200  col-start-2 col-span-4 '>grid 1</div>
              <div className='m-2 h-[80px] bg-slate-300  col-start-1 col-end-3 '>grid 2</div>
              <div className='m-2 h-[80px] bg-slate-400/65 col-end-6 col-span-3'>grid 3</div>
              <div className='m-2 h-[80px] bg-slate-400/65 col-start-1 col-end-7'>grid 4</div>
              <div className='m-2 h-[80px] bg-slate-600/65 col-start-1 col-end-4'>grid 5</div>
              <div className='m-2 h-[80px] bg-slate-700/65 col-end-7 col-span-6'>grid 6</div>
              <div className='m-2 h-[80px] bg-blue-600/65 col-start-1 col-span-4'>grid 7</div>
              <div className='m-2 h-[80px] bg-blue-800/65 col-end-4 col-span-3'>grid 8</div>
              <div className='m-2 h-[80px] bg-green-800/65 col-end-7 col-span-5'>grid 9</div>
          </div>
    </div>

  )
}

export default Gridview