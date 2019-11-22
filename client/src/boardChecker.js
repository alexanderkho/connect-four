//Utility Functions to check for wins on any board.
//Boards are represented as an array of vertical columns. 
//1 represents a red piece and 2 a black piece. 0 represents an empty space

const checkOneColumn = (column) => {
    let redCount = 0;
    let blackCount = 0;
    for (let piece of column) {
        if (piece === 1) {
            redCount ++;
            blackCount = 0;
        } else if (piece === 2) {
            redCount = 0;
            blackCount ++; 
        } else {
            redCount = 0;
            blackCount = 0;
        }

        if (redCount === 4) {
            return 1;
        } else if (blackCount === 4) {
            return 2;
        }
    }
    return null;
};

//Returns a tuple containing [winner, colIndex]
const checkAllColumns = (board) => {
    for (let i = 0; i < board.length; i ++) {
        const result = checkOneColumn(board[i]);
        if (result === 1) {
            return [1, i];
        } else if (result === 2) {
            return [2, i];
        }
    }
    return null;
};

const checkOneRow = (board, rowIndex) => {
    let redCount = 0;
    let blackCount = 0;
    for (let column of board) {
        if (column[rowIndex] === 1) {
            redCount ++;
            blackCount = 0;
        } else if (column[rowIndex] === 2) {
            redCount = 0;
            blackCount ++; 
        } else {
            redCount = 0;
            blackCount = 0;
        }

        if (redCount === 4) {
            return 1;
        } else if (blackCount === 4) {
            return 2;
        }
    }
    return null;
};

//Returns a tuple containing [winner, rowIndex]
const checkAllRows = (board) => {
    const rows = board[0].length;
    for (let i = 0; i < rows; i ++) {
        const result = checkOneRow(board, i)
        if (result === 1) {
            return [1, i];
        } else if (result === 2) {
            return [2, i];
        }
    }
    return null
};


const checkOneDiagLtoR = (board, colIndex) => {
    let rowIndex = colIndex < 0 ? Math.abs(colIndex) : 0;
    colIndex = colIndex < 0 ? 0 : colIndex;
    const colsToTraverse = Math.min(board.length - colIndex, board[0].length - rowIndex);
    let redCount = 0;
    let blackCount = 0;
    for (let i = 0; i < colsToTraverse; i ++) {
        const column = board[colIndex + i];
        const row = rowIndex + i;
        if (column[row] === 1) {
            redCount ++;
            blackCount = 0;
        } else if (column[row] === 2) {
            redCount = 0;
            blackCount ++; 
        } else {
            redCount = 0;
            blackCount = 0;
        }

        if (redCount === 4) {
            return 1;
        } else if (blackCount === 4) {
            return 2;
        }
    }
    return null;
};

const checkAllDiagsLtoR = (board) => {
    const rows = board[0].length;
    for (let i = -rows; i < rows; i ++) {
        const result = checkOneDiagLtoR(board, i);
        if (result === 1) {
            return [1, i]
        } else if (result === 2) {
            return [2, i];
        }
    }
    return null
};

const checkOneDiagRtoL = (board, colIndex) => {
    let redCount = 0;
    let blackCount = 0;
    const colsToTraverse = colIndex + 1;
    let row = 0;
    for (let i = colsToTraverse; i > -1; i --) {
        const column = board[i];
        if (!!column) {
            if (column[row] === 1) {
                redCount ++;
                blackCount = 0;
            } else if (column[row] === 2) {
                redCount = 0;
                blackCount ++; 
            } else {
                redCount = 0;
                blackCount = 0;
            }
    
            if (redCount === 4) {
                return 1;
            } else if (blackCount === 4) {
                return 2;
            }
        }
        row ++;
    }
};

const checkAllDiagsRtoL = (board) => {
    const N = board.length + board[0].length;
    for (let i = 0; i < N; i ++) {
        const result = checkOneDiagRtoL(board, i);
        if (result) {
            return [result, i];
        }
    }
    return null;
}

const checkWholeBoard = (board) => {
    const Rows = checkAllRows(board);
    if (Rows) {
        return Rows;
    } 
    
    const Cols = checkAllColumns(board);
    if (Cols) {
        return Cols;
    }

    const LtoR = checkAllDiagsLtoR(board);
    if (LtoR) {
        return LtoR;
    }

    const RtoL = checkAllDiagsRtoL(board);
    if (RtoL) {
        return RtoL;
    }

    return null;
};


export default checkWholeBoard;