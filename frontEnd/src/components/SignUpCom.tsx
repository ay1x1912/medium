import {Header ,InputBox,Button} from './index'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { SingUpType } from '@ay1x/common-package'
import { BACKEND_URL } from '../config'
import axios from 'axios'

function SignInCom() {
    const navigate=useNavigate()
    const [postInput,setPostInput]=useState<SingUpType>({
        name:"",
        email:"",
        password:""
    })
    const handleOnSubmit= async(e:React.FormEvent )=>{
        e.preventDefault()
        
        
       try{
        const res= await axios({
            method:"post",
            url:`${BACKEND_URL}/user/signup`,
            data:postInput
        })
        localStorage.setItem("token",res.data.token);
        navigate('/blogs/')
       }
      catch{
        alert("error occured while signup");  
      }
     
      
    }
    
    
    
  return (
    <div className='flex justify-center items-center  h-full'>
       <div className='flex flex-col justify-center items-center  h-3/4 w-3/4'>
         <Header title='Create an account' label='Login' ifaccount='Already have an account?' navigateTo='/signin'/>
         <form onSubmit={handleOnSubmit} className='flex flex-col justify-center items-center gap-4' >
         <InputBox value={postInput.name} label='Name' title='Enter your name' onChange={(e)=>setPostInput({...postInput,name:e.target.value})}/>
            <InputBox value={postInput.email} label='Email' title='Enter your email' onChange={(e)=>setPostInput({...postInput,email:e.target.value})}/>
            <InputBox value={postInput.password} label='Password' title='Enter your password' onChange={(e)=>setPostInput({...postInput,password:e.target.value})} type='password'/>
            <Button label='signUp' />
            </form>
            
         
       </div>
    </div>
  )
}

export default SignInCom
