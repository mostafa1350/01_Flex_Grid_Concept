import React from 'react'

const Gridview = () => {
  return (
    <div className='grid'>
          <div className=' bg-amber-200 grid grid-cols-3 gap-2 '>
              <div className='m-2 h-[80px] bg-slate-200   '>grid 1</div>
              <div className='m-2 h-[80px] bg-slate-300   '>grid 2</div>
              <div className='m-2 h-[80px] bg-slate-400/65'>grid 3</div>
              <div className='m-2 h-[80px] bg-slate-400/65'>grid 4</div>
              <div className='m-2 h-[80px] bg-slate-600/65'>grid 5</div>
              <div className='m-2 h-[80px] bg-slate-700/65'>grid 6</div>
              <div className='m-2 h-[80px] bg-slate-800/65'>grid 7</div>
          </div>
    </div>

  )
}

export default Gridview