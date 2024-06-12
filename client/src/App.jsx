import React from 'react'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Header from '../components/Header.jsx'
import Home from './Home.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
