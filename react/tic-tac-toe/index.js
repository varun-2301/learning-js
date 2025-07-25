/**
 * Tic Tac Toe Game
 * A simple React implementation of the classic Tic Tac Toe game.
 */

const calculateWinner = (squares) => {
    const cells = [
        [0,1,2], [3,4,5], [6,7,8], // rows 
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6] // diagonals
    ]

    for(let [a,b,c] of cells){
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
            return squares[a]
    }

    return null
}

const Game = () => {
    const [board, setBoard] = React.useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = React.useState(true)
    const winner = calculateWinner(board)

    const status = winner
        ? `Winner: ${winner}`
        : board.every(Boolean)
        ? "It's a draw!"
        : `Next Player: ${isXNext ? 'X' : 'O'}`

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setIsXNext(true)
    }

    const handleClick = (index) => {
        if(board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = isXNext ? 'X' : 'O'
        setBoard(newBoard)
        setIsXNext(!isXNext)
    }

    const renderSquare = () => {
        return board.map((cell, index) => (
            <button key={index} 
                    className="cell" 
                    onClick={() => handleClick(index)}
            >
                {cell}
            </button>
        ))
    }

    return (
        <div className="game">
            <h1>Tic Tac Toe</h1>
            <div className="status">{status}</div>
            <div className="board">{renderSquare()}</div>
            <button className="reset" onClick={resetGame}>Reset Game</button>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)