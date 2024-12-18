import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AppBar } from '../components'
import { useNavigate } from 'react-router'
import { CreatePostType } from '@ay1x/common-package'
import { BACKEND_URL } from '../config'

function Publish() {
  const navigate=useNavigate();
    const [Content,setContent]=useState<CreatePostType>({
      title:'',
      content:'',
      published:false
      
    })
const handleOnSubmit= async (e:React.FormEvent)=>{
  e.preventDefault();
  setContent({...Content,published:true})
  try{
    const post=await axios({
      method:'post',
      url:`${BACKEND_URL}/blog`,
      headers:{
       'authorization':localStorage.getItem('token')
 
      },
      data:{
       title:Content?.title,
       content:Content?.content,
       published:Content?.published,
      }
   })
    navigate(`/blog/${post.data.id}`)
    
  }catch(err){
    alert(err)
  }


}
 
    
  return (
    
    <div>

    <AppBar/>
    <form onSubmit={handleOnSubmit}>
        
    <div className='flex justify-center  w-full'>
      <div className='max-w-screen-lg  w-full mt-10'>
        <input onChange={(e)=>setContent({...Content,title:e.target.value})}  className='w-full h-20 p-4 rounded-lg border-4   ' type="text" placeholder='Title' />
      </div>
    </div>
    <div className='flex justify-center  w-full'>
      <div className='max-w-screen-lg  w-full mt-10'>
        <input onChange={(e)=>setContent({...Content,content:e.target.value})}  className='w-full h-60 p-4 rounded-lg border-4 text-start   ' type="text" placeholder='Content ' />
      </div>
    </div>
    <div className='mx-60 mt-4 flex justify-start items-center'>
    <button type='submit' className='rounded-lg bg-green-500 w-16 h-10'>Publish</button>
    </div>
    </form>
    </div>
  
  )
}

export default Publish
