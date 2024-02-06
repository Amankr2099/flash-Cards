import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import Profile from './Components/Profile';
import NewCard from './Components/NewCard';
import Signup from './Pages/Signup';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <NewCard />
      <Profile  />
      <Signup/>
      <Routes>
        <Route path='/flash-Cards/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
