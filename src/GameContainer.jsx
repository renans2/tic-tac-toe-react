import { useEffect, useState } from "react";
import { useGameContext } from "./GameContextProvider";
import Square from "./components/Square";

export default function GameContainer(){
    const { gameOver, setGameOver, currentPlayer, grid } = useGameContext();
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        const sqrs = [];

        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                sqrs.push(<Square key={`${r}${c}`}
                                  row={r}
                                  col={c} />);
            }
        }

        setSquares(sqrs);
    }, []);

    return(
        <div className="grid grid-cols-3 gap-[1%] relative h-[min(100vw,80vh)] w-[min(100vw,80vh)]">
            {squares}
        </div>
    )
}
