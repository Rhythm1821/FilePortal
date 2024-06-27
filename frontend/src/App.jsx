import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import FileUpload from './components/FileUpload'
// import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  const Logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    return <Navigate to={'/login'} />
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path='/home' element={<Navigate to={'/'} />} /> */}
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register />} /> 
          <Route path='/logout' element={<Logout />} />
          <Route path="/upload" element={<FileUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App