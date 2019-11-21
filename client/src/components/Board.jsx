import Column from './Column.jsx';
import GameInfo from './GameInfo.jsx';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redActive: true, 
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
    }

    toggleColumn(colIndex) {
        //red piece: 1, black piece: 2
        const newPiece = this.state.redActive === true ? 1 : 2;
        console.log('toggling column!' + colIndex)
        let newCols = Array.from(this.state.columns);
        // const bottomPiece = newCols[colIndex].indexOf(1);
        const bottomPiece = newCols[colIndex].findIndex((n) => n!== 0);
        if (bottomPiece !== -1) {
            newCols[colIndex][bottomPiece - 1] = newPiece;
        } else {
            newCols[colIndex][newCols[colIndex].length - 1] = newPiece;
        }
        this.setState({
            redActive: !this.state.redActive,
            columns: newCols
        });
    }

    render() {
        console.log(this.state.columns);
        return (<div className="board">
            <GameInfo redActive={this.state.redActive} />
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
