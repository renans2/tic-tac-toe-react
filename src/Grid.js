const lines = [
    [{row: 0, col: 0}, {row: 0, col: 1}, {row: 0, col: 2}],
    [{row: 1, col: 0}, {row: 1, col: 1}, {row: 1, col: 2}],
    [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}],
    [{row: 0, col: 0}, {row: 1, col: 0}, {row: 2, col: 0}],
    [{row: 0, col: 1}, {row: 1, col: 1}, {row: 2, col: 1}],
    [{row: 0, col: 2}, {row: 1, col: 2}, {row: 2, col: 2}],
    [{row: 0, col: 0}, {row: 1, col: 1}, {row: 2, col: 2}],
    [{row: 0, col: 2}, {row: 1, col: 1}, {row: 2, col: 0}],
]

export default class Grid{
    grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    player = undefined;

    play(player, row, col){
        this.grid[row][col] = player;
        this.player = player;
    }

    checkWinner(){
        for (const line of lines) {
            if(this.grid[line[0].row][line[0].col] === this.player &&
               this.grid[line[1].row][line[1].col] === this.player &&
               this.grid[line[2].row][line[2].col] === this.player
            ) return true;
        }

        return false;
    }

    reset(){
        this.grid = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
    }
}
