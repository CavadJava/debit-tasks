import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css'
import Home from './components/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/users">Users</Link> {" "}
        </nav>
        <Routes>
          <Route path="/users" element={ <Users />}/>
          <Route path="/user" element={ <UserDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
