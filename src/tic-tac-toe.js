class TicTacToe {
    constructor() {
        this.player = 'x';
        this.grid = [[null, null, null], [null, null, null], [null, null, null]]
    }

    getCurrentPlayerSymbol() {
        return this.player
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.grid[rowIndex][columnIndex] === null) {
            this.grid[rowIndex][columnIndex] = this.player;
            if (this.player === 'x') {
                this.player = 'o';
            } else if (this.player === 'o') {
                this.player = 'x';
            }
        }
    }

    isFinished() {
        return !!(this.getWinner() || this.noMoreTurns());
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.grid[i][0] === this.grid[i][1] && this.grid[i][0] === this.grid[i][2]) {
                return this.grid[i][0];
            } else if (this.grid[0][i] === this.grid[1][i] && this.grid[0][i] === this.grid[2][i]) {
                return this.grid[0][i];
            }
        }

        if (this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2]) {
            return this.grid[1][1];
        } else if (this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]) {
            return this.grid[1][1];
        } else {
            return null;
        }
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.grid[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
