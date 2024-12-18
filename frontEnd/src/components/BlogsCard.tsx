import React from 'react'
import { Link } from 'react-router'

interface BlogsCardProps{
  authorName:string,
  title:string,
  content:string,
  publishedDate:string,
  id:number
}
function BlogsCard({authorName,title,id,content,publishedDate}:BlogsCardProps ) {
   
  
  return (
    <Link className='h-60  mt-12 w-9/12' to={`/blog/${id}`}>
    <div className=' h-full   border-b-2 mx-20 cursor-pointer  '>
      <div className='flex gap-3 font-medium '>
        <p><Avatar authorName={authorName}/></p>
        
        <p>{authorName}</p>
        <div className='flex justify-center items-center'>.</div>
      <p>{publishedDate.slice(0,10)}</p>

      </div>
      <p className='text-4xl text-ellipsis overflow-hidden  mt-2 font-semibold h-1/4'>
        {title}
      </p>
      <div className='text-2xl text-ellipsis overflow-hidden font-extralight h-1/4'>
        {content}
      </div>
      <div  className='flex justify-between  items-start pt-4 h-1/2'>
        {Math.ceil((content.length)/100)+"min read"}
        <div className='flex gap-4  '>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
           </svg>

        </div>
      </div>
    </div>
    </Link>
  )
}

export default BlogsCard

const Avatar=({authorName}:{
  authorName:string
})=>{
  return(
    <div  className='bg-red-400 flex items-center justify-center rounded-full size-7'>
      <span>{authorName.slice(0,2)}</span>
    </div>
  )
}
