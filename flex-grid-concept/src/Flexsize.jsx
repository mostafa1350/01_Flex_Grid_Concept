import React from 'react'

const Flexsize = () => {
  return (
    <div className='h-screen flex flex-col bg-slate-500'>
        <h1 className='flex justify-center items-center m-2 bg-blue-600/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             we want to realize some conception about flex-1 & flex-auto and ...
        </h1>
        <h1 className='flex justify-center items-center m-7 bg-blue-900/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             we check 3 parameters , grow , shrink <br/>
             when we use flex-1 , we allow a flex item to grow and shrink ,  ignoring its initial size
        </h1>

          <div className='flex justify-center items-center text-[25px]'>
              <div class="flex h-[50px] ml-2 flex-none w-14 bg-yellow-300 justify-center items-center">
                  01
              </div>
              <div class="flex h-[50px] flex-1 w-64 bg-green-300 justify-center items-center">
                  02
              </div>
              <div class="flex h-[50px] mr-2 flex-1 w-32 bg-pink-200 justify-center items-center">
                  03
              </div>

          </div>

      </div>
  )
}

export default Flexsize