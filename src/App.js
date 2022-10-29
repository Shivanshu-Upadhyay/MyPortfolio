import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import SideBar from './components/SideBar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideBar/>}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='resume' element={<Resume />} />
      </Route>
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App