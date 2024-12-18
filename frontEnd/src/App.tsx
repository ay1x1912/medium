 
import { BrowserRouter, Route, Routes } from 'react-router'
import { SignIn,SignUp,Blog,Blogs,Publish  } from './pages'
function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path='/signup'    element={<SignUp/>}/>
      <Route path='/signin'    element={<SignIn/>}/>
      <Route path='/blog/:id' element={<Blog/>}/>
      <Route path='/blogs'    element={<Blogs/>}/>
      <Route path='/publish' element={<Publish/>}/>

     </Routes>
    </BrowserRouter>
    
  )
}

export default App
