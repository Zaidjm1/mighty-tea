import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Content from './Content.tsx'
import Footer from './Footer.tsx'
import About from './about.tsx'
import Error from './error.tsx'
import Menu from './Menu.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

          <Route index element={<Content/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>,
)
