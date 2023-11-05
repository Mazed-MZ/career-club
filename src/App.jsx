import { useState } from 'react';
import './App.css'
import Navbar from './components/Header/Navbar';
import { Outlet } from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
