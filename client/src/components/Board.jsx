import Column from './Column.jsx';
import GameInfo from './GameInfo.jsx';
import checkWholeBoard from '../boardChecker.js';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redActive: true, 
            winner: null,
            columns : [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0]
            ]
        }
        this.toggleColumn = this.toggleColumn.bind(this);
        this.checkBoard = this.checkBoard.bind(this);
    }

    toggleColumn(colIndex) {
        if (this.state.columns[colIndex][0] !== 0) {
            alert('Invalid Move >:(')
        } else {
            const newPiece = this.state.redActive === true ? 1 : 2;
            let newCols = Array.from(this.state.columns);
            const bottomPiece = newCols[colIndex].findIndex((n) => n!== 0);
            if (bottomPiece !== -1) {
                newCols[colIndex][bottomPiece - 1] = newPiece;
            } else {
                newCols[colIndex][newCols[colIndex].length - 1] = newPiece;
            }
            this.setState({
                redActive: !this.state.redActive,
                columns: newCols
            }, this.checkBoard());
        }
    }

    checkBoard() {
        const winResult = checkWholeBoard(this.state.columns);
        if (winResult) {
            const winner = winResult[0] === 1 ? 'Red' : 'Black'
            this.setState({
                winner: winner
            });
            this.toggleColumn = () => {};
        }
    }

    render() {
        return (<div className="board">
            <GameInfo 
            redActive={this.state.redActive} 
            winner={this.state.winner}
            />
            {
                this.state.columns.map((column, i) => {
                    return (<div className="column" key={i} onClick={() => {this.toggleColumn(i)}}>
                        <Column pieces={column} />
                    </div>)
                })
            }
        </div>
        )
    }
};

export default Board;
