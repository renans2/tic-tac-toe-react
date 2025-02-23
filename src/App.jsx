import { useGameContext } from './context/GameContextProvider'
import GameContainer from './components/GameContainer';
import PlayAgainButton from './components/PlayAgainButton';

export default function App() {
    const { gameOver } = useGameContext();

    return (
        <>
            {gameOver && <PlayAgainButton />}
            <GameContainer />
        </>
    )
}
