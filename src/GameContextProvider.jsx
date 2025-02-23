import { createContext, useContext, useState } from "react";
import Grid from './Grid'

const GameContext = createContext();

export default function GameContextProvider({ children }){
    const [currentPlayer, setCurrentPlayer] = useState("O");
    const [grid, setGrid] = useState(new Grid());

    return(
        <GameContext.Provider value={{ currentPlayer, setCurrentPlayer, grid, setGrid }}>
            { children }
        </GameContext.Provider>
    )
}

export const useGameContext = () => useContext(GameContext);
