const Avatar=({authorName}:{
    authorName?:string |"Ayaan"
  })=>{
    return(
      <div  className='bg-red-500 flex items-center justify-center rounded-full size-7'>
        <span>{authorName?.slice(0,2)}</span>
      </div>
    )
  }

  export default Avatar