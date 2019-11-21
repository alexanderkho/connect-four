import Piece from './Piece.jsx';

class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.pieces.map((piece) => {
                return (
                    <Piece active={piece} />
                
                )
            })
        )
    }
}

export default Column;
