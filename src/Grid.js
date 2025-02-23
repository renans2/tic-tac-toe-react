export default class Grid{
    grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    play(player, row, col){
        this.grid[row][col] = player;
        return this.grid.map(row => [...row]);
    }
}
