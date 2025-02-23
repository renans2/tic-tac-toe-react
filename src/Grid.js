export default class Grid{
    constructor(grid){
        if(grid === undefined){
            this.grid = [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ]
        } else {
            this.grid = grid;
        }
    }

    play(player, row, col){
        this.grid[row][col] = player;
        return new Grid(this.grid.map(row => [...row]));
    }
}
