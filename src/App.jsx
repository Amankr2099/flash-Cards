import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
