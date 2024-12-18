import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router'
function AppBar() {
  return (
    <div className='border-b h-20  mt-4  mx-20 flex justify-between items-center px-10'>
   <Link to={"/blogs"}>
   <div className='h-7  w-20 bg-black text-white flex flex-col items-center justify-center cursor-pointer rounded-2xl p-5'>Medium</div>
   </Link>
      <div className='flex gap-2 '>
        <div>
          <Link to={'/publish'}>
            <button className='bg-green-500 h-7 w-20 border p-4 flex items-center justify-center rounded-lg'>Create</button>
            </Link>
        </div>
        <div className='flex items-center justify-center'> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
        </div>
        <div className='flex justify-center items-center'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
           </svg>

        </div>
        <div onClick={()=>console.log('hello')} className='flex justify-center items-center '>
            <Avatar authorName='Ayaan'/>
        </div>
      </div>
    </div>
  )
}

export default AppBar
