import { useEffect, useState } from "react"
import { useGameContext } from "../context/GameContextProvider"

export default function Square({ row, col }){
    const { currentPlayer, grid, gameOver, setGameOver } = useGameContext();
    const [text, setText] = useState();
    const [disabled, setDisable] = useState(false);

    useEffect(() => {
        if(gameOver && !disabled)
            setDisable(true);
        else if(!gameOver){
            setDisable(false);
            setText();
        }
    }, [gameOver]);

    const handlePlay = () => {
        setDisable(true);
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

    const handleMouseEnter = () => {
        if(!disabled)
            setText(currentPlayer.current);
    }

    const handleMouseLeave = () => {
        if(!disabled)
            setText();
    }
    
    return(
        <button onClick={handlePlay} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                disabled={disabled}
                className={"square " +
                    (
                        greenSquare()
                        ? "green-square" 
                        : disabled 
                        ? "blocked-square" 
                        : "available-square"
                    )
                }>
            <span className="player-text">{text}</span>
        </button>
    )
}
