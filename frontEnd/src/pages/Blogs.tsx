import  { useEffect, useState } from 'react'
import { BACKEND_URL } from '../config';
import { BlogsCard ,AppBar, VeticalAppBar, ToogleButton} from '../components';
import axios from 'axios';
import { useBlogs } from '../hooks';


function Blogs() {

 const {loading,blogs}=useBlogs();
 
console.log(blogs);

  
  return (
    <div>
      <div className=''>
        <div className='hidden lg:block'>
          <AppBar/>
        </div>
        <div className='lg:hidden'>
          <div className='border-b h-20  mt-4  mx-20  flex justify-between items-center'>
        
          <div className='h-7 w-20 border-4 bg-black text-white flex flex-col items-center justify-center rounded-2xl p-5'>
            Medium
          </div>
          <div>
          <ToogleButton/>
          </div>
         
        </div>
        </div>
      </div>
     {/* <div className=' flex mx-20 mt-10 gap-4 px-4 border-b-2 h-32 items-end pb-6'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>

       <button>For you</button>
       <button>Follwoing</button>
     </div> */}
   
    <div className='flex flex-col justify-center items-center'>
      {blogs?.map((blog)=>{
        return <BlogsCard content={blog.content} title={blog.title} publishedDate={blog.createdAt} id={blog.id} authorName={blog.author.name} />
      })}
    </div>
    </div>
  )
}

export default Blogs

