
import { Qutoes ,SignInCom } from '../components'

function SignIn() {
  return (
    <div className='grid grid-cols-1  h-screen  xl:grid-cols-2'>
    <div className=' '>
      <SignInCom  />
    </div>
    <div className=' hidden xl:inline'>
     <Qutoes/>
    </div>
  </div>
  )
}

export default SignIn
