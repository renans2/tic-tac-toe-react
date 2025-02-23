import { useState } from "react"
import { useGameContext } from "../GameContextProvider"

export default function Square(){
    const { currentPlayer, setCurrentPlayer, grid, setGrid } = useGameContext();
    const [text, setText] = useState();

    const handleClick = () => {
        console.log("howdy");
        
        setText(currentPlayer);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
    
    return(
        <button 
            onClick={handleClick} 
            disabled={text !== undefined}
            className="w-50 h-50 bg-blue-300 rounded-2xl cursor-pointer text-4xl"
        >
            {text}
        </button>
    )
}
