const GameInfo = (props) => {
    return (
        <div className="game-info">
            <h1>Welcome to Connect 4</h1>
            <p>Current Turn:  
            <span className = {props.redActive === true? "Red" : "Black"}>{props.redActive === true ? " Red" : " Black"}</span>
            </p>
            {
                props.winner === null ? null
                : <h2 className={props.winner}>{props.winner} Wins!</h2>
            }
        </div>
    )
}

export default GameInfo;