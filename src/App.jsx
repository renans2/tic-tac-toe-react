import { useGameContext } from './GameContextProvider'
import GameContainer from './GameContainer';

export default function App() {
    const {} = useGameContext();

    return (
        <>
            <GameContainer />
        </>
    )
}
