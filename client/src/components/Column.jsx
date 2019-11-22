import Piece from './Piece.jsx';

const Column = (props) => {
    return (
        props.pieces.map((piece, i) => {
            return (
                <Piece active={piece} key={i}/>
            )
        })
    )
}

export default Column;
