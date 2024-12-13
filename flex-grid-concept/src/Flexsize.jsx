import React from 'react'

const Flexsize = () => {
  return (
    <div className='h-screen flex flex-col bg-slate-500'>
        <h1 className='flex justify-center items-center m-2 bg-blue-600/85 rounded-lg border-yellow-900 dark:border-green-200 border-[2px] text-blue-100 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             we want to realize some conception about flex-1 & flex-auto and ...
        </h1>

        <div className='flex justify-center items-center'>
            <div>div1</div>
            <div>div1</div>
            <div>div1</div>
            <div>div1</div>

        </div>

    </div>
  )
}

export default Flexsize