import './app.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Signup from './components/Signup'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Signup/>
  }
])
export function App() {
  
  return (
    <>
     <div className='flex h-screen p-4 items-center justify-center'>
       <RouterProvider router={router}/>
     </div>

    </>
  )
}
