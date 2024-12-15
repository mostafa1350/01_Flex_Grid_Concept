import React from 'react'
import GridConcept from '../public/imgs/Grid_Concept.jpg'

const Gridview = () => {
  return (
    <div className='grid bg-red-100 '>
            <div className='flex justify-center items-center'>
              <img src={GridConcept} width={720} height={720} alt="Grid Concept" />
            </div>
            <div>
                <h1 className='flex justify-center items-center h-[40px] border-[2px] border-green-700 rounded-md m-4 px-4 py-[40px] text-[30px]'>
                  According to use col-start and col-end , we can use some span(col.)
                </h1>
            </div>
          <div className='w-full bg-amber-200 grid grid-cols-6 gap-2 '>
              <div className='flex col-start-1 col-span-6 justify-center items-center text-[30px] '><h1>👇👇👇👇 col-start-2 ========== col-span-4 👇👇👇👇 </h1></div>
              <div className='flex justify-center items-center m-2 h-[80px] bg-red-200  col-start-2 col-span-4 '>
                <div className='flex justify-center items-center bg-slate-200 w-[25%] h-[80px]'>col-start-2(span1)</div>
                <div className='flex justify-center items-center bg-slate-300 w-[25%] h-[80px]'>span2</div>
                <div className='flex justify-center items-center bg-slate-400 w-[25%] h-[80px]'>span3</div>
                <div className='flex justify-center items-center bg-slate-500 w-[25%] h-[80px]'>(span4)col-span-4</div>
              </div>
              
              {/* ============================================================= */}

              <div className='flex mt-10 col-start-1 col-span-2 justify-center items-center text-[30px] '>
                <h1>👇 col-start-1== col-end-3 👇 </h1>
              </div>
              <div className='flex mt-10 col-end-6 col-span-3 justify-center items-center text-[30px] '>
                <h1>👇 col-end-6 ==== col-span-3 👇 </h1>
              </div>
              {/* ================= */}

              <div className='flex justify-center items-center m-2 h-[80px] bg-slate-300  col-start-1 col-end-3 '>
                <div className='flex justify-center items-center bg-blue-300 w-[50%] h-[80px]'>col-start-1</div>
                <div className='flex justify-center items-center bg-blue-400 w-[50%] h-[80px]'>col-end-3</div>
              </div>

              {/* ======================================================== */}

              <div className='flex justify-center items-center m-2 h-[80px] bg-slate-400/65 col-end-6 col-span-3'>
                <div className='flex justify-center items-center bg-red-300 w-[50%] h-[80px]'>col-end-6(span1)</div>
                <div className='flex justify-center items-center bg-red-400 w-[50%] h-[80px]'>span2</div>
                <div className='flex justify-center items-center bg-red-500 w-[50%] h-[80px]'>(span1)col-span-3</div>
              </div>

              {/* ============================================================== */}

              <div className='flex mt-10 col-start-1 col-end-7 justify-center items-center text-[30px] '>
                <h1>👇 col-start-1 ============================== col-end-7 👇 </h1>
              </div>

              {/* ================= */}

              <div className='flex justify-center items-center m-2 h-[80px] bg-slate-400/65 col-start-1 col-end-7'>
                <div className='flex justify-start items-center bg-green-100 w-[16.6%] h-[80px]'>👈col-start-1</div>
                <div className='flex justify-center items-center bg-green-200 w-[16.6%] h-[80px]'>==========</div>
                <div className='flex justify-center items-center bg-green-300 w-[16.6%] h-[80px]'>==========</div>
                <div className='flex justify-center items-center bg-green-400 w-[16.6%] h-[80px]'>==========</div>
                <div className='flex justify-center items-center bg-green-500 w-[16.6%] h-[80px]'>==========</div>
                <div className='flex justify-end items-center bg-green-700 w-[17%] h-[80px] text-yellow-50'>col-end-7👉</div>
             </div>
              {/* =========================================================== */}
              <div className='flex mt-10 col-start-1 col-end-7 justify-center items-center text-[30px] '>
                <h1>👇 col-end-7 ==============================  col-span-6 👇 </h1>
              </div>

              <div className='flex justify-center items-center m-6 h-[80px] bg-slate-700/65 col-end-7 col-span-6'>
                <div className='flex justify-center items-center bg-blue-100 w-[16.6%] h-[80px]'>start span(1)</div>
                <div className='flex justify-center items-center bg-blue-200 w-[16.6%] h-[80px]'>=== span(2) ===</div>
                <div className='flex justify-center items-center bg-blue-300 w-[16.6%] h-[80px]'>=== span(3) ===</div>
                <div className='flex justify-center items-center bg-blue-400 w-[16.6%] h-[80px]'>=== span(4) ===</div>
                <div className='flex justify-center items-center bg-blue-500 w-[16.6%] h-[80px]'>=== span(5) ===</div>
                <div className='flex justify-end items-center bg-blue-700 w-[17%] h-[80px] text-yellow-50'>(span6)col-end-7👉</div>
              </div>

              {/* ======================================================== */}
              <div className='flex mt-10 col-end-4 col-span-3 justify-center items-center text-[30px] '>
                <h1>👇 col-end-4 ======  col-span-3 👇 </h1>
              </div>

              <div className='flex justify-center items-center m-2 h-[80px] bg-blue-800/65 col-end-4 col-span-3'>
                <div className='flex justify-center items-center bg-yellow-400 w-[33%] h-[80px]'> === span(1) ===</div>
                <div className='flex justify-center items-center bg-yellow-500 w-[33%] h-[80px]'>=== span(2) ===</div>
                <div className='flex justify-end items-center bg-yellow-600 w-[34%] h-[80px]'>(span(3))col-end-4👉</div>
              </div>

              {/* ======================================================= */}
              <div className='flex mt-10 col-end-7 col-span-5 justify-center items-center text-[30px] '>
                <h1>👇 col-end-7 ======  col-span-5 👇 </h1>
              </div>

              <div className='flex justify-center items-center mt-2 mb-10 h-[80px] bg-green-800/65 col-end-7 col-span-5'>
                <div className='flex justify-end items-center bg-green-100 w-[20%] h-[80px]'>span(1)</div>
                <div className='flex justify-end items-center bg-green-200 w-[20%] h-[80px]'>span(2)</div>
                <div className='flex justify-end items-center bg-green-300 w-[20%] h-[80px]'>span(3)</div>
                <div className='flex justify-end items-center bg-green-400 w-[20%] h-[80px]'>span(4)</div>
                <div className='flex justify-end items-center bg-green-500 w-[20%] h-[80px]'>(span(5))col-end-7👉</div>
              </div>
              {/* =4=============================================================== */}

          </div>
    </div>

  )
}

export default Gridview