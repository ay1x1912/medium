import React from 'react'
import { Link } from 'react-router'
function Header({title,label,navigateTo,ifaccount}:{
    title:string,
    label:string,
    ifaccount:string
    navigateTo:string }) {
        
        return (
        <div className='w-full flex flex-col items-center mb-6 gap-1 '> 
            <h1 className='text-4xl font-semibold'>{title }</h1>
            <h2 className='text-xl font-light'>{ifaccount} <Link className='underline' to={`${navigateTo}`}>{label}</Link> </h2>
        </div>
          )
}

export default Header
