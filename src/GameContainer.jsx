import Square from "./components/Square";

export default function GameContainer(){
    return(
        <div className="grid grid-cols-3 w-fit gap-2">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    )
}
