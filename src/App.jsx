import { useState } from 'react';
import './App.css'
import Navbar from './components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
