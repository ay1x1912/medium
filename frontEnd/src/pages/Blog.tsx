import React from 'react'
import { BlogPage } from '../components/index'
import { useBlog } from '../hooks'
import { useParams, useSearchParams } from 'react-router';

function Blog() {
  const {id}=useParams();
  const idinNum= Number(id)
 console.log(idinNum);
  
  const {blog,loading}=useBlog(idinNum);
  console.log(loading);
  
  return (
    <div>
      <BlogPage content={blog?.content} title={blog?.title} publishedDate={blog?.createdAt} authorName={blog?.author.name} id={Number(id)}  />    
    </div>
  )
}

export default Blog
