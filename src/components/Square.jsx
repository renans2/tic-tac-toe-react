import { useState } from "react"
import { useGameContext } from "../GameContextProvider"

export default function Square({ row, col }){
    const { currentPlayer, grid, gameOver, setGameOver } = useGameContext();
    const [text, setText] = useState();

    const handleClick = () => {
        setText(currentPlayer.current);
        grid.current.play(currentPlayer.current, row, col);
        currentPlayer.current = currentPlayer.current === "X" ? "O" : "X";

        if(grid.current.checkWinner()){
            setGameOver(true);
            console.log("winner!!!");
        }
    }
    
    return(
        <button 
            onClick={handleClick} 
            disabled={gameOver || text !== undefined}
            className="w-50 h-50 bg-blue-300 rounded-2xl cursor-pointer text-4xl"
        >
            {text}
        </button>
    )
}
