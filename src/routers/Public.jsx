import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

//import Error404 from '../Pages/Error404'

const Public = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={< Home/>} />
      </Routes>    
    </div>
        

  )
}

export default Public
