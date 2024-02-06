import { useContext, useState } from "react";
import { CardContext } from "./ContextAPI/appContext";

export default function Card({ card }) {
  const { setCardArray } = useContext(CardContext);

  const [eye, setEye] = useState(true);

  // const [edit, setEdit] = useState(false);

  const removeCard = (id) => {
    setCardArray((preCards) => {
      return preCards.filter((item) => {
        return item.id != id;
      });
    });
  };


  return (
    <>
      <div
        className="card text-white text-center mt-5 "
        style={{ width: "280px", height: "240px" }}
      >
        <div className="card-header bg-primary">FlashCard</div>

        <div className="card-body bg-primary overflow-auto">
          {eye ? (
            // <input type="text" className="fs-1 p-2" placeholder={card.question} />
            // <div
            //   className="fs-1 p-2"
            //   contentEditable={edit}
            //   onChange={() => {
            //     handleEdit(card.id);
            //   }}
            //   name="question"
            //   value={card.question}
            // >
            //   {card.question}
            // </div>
            <div className="fs-1 p-2" >
              {card.question}
            </div>
          ) : (
            // <div
            //   className="fs-3 font-weight-light p-2"
            //   contentEditable={edit}
            //   onChange={() => {
            //     handleEdit(card.id);
            //   }}
            //   name="answer"
            //   value={card.answer}
            // >
            //   {card.answer}
            // </div>
            <div className="fs-1 p-2" >
              {card.answer}
            </div>
           
          )}
        </div>

        <div className="card-footer d-flex justify-content-around bg-primary">
          <i
            className="fa-solid fa-trash p-2 "
            onClick={() => {
              removeCard(card.id);
            }}
          />
          {/* <i
            className={`fa-solid fa${edit ? "-check" : "-pen"} p-2 `}
            onClick={() => {
              setEdit((preValue) => !preValue);
            }}
          /> */}
          <i
            className={`fa-solid fa-eye${eye ? "" : "-slash"} p-2`}
            onClick={() => {
              setEye((preState) => !preState);
            }}
          />
        </div>
      </div>
    </>
  );
}
