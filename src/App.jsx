import React from 'react';
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Users from './components/users/Users.jsx';
import Create from './components/users/Create.jsx';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/create' element={<Create />} />
          <Route path='*' element={<h2> page not found </h2>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
