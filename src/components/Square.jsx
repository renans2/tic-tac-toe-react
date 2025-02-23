import { useEffect, useState } from "react"
import { useGameContext } from "../context/GameContextProvider"

export default function Square({ row, col }){
    const { currentPlayer, grid, gameOver, setGameOver } = useGameContext();
    const [text, setText] = useState();

    useEffect(() => {
        if(gameOver === false)
            setText();
    }, [gameOver]);

    const handlePlay = () => {
        setText(currentPlayer.current);
        grid.current.play(currentPlayer.current, row, col);

        if(grid.current.checkGameOver())
            setGameOver(true);
        else
            updatePlayer();
    }

    const updatePlayer = () => {
        currentPlayer.current = currentPlayer.current === "X" ? "O" : "X";
    }

    const greenSquare = () => {
        return grid.current.checkWinner() && 
               grid.current.checkIfInWinnerLine(row, col);
    }

    const isDisabled = () => {
        return gameOver || text !== undefined;
    }
    
    return(
        <button onClick={handlePlay} 
                disabled={isDisabled()}
                className={"square " +
                    (
                        greenSquare()
                        ? "green-square" 
                        : isDisabled() 
                        ? "blocked-square" 
                        : "available-square"
                    )
                }>
            <span className="player-text">{text}</span>
        </button>
    )
}
