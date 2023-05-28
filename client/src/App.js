import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import { Container } from '@mui/material'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Container sx={{p:1}}>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
       
        </Container>
      
      </BrowserRouter>
    </div>
  )
}

export default App