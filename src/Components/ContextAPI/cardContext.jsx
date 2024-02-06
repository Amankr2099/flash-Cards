import { useEffect, useState } from "react";
import { CardContext } from "./appContext";
import { defaultCard,defaultCategory } from "./defaultCards"

const CardProvider = ({children})=>{
    const [cardArray,setCardArray] = useState(()=>{
        let localCardArray = JSON.parse(localStorage.getItem('currentCardArray'));
        if (!localCardArray) {
            return defaultCard;
        }
        return localCardArray
    });

    
    const [cardCategory,setCardCategory] = useState(()=>{
        let localCardCat = JSON.parse(localStorage.getItem('currentCardCat'));
        if (!localCardCat) {
            return defaultCategory;
        }
        return localCardCat
    });
   
 
    useEffect(()=>{
        localStorage.setItem('currentCardArray',JSON.stringify(cardArray))
    },[cardArray]);


    useEffect(()=>{
        localStorage.setItem('currentCardCat',JSON.stringify(cardCategory))
    },[cardCategory]);


    return (
        <CardContext.Provider
            value={{
                cardArray,
                setCardArray,
                cardCategory,
                setCardCategory
            }}
        >
            {children}
        </CardContext.Provider>
    )
}



export {CardContext,CardProvider}