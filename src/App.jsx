import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Login from "./components/Login"
import Register from "./components/Register"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./components/Dashboard"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/services' element={<Services />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/footer' element={<Footer />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='/register' element={<Register />} />
          <Route  path='/dashboard' element={<Dashboard />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
