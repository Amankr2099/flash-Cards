import { useState } from "react";


export default function Card({card ,removeRequest}){
  const [eye, setEye] = useState(true);
  const handleClick = () => {
    setEye((preState) => !preState);
  };

  return (
    <>
    <div
      className="card text-white text-center mt-5 "
      style={{width: "280px",height:"240px"}}
    >
      <div className="card-header bg-primary">FlashCard</div>

      <div className="card-body bg-primary overflow-auto ">
            {eye ? (
              <div className="fs-1 p-2">{card.question}</div>
            ) : (
              <div className="fs-3 font-weight-light p-2">{card.answer}</div>
            )}        
      </div>

      <div className="card-footer d-flex justify-content-around bg-primary">
        <i className="fa-solid fa-trash p-2 "
        onClick={()=>{removeRequest(card.id)}}
         />
        <i
          className={`fa-solid fa-eye${eye ? "" : "-slash"} p-2`}
          onClick={()=>handleClick(card.id)}
        />
        
      </div>
    </div>
    </>
  );
}
