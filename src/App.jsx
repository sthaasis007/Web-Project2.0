import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Shopnow from "./components/Shopnow"
import About from "./components/About"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Shopnow" element={<Shopnow/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App