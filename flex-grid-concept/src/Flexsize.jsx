import React from 'react'

const Flexsize = () => {
  return (
    <div className='flex flex-col bg-slate-500'>
        <h1 className='flex justify-center items-center m-2 bg-blue-600/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             we want to realize some conception about flex-1 & flex-auto and ...
        </h1>
        <h1 className='m-7 bg-blue-900/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             we check 3 parameters , grow , shrink <br/>
             when we use <span className='italic underline text-yellow-200 font-bold'>flex-1</span> , we allow a flex item to grow and shrink,
             ignoring its initial size<br/>
             you will see that when you resize the page, <span className='text-[30px] underline text-green-200 italic'>div1</span> not change</h1>

          <div className='flex justify-center items-center text-[12px]'>
              <div class='flex h-[100px] ml-2 flex-none w-32 bg-yellow-300 justify-center items-center after:content-["I_Am_flex-none"] sm:after:content-["I_Am_flex-none"] sm:bg-red-400/65'></div>
              <div class='flex h-[100px] flex-1 w-64 bg-green-300 justify-center items-center          after:content-["I_Am_flex-1_div1"] sm:after:content-["I_am_flex-1_and_change_and_grow_and_shrink"] sm:bg-slate-300'></div>
              <div myAtt="I am flex-1 and change and grow and shrink" class='flex h-[100px] mr-2 flex-1 w-32 bg-pink-200 justify-center items-center      after:content-["I_Am_flex-1_div2"] sm:after:content-[attr(myAtt)] sm:bg-slate-100'></div>

          </div>
          {/* ============================================================ */}


        <h1 className='shadow-md shadow-slate-100 m-7 bg-yellow-900/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             Now we want check about <span className='text-green-200 underline'>flex-auto</span> and <span className='text-green-200 underline'>flex-initial</span><br/>
             <span className='text-yellow-200 '>flex-auto</span> allow a flex item to <span className='text-green-200 underline italic'>grow and shrink</span>, taking into account its initial size</h1>


             <div className='flex justify-center items-center text-[15px]'>
              <div class='flex h-[100px] ml-2 flex-none w-32 bg-yellow-300 justify-center items-center after:content-["I_Am_flex-none"] sm:after:content-["I_Am_flex-none"] sm:bg-red-400/65'></div>
              <div class='flex h-[100px] ml-2 flex-auto w-32 bg-blue-300 justify-center items-center after:content-["I_Am_flex-auto-w-32"] sm:after:content-["I_Am_flex-auto-w-32"] sm:bg-pink-400/65'></div>
              <div class='flex h-[100px] ml-2 flex-auto w-64 bg-red-300 justify-center items-center after:content-["I_Am_flex-auto-w-64"] sm:after:content-["I_Am_flex-auto-w-64"] sm:bg-yellow-400/65'></div>              
             </div>
             
             {/* ============================================================ */}

        <h1 className='shadow-md shadow-yellow-100 m-7 bg-yellow-900/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             <span className='text-yellow-200 '>flex-initial</span> allow a flex item to <span className='text-yellow-50 font-bold underline'>shrink</span> but not grow, taking into account its initial size</h1>

             <div className='flex justify-center items-center text-[14px] mb-10'>
              <div class='flex h-[100px] ml-2 flex-none w-32 bg-yellow-300 justify-center items-center after:content-["I_Am_flex-none"] sm:after:content-["I_Am_flex-none"] sm:bg-red-400/65'></div>
              <div class='flex h-[100px] ml-2 flex-initial w-52 bg-pink-300 justify-center items-center after:content-["I_Am_flex-initial-w-32"] sm:after:content-["I_Am_flex-initial-w-32"] sm:bg-pink-400/65'></div>
              <div class='flex h-[100px] ml-2 flex-initial w-72 bg-blue-300 justify-center items-center after:content-["I_Am_flex-initial-w-64"] sm:after:content-["I_Am_flex-initial-w-64"] sm:bg-yellow-400/65'></div>              
             </div>

      </div>
  )
}

export default Flexsize