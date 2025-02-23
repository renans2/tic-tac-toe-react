import { useState } from "react"
import { useGameContext } from "../GameContextProvider"

export default function Square({ row, col }){
    const { currentPlayer, setCurrentPlayer, grid, setGrid } = useGameContext();
    const [text, setText] = useState();

    const handleClick = () => {
        setText(currentPlayer);
        setGrid(grid.play(currentPlayer, row, col));
        console.log(grid);
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
