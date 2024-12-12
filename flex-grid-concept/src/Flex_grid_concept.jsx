import React ,{useState , useEffect} from 'react';
import sunday from "../public/imgs/sun-day.svg";
import moonnight from "../public/imgs/moon-night.svg";

const Flex_grid_concept = () => {
  const [display, setDisplay] = useState('light');

  useEffect(() => {
    if (display === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [display]);

  const changeDisplay = () => {
    setDisplay(display === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className='h-screen bg-no-repeat m-0 p-0 bg-cover bg-center bg-ChalpeyLight dark:bg-ChalpeyDark'>
      
      <div className='flex flex-col justify-center items-center'>
        <div className='flex w-full justify-end items-center my-5'>
          <button onClick={changeDisplay} className='mr-10'>
            {display === "dark" ?
              <img src={sunday} width={40} height={40} alt="Sun" /> :
              <img src={moonnight} width={40} height={40} alt="Moon" />
            }
          </button>
        </div>
        <div className='flex flex-col space-y-2 justify-center items-center'>
          <h1 className='  bg-yellow-300/30 rounded-lg border-red-500 dark:border-green-200 border-[2px] text-blue-900 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
            We want to examine these concepts <span className='text-black font-medium italic underline'>(Flex and Grid)</span> from different angles.
          </h1>
          <h1 className='  bg-blue-300/50 rounded-lg border-yellow-500 dark:border-green-200 border-[2px] text-blue-900 dark:bg-yellow-50/50 text-[30px] px-10 py-6'>
             Now you shrink the page , you see the size and color and direction of div changes...
          </h1>
        </div>
        <div className='flex w-full flex-col space-y-2 my-10 sm:flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-row'>
            <div className='flex justify-center items-center w-full m-2  border-yellow-50 border-[2px] bg-blue-300/50 sm:bg-yellow-300/50 before:sm:content-["I am SM size"] md:bg-red-500/70 lg:bg-yellow-200/55 lg:w-full h-[80px] '>Div1 changes</div>
            <div className='flex justify-center items-center w-full m-2  border-green-200 border-[2px] bg-blue-500/50 sm:bg-yellow-300/50 md:bg-red-500/70 lg:bg-yellow-400/55 lg:w-full h-[80px] '>Div2 changes</div>
            <div className='flex justify-center items-center w-full m-2  border-red-200 border-[2px] bg-blue-700/50 sm:bg-yellow-300/50 md:bg-red-500/70 lg:bg-yellow-500/55 lg:w-full h-[80px] '>Div3 changes</div>
            <div className='flex justify-center items-center w-full m-2  border-blue-300 border-[2px] bg-blue-900/50 sm:bg-yellow-300/50 md:bg-red-500/70 lg:bg-yellow-600/55 lg:w-full h-[80px] '>Div4 changes</div>

        </div>
        
      </div>
    </div>
    )
}

export default Flex_grid_concept