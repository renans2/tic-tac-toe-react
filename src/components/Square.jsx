import { useEffect, useState } from "react"
import { useGameContext } from "../GameContextProvider"

export default function Square({ row, col }){
    const { currentPlayer, grid, gameOver, setGameOver } = useGameContext();
    const [text, setText] = useState();

    const handlePlay = () => {
        setText(currentPlayer.current);
        grid.current.play(currentPlayer.current, row, col);

        if(grid.current.checkGameOver()){
            setGameOver(true);
        } else {
            currentPlayer.current = currentPlayer.current === "X" ? "O" : "X";
        }
    }

    useEffect(() => {
        if(gameOver === false)
            setText();
    }, [gameOver]);
    
    return(
        <button 
            onClick={handlePlay} 
            disabled={gameOver || text !== undefined}
            className={
                (grid.current.checkWinner() && 
                 grid.current.checkIfInWinnerLine(row, col) 
                    ? "bg-green-500" 
                    : "bg-blue-950")
                    // + gameOver || text !== undefined ? " cursor-not-allowed" : " cursor-pointer" 
                    + " w-full h-full relative text-[min(20vw,20vh)] rounded-[10%]"
            }
        >
            <span className="absolute text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{text}</span>
        </button>
    )
}
