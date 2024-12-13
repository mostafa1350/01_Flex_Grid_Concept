import React from 'react'

const Flexsize = () => {
  return (
    <div className='h-screen flex flex-col bg-slate-500'>
        <h1 className='flex justify-center items-center m-2 bg-blue-600/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             we want to realize some conception about flex-1 & flex-auto and ...
        </h1>
        <h1 className='m-7 bg-blue-900/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             we check 3 parameters , grow , shrink <br/>
             when we use flex-1 , we allow a flex item to grow and shrink,
             ignoring its initial size<br/>
             you will see that when you resize the page,<span className='text-[40px] underline'>div1</span> not change</h1>

          <div className='flex justify-center items-center text-[12px]'>
              <div class='flex h-[100px] ml-2 flex-none w-32 bg-yellow-300 justify-center items-center after:content-["I_Am_flex-none"] sm:after:content-["I_Am_flex-none"] sm:bg-red-400/65'></div>
              <div class='flex h-[100px] flex-1 w-64 bg-green-300 justify-center items-center          after:content-["I_Am_flex-1_div1"] sm:after:content-["I_am_flex-1_and_change_and_grow_and_shrink"] sm:bg-slate-300'></div>
              <div myAtt="I am flex-1 and change and grow and shrink" class='flex h-[100px] mr-2 flex-1 w-32 bg-pink-200 justify-center items-center      after:content-["I_Am_flex-1_div2"] sm:after:content-[attr(myAtt)] sm:bg-slate-100'></div>

          </div>

      </div>
  )
}

export default Flexsize