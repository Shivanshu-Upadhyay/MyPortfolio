import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import SideBar from './components/SideBar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Work from './components/Work';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/api' element={<SideBar/>}>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='resume' element={<Resume />} />
        <Route path='work' element={<Work />} />
         
      </Route>
      <Route
        path="*"
        element={<Navigate to="api/home" replace />}
    />
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App