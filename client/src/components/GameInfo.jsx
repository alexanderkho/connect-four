const GameInfo = (props) => {
    return (
        <div className="game-info">
            <h1>Welcome to Connect 4 aka Vertical Checkers!</h1>
            <p>Current Turn:  
            <span className = {props.redActive === true? "red-turn" : "black-turn"}>{props.redActive === true ? " Red" : " Black"}</span></p>
        </div>
    )
}

export default GameInfo;