import  { useContext, useState } from "react";
import { CardContext } from "./ContextAPI/appContext";

export default function NewCard() {
  const {cardArray,setCardArray,cardCategory,setCardCategory} = useContext(CardContext)

  const [card, setCard] = useState({
    id: Object.keys(cardArray).length + 1,
    category: "",
    question: "",
    answer: "",
  });
 
  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setCard((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };


  const resetForm = () => { 
    setCard({
      category: "",
      question: "",
      answer: "",
    }
    )
  };

  const addCard = (event) => {
    event.preventDefault();
    setCardArray((preCards)=>{
      return [...preCards,card];
    });

    // cardArray.push(card);
    if (!cardCategory.includes(card.category)) {
      setCardCategory((preCategory)=>{
        return [...preCategory,card.category]
      })
      // cardCategory.push(card.category);
    } 
    resetForm()
  };

  return (
    <div className="modal fade rounded" tabIndex={-1} id="inputCard">
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "18rem", marginInline: "auto" }}
      >
        <div className="modal-content text-center p-2">
          <div className="modal-header">
            <h5 className="modal-title">New Card</h5>
          </div>
          

          <div className="modal-body d-flex flex-column">
            <input
              type="text"
              placeholder="Category"
              className="text-center"
              list="options"
              onChange={handleUpdate}
              name="category"
              value={card.category}
            />
            <datalist className="text-center" id="options">
              {cardCategory &&
                cardCategory.map((category, index) => (
                  <option key={index} value={category}></option>
                ))}
            </datalist>

            <input
              className="mt-3 text-center"
              autoComplete="off"
              type="text"
              placeholder="Type your question here"
              name="question"
              value={card.question}
              onChange={handleUpdate}

            />
            <input
              className="mt-3 text-center"
              autoComplete="off"
              type="text"
              placeholder="Type your answer here"
              name="answer"
              value={card.answer}
              onChange={handleUpdate}

            />
          </div>
          <div className="modal-footer d-flex justify-content-around">
            <button onClick={addCard} type="submit" className="btn">
              <i
                className="fa-solid fa-check"
                style={{ color: "#2068bb" }}
                data-bs-dismiss="modal"
              ></i>
            </button>

            <button onClick={resetForm}  type="reset" className="btn">
              <i
                className="fa-solid fa-arrows-rotate"
                style={{ color: "#2068bb" }}
              ></i>
            </button>

            <button type="button"  className="btn">
              <i
                className="fa-solid fa-xmark"
                style={{ color: "#2068bb" }}
                data-bs-dismiss="modal"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
