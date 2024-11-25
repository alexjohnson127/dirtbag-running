import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TrainingForm from './components/TrainingForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Posts from './pages/Posts'
import Services from './pages/Services'
import Training from './pages/Training'


function App() {
  const [count, setCount] = useState(0)
  const [userInfo, setUserInfo] = useState(0)

  return (
    <>
      <Router>
        <div style={{height:'80px'}}></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/training' element={<Training />} />
        </Routes>

      </Router>
      
      
    </>
  )
}

export default App
