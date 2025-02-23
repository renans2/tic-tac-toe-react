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
    playsCounter = 0;
    winnerLine = undefined;

    play(player, row, col){
        this.player = player;
        this.grid[row][col] = this.player;
        this.playsCounter++;
    }

    checkDraw(){
        return this.playsCounter === 9;
    }

    checkWinner(){
        for (const line of lines) {
            if(this.grid[line[0].row][line[0].col] === this.player &&
               this.grid[line[1].row][line[1].col] === this.player &&
               this.grid[line[2].row][line[2].col] === this.player
            ) {
                this.winnerLine = line;
                return true;
            }
        }

        return false;
    }

    reset(){
        this.grid = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];

        this.player = undefined;
        this.playsCounter = 0;
        this.winnerLine = undefined;
    }

    checkGameOver(){
        return this.checkWinner() || this.checkDraw();
    }

    getResult(){
        return this.checkWinner() ? `"${this.player}" wins !!!`
                                  : "Draw !!!"
    }

    checkIfInWinnerLine(row, col){
        for (const square of this.winnerLine){
            if(square.row === row && square.col === col)
                return true;
        }

        return false;
    }
}
