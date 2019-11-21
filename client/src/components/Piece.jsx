const Piece = (props) => {
    return (
        <div className={
            props.active === 0 ? "piece inactive"
            : props.active === 1 ? "piece red" : "piece black"
        }></div>
    )
};

export default Piece;

// class Piece extends React.Component {
//     constructor(props) {
//         super(props);
//         this.toggle = props.toggle;
//     }

//     render() {
//         return (
//             <div className="piece" onClick={}></div>
//         )
//     }
// }