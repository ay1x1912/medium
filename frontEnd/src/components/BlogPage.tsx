import React from 'react'
import Avatar from './Avatar'
import {AppBar,ToogleButton} from '../components/index'

interface BlogsPageProps{
  authorName?:string,
  title?:string,
  content?:string,
  publishedDate?:string,
  id?:number
}
function BlogPage({authorName,title,content,publishedDate}:BlogsPageProps) {
  return (
    <div className='  h-screen'>
     
        <div className='hidden lg:block'>
          <AppBar/>
        </div>
        <div className='lg:hidden'>
          <div className='border-b h-20    mx-20  flex justify-between items-center'>
        
          <div className='h-7 w-20 border-4 bg-black text-white flex flex-col items-center justify-center rounded-2xl p-5'>
            Medium
          </div>
          <div>
          <ToogleButton/>
          </div>
         
        </div>
        </div>
      
    <div className=' h-3/4 w-full mt-10   grid grid-cols-12'>
      <div className='ml-20  ] col-span-12   xl:col-span-8 p-10 '>
        <div className=' text-8xl font-bold mb-2'>
         {title}
        </div >
        <p className='text-xl font-extralight mb-4 text-slate-500'>{publishedDate?.slice(0,10)}</p>
        <div className='text-2xl font-normal text-gray-400'>
          {content}
        </div>
      </div>
      <div className=' hidden  mr-20 p-10 xl:col-span-4 xl:block '>
        <p className='text-lg text-slate-400 font-normal -ml-6 m-4 '>Author</p>
        <div className='flex -ml-4  items-center'>
          <div className='flex  flex-col justify-center'>
            <Avatar  authorName={authorName}/>
           </div>
          <div className='ml-4 text-4xl font-bold'>{authorName}</div>
        </div>
        <div className='m-6 text-lg w-full font-normal text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qua Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo obcaecati ratione error autem accusamus possimus vitae eos hic, praesentium facere.</div>
      </div>
    </div>
    </div>
  )
}

export default BlogPage
