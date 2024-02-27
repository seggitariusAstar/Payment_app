import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Signup } from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { SendMoney } from './Pages/SendMoney'
import { Dashboard } from './Pages/Dashboard'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path="/signup" element={<Signup></Signup>}/>
      <Route path="/signin" element={<Signin></Signin>}/>
       <Route path ="/send" element={<SendMoney></SendMoney>}/>
       <Route path ="/dashboard" element={<Dashboard></Dashboard>}/>
  
  

      </Routes>
      
  </BrowserRouter>

    </>
  )
}

export default App
