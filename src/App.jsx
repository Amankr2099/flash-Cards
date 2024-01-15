import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { useState } from 'react';

import Profile from './Components/Profile';
import NewCard from './Components/NewCard';
import Signup from './Pages/Signup';

function App() {
  const [cardArr, setCardArr] = useState([
    {
      id:1,
      category: "Physics",
      question: "What is the speed of light?",
      answer:
        "The speed of light in a vacuum is approximately 299,792 kilometers per second (km/s).",
    },
    {
      id:2,
      category: "Biology",
      question: "What is the process of photosynthesis?",
      answer:
        "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll pigments.",
    },
    {
      id:3,
      category: "Chemistry",
      question: "What is the periodic table?",
      answer:
        "The periodic table is a tabular arrangement of chemical elements, organized based on their atomic number, electron configuration, and recurring chemical properties.",
    },
    {
      id:4,
      category: "Chemistry",
      question: "What is a chemical reaction?",
      answer:
        "A chemical reaction is a process that leads to the transformation of one set of chemical substances to another set, involving the breaking and forming of chemical bonds.",
    },
  ]);
  const [cardCategory,setCardcategory] = useState(["Physics","Biology","Chemistry"])
  const cardCount = Object.keys(cardArr).length


  return (
    <BrowserRouter>
      <NavBar />
      <NewCard cardArr={cardArr} cardCategory={cardCategory}/>
      <Profile cardCount={cardCount} />
      <Signup/>
      <Routes>
        <Route path='/flash-Cards/' element={<Home  cardArr={cardArr} setCardArr={setCardArr} cardCategory={cardCategory} />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

// cardArr={cardArr} setCardArr={setCardArr} cardCategory={cardCategory}