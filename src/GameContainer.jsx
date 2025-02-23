import Square from "./components/Square";

export default function GameContainer(){
    const squares = [];

    for (let row = 0; row < 3; row++)
        for (let col = 0; col < 3; col++)
            squares.push(<Square key={parseInt(`${row}${col}`)} 
                                 row={row} 
                                 col={col} />);

    return(
        <div className="grid grid-cols-3 w-fit gap-2">
            {squares}
        </div>
    )
}
