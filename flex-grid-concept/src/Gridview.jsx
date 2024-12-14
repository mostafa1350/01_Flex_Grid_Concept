import React from 'react'

const Gridview = () => {
  return (
    <div className='grid bg-red-100 '>
            <div>
                <h1>
                col-span-* utilities to make an element span n columns.
                </h1>
            </div>
          <div className='w-full bg-amber-200 grid grid-cols-6 gap-2 '>
              <div className='m-2 h-[80px] bg-red-200 col-start-2 col-span-3  '>grid 1</div>
              <div className='m-2 h-[80px] bg-slate-300   '>grid 2</div>
              <div className='m-2 h-[80px] bg-slate-400/65 '>grid 3</div>
              <div className='m-2 h-[80px] bg-slate-400/65'>grid 4</div>
              <div className='m-2 h-[80px] bg-slate-600/65'>grid 5</div>
              <div className='m-2 h-[80px] bg-slate-700/65'>grid 6</div>
              <div className='m-2 h-[80px] bg-blue-600/65'>grid 7</div>
              <div className='m-2 h-[80px] bg-blue-800/65'>grid 8</div>
              <div className='m-2 h-[80px] bg-green-800/65'>grid 9</div>
          </div>
    </div>

  )
}

export default Gridview