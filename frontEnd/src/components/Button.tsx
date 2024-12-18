import React from 'react'

function Button({label}:{
   label:string
    
}) {
  return (
    <div> 
       <button type='submit' className='h-12 w-80 bg-black border-2 border-white rounded-xl text-white mt-4'>{label}</button>       
    </div>
  )
}

export default Button
