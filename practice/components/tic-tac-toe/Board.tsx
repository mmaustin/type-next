

import { create } from "zustand";
import Square from "./Square";
import { combine } from "zustand/middleware";


const useGameStore = create(
  combine({ squares: Array(9).fill(null), xIsNext: true }, (set) => {
    return {
      setSquares: (nextSquares) => {
        set(state => ({
          squares:
            typeof nextSquares === 'function' ? nextSquares(state.squares) : nextSquares,
        }))
      },
      setXIsNext: (nextXIsNext) => {
        set(state => ({
          xIsNext:
            typeof nextXIsNext === 'function'
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }))
      }
    }
  })
)

function Board() {

  const xIsNext = useGameStore(state => state.xIsNext);
  const setXIsNext = useGameStore(state => state.setXIsNext);
  const squares = useGameStore(state => state.squares);
  const setSquares = useGameStore(state => state.setSquares);
  const player = xIsNext ? 'X' : 'O'

  function handleClick(i: number) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (

    <div className="h-40 w-40" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr', width: 'calc(3 * 2.5rem', height: 'calc(3 * 2.5rem', border: '1px solid #999' }}>
      {squares.map((square, index) => (
        <Square key={index} useIndex={index} value={square} onSquareClick={() => handleClick(index)} />
      ))}
    </div>
  )
}
export default Board;