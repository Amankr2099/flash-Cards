import { useState } from "react";
import Card from "../Components/Card";



export default function Home({cardArr,setCardArr,cardCategory}) {

  
  const [category, setCategory] = useState("All");


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
