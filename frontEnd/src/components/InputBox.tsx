import React from 'react'

function InputBox({label,title,onChange,type ,value}:{
    label:string;
    title:string;
    type?:string;
    value:string | undefined;
    onChange:(e:React.FormEvent)=>void;
    
}) {
  return (
    <div>
      <div className='flex flex-col gap-2'>
                  <label className='text-xl font-semibold' htmlFor="input">{label}</label>
                  <input value={value} type={ type ||"text"} onChange={onChange} className='h-12 w-80 pl-2 border-2 border-slate-300 rounded-lg' placeholder={title}/>
                </div>
    </div>
  )
}

export default InputBox
