import { useGameContext } from "../context/GameContextProvider";

export default function PlayAgainButton(){
    const { grid, setGameOver } = useGameContext();
    
    const handleReset = () => {
        grid.current.reset();
        setGameOver(false)
    }
    
    return(
        <button onClick={handleReset} 
                className="play-again-button">
            Play Again
        </button>
    )
}
