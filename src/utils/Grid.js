const lines = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
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
            if(this.grid[line[0][0]][line[0][1]] === this.player &&
               this.grid[line[1][0]][line[1][1]] === this.player &&
               this.grid[line[2][0]][line[2][1]] === this.player
            ) {
                this.winnerLine = line;
                return true;
            }
        }

        return false;
    }

    checkGameOver(){
        return this.checkWinner() || this.checkDraw();
    }

    checkIfInWinnerLine(row, col){
        for (const square of this.winnerLine){
            if(square[0] === row && square[1] === col)
                return true;
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
}
