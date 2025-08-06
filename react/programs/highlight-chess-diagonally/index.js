const boardSize = 8;
const App = () => {
    const [hovered, setHovered] = React.useState(null)
    
    return (
        <div className="board">
            {Array.from({ length: boardSize }).map((_, row) =>
                Array.from({ length: boardSize }).map((_, col) => {
                    const isLight = (row + col) % 2 === 0
                    const isHover = hovered && (hovered[0] === row && hovered[1] === col)
                    const isDiagonal = hovered && (hovered[0] === row || hovered[1] === col) && !isHover
                    
                    return (
                        <div key={`${row}-${col}`}
                            className={`cell ${isLight ? 'light' : 'dark'} ${isHover ? 'hovered' : isDiagonal ? 'rook-move' : ""}`}
                            role="gridcell"
                            onMouseEnter={() => setHovered([row, col])}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {isHover && <span className="rook-icon">♖</span>}
                        </div>
                    )

                })
            )}

        </div>
    )

//     return (
//     <div className="board">
//       {Array.from({ length: boardSize }).map((_, row) =>
//         Array.from({ length: boardSize }).map((_, col) => {
//           const isLight = (row + col) % 2 === 0;

//           const isHover = hovered && hovered[0] === row && hovered[1] === col

//           const isRookMove = hovered && (hovered[0] === row || hovered[1] === col) && !isHover

//           return (
//             <div
//               key={`${row}-${col}`}
//               className={`cell ${isLight ? "light" : "dark"} ${isHover ? "hovered" : isRookMove ? "rook-move" : ""}`}
//               data-testid={`cell-${row}-${col}`}
//               role="gridcell"
//               onMouseEnter={() => setHovered([row, col])}
//               onMouseLeave={() => setHovered(null)}
//             >
//               {isHover && <span className="rook-icon">♜</span>}
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)