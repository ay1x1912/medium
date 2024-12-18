
import { Qutoes,SignUpCom } from '../components'

function SignUp() {
    
 return(
      <div className='grid grid-cols-1 h-screen xl:grid-cols-2'>
        <div className=' '>
          <SignUpCom  />
        </div>
        <div className=' hidden xl:inline'>
         <Qutoes/>
        </div>
      </div>

 )
}

export default SignUp
