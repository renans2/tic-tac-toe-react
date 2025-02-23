import { useEffect, useState } from "react";
import Square from "./Square";

export default function GameContainer(){
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
        <div className="game-container">
            {squares}
        </div>
    )
}
