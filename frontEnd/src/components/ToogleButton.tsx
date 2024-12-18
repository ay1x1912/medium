import React from 'react'
import { useState } from 'react';
import {Avatar} from './index'
function ToogleButton() {
  const [issideBar,setIsSideBar]=useState<boolean>(false);
  const toogleSideBar=()=>{
    setIsSideBar(!issideBar);
   }

  return (
    <div>
             <svg onClick={toogleSideBar} className={ ` size-10 ${issideBar ? 'hidden':''}   `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div className={`${!issideBar ? 'hidden':''}   `}>
               <div className='w-40 flex mt-44 -mr-16 flex-col items-center border-2 gap-4 px-4 pb-4 rounded-lg'>
                 
                   <svg onClick={toogleSideBar} className={ ` size-10   `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                   
                   <div className='flex flex-col items-center gap-4'>
                   <div className='flex justify-center items-center'>
                        <button className='bg-green-700 h-7 w-20 border p-2 flex items-center justify-center rounded-xl'>Publish</button>

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
            </div>
   </div>
  )
}

export default ToogleButton
