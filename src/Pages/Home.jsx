import { useContext, useState } from "react";
import Card from "../Components/Card";
import { CardContext } from "../Components/ContextAPI/appContext";



export default function Home() {

  const {cardCategory,cardArray} = useContext(CardContext);

  const [categoryName, setcategoryName] = useState("All");

  const handlefilter = (event) => {
    const { value } = event.target;
    setcategoryName(value);
  };

  const filteredCard = cardArray.filter((card) => {
    if (categoryName == "All") {
      return card;
    }
    return card.category == categoryName;
  });

  return (
    <>
      
      <div className="container ">
        <div className="w-100 text-center">
          <select
            className="form-select m-3 text-center btn btn-light"
            aria-label="Default select example"
            name="category"
            onChange={handlefilter}
            value={categoryName}
          >
            <option>All</option>
            {cardCategory &&
                  cardCategory.map((category,index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
          </select>
        </div> 

        <div className="d-flex flex-wrap justify-content-around">
          {filteredCard &&
            filteredCard.map((card, index) => (
              <Card card={card} key={index} />
            ))}
        </div>
      </div>

    </>
  );
}
