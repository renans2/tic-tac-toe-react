import { useGameContext } from './GameContextProvider'
import GameContainer from './GameContainer';

export default function App() {
    const { gameOver, setGameOver, grid } = useGameContext();

    const handleReset = () => {
        grid.current.reset();
        setGameOver(false)
    }

    return (
        <>
            {
                gameOver &&
                <button 
                    onClick={handleReset} 
                    className="transition duration-200 hover:bg-orange-400 font-medium text-[min(5vw,5vh)] cursor-pointer mb-2 rounded-[min(3vw,3vh)] bg-amber-50 w-full h-[min(10vw,10vh)] border-2 border-amber-950"
                >
                    Play Again
                </button> 
            }
            <GameContainer />
        </>
    )
}
