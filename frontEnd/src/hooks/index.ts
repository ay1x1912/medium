import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import axios from 'axios'
import { BACKEND_URL } from "../config"
interface Blogs{
   content: string;
    title: string;
    createdAt: string;
    id:number,
    author: {
                name:string
            }
  }

  export const useBlog=(id:number)=>{
    const [blog,setBlog]=useState<Blogs>()
    const [loading,setLoading]=useState<Boolean>(true);
    console.log(id);
    
    useEffect(()=>{
        axios({
            method:'get',
            url:`${BACKEND_URL}/blog/${id}`,
            headers:{
                'authorization':localStorage.getItem("token")
            }
        }).then((response)=>{
            setBlog(response.data.post);
            setLoading(false);
        })
    },[])

    return {blog,loading}
    
}
export const useBlogs=()=>{
    const [blogs,setBlogs]=useState<Blogs[]>()
    const [loading,setLoading]=useState<Boolean>(true);
    useEffect(()=>{
        axios({
            method:'get',
            url:`${BACKEND_URL}/blog/bulk`,
            headers:{
                'authorization':localStorage.getItem("token")
            }
        }).then((response)=>{
            setBlogs(response.data.bulk);
            setLoading(false);
        })
    },[])

    return {blogs,loading}
    
}


