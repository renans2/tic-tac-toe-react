import { createContext, useState, useContext, useRef } from "react";
import Grid from './Grid'

const GameContext = createContext();

export default function GameContextProvider({ children }){
    const currentPlayer = useRef("O");
    const grid = useRef(new Grid());
    const [gameOver, setGameOver] = useState(false);

    return(
        <GameContext.Provider value={{ currentPlayer, grid, gameOver, setGameOver }}>
            { children }
        </GameContext.Provider>
    )
}

export const useGameContext = () => useContext(GameContext);
