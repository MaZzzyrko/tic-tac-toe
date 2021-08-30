class TicTacToe {
    constructor() {
        this.table = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
        ];
        this.follow = 'x';
    }
//should return correct player symbol
    getCurrentPlayerSymbol() {
    return this.follow;    
    }
//should update game state correctly
    nextTurn(rowIndex, columnIndex) {
    if(!this.table[rowIndex][columnIndex]) {
        this.table[rowIndex][columnIndex] = this.follow;
            this.follow = this.follow == 'x' ? 'o' : 'x';
    }
    }   
//should return winner of the game or null
    isFinished() {
    return this.getWinner() !==null || this.isDraw();
    }

    getWinner() {
    var win = null;    
    [...this.table,
        [this.table[0][0], this.table[1][0], this.table[2][0]],
        [this.table[0][1], this.table[1][1], this.table[2][1]],
        [this.table[0][2], this.table[1][2], this.table[2][2]],
        [this.table[0][0], this.table[1][1], this.table[2][2]],
        [this.table[0][2], this.table[1][1], this.table[2][0]],
    ].some(([first, sec, third]) => {
        if (first == sec && first == third && first !==0) {
          win = first; return true;
        } return false;
    }); return win;
}
//should true if game field is full and false otherwise
    noMoreTurns() {
    return this.table.every((x) => x.every((y) => y));
    }
//should return false if game is not finished or there is a winner, and true if it is a draw
    isDraw() {
    return this.noMoreTurns()
    && !this.getWinner();
    }
//should return correct field value
    getFieldValue(rowIndex, colIndex) {
        return this.table[rowIndex][colIndex] !== null ? this.table[rowIndex][colIndex] : null

    }
}

module.exports = TicTacToe;
