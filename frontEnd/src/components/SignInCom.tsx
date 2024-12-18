import {Header ,InputBox,Button} from './index'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { SignInType } from '@ay1x/common-package'
import { BACKEND_URL } from '../config'
import axios from 'axios'


function SignInCom() {
    const navigate=useNavigate()
    const [postInput,setPostInput]=useState<SignInType>({
        email:"",
        password:""
    })
    
    const handleOnSubmit= async(e:React.FormEvent )=>{
        e.preventDefault()
        
        
       try{
        const res= await axios({
            method:"post",
            url:`${BACKEND_URL}/user/signin`,
            data:postInput
        })
        console.log(res.data);
        
       const jwt =res.data.token;
        localStorage.setItem("token",jwt);
        navigate('/blogs/')
       }
       catch (err) {
        alert(`${err}`)
       }
     
      
    }
    
    
    
  return (
    <div className='flex justify-center items-center  h-full'>
       <div className='flex flex-col justify-center items-center  h-3/4 w-3/4'>
         <Header title='Login' label='Signup' ifaccount='Dont have an account?' navigateTo='/signup'/>
         <form onSubmit={handleOnSubmit} className='flex flex-col justify-center items-center gap-4' >
            <InputBox value={postInput.email} label='Email' title='Enter your email' onChange={(e)=>setPostInput({...postInput,email:e.target.value})}/>
            <InputBox value={postInput.password} label='Password' title='Enter your password' onChange={(e)=>setPostInput({...postInput,password:e.target.value})} type='password'/>
            <Button label='signin' />
            </form>
            
         
       </div>
       
    </div>
  )
}

export default SignInCom
