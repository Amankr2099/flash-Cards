import { useState } from "react";
import Card from "../Components/Card";
import Profile from "../Components/Profile";
import Signup from "./Signup";
import NewCard from "../Components/NewCard";


export default function Home() {

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
  const [category, setCategory] = useState("All");

  const cardCount = Object.keys(cardArr).length

  const handleOpt = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  const catCard = cardArr.filter((card) => {
    if (category == "All") {
      return card;
    }
    return card.category == category;
  });

  const removeCard = (id)=>{
    setCardArr((preCards)=>{
      return preCards.filter((item)=>{
        return item.id != id
      })
    })
  }

  return (
    <>
      <NewCard cardArr={cardArr} cardCategory={cardCategory}/>
      <Profile cardCount={cardCount}/>
    <Signup/>
      <div className="container ">
        <div className="w-100 text-center">
          <select
            className="form-select m-3 text-center btn btn-light"
            aria-label="Default select example"
            name="category"
            onChange={handleOpt}
            value={category}
          >
            <option>All</option>
            {cardCategory &&
                  cardCategory.map((category,index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
          </select>
        </div> 

        <div className="d-flex flex-wrap justify-content-around">
          {catCard &&
            catCard.map((card, index) => (
              <Card card={card} key={index} removeRequest={removeCard} cardArr={cardArr} />
            ))}
        </div>
      </div>
    </>
  );
}
