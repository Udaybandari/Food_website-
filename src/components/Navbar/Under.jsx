import React from 'react'

const Under = ({items=[]}) => {
  return (
     <div className='hidden group-hover:block transition-all duration-300 ease-in-out absolute top-12 w-[200px] text-black bg-white shadow-1xl   dark:bg-gradient-to-b from-black via-gray-900 to-gray-800 dark:text-white text-2xl rounded-md '> 
        <div className='container   '>
            <ul className='space-y-2 p-2'>
                {
                    items.map((data)=>(
                      <li key={data.id} className='hover:text-blue-400 text-[15px] font-semibold font-sans'>
                        <a href=""> {data.name}</a>
                      </li>

                    ))
                }
            </ul>
        </div>
     </div>
  )
}

export default Under