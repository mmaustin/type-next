/* eslint-disable @typescript-eslint/no-unused-vars */

import { create } from "zustand";
import Square from "./Square";
import { combine } from "zustand/middleware";


const useGameStore = create(
  combine({ squares: Array(9).fill(null) }, (set) => {
    return {
      setSquares: (nextSquares) => {
        set(state => ({
          squares:
            typeof nextSquares === 'function' ? nextSquares(state.squares) : nextSquares,
        }))
      }
    }
  })
)

function Board() {

  const squares = useGameStore(state => state.squares);
  const setSquares = useGameStore(state => state.setSquares);

  function handleClick(i: number){
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    // <div className="">
      <div className="h-40 w-40" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr', width: 'calc(3 * 2.5rem', height: 'calc(3 * 2.5rem', border: '1px solid #999' }}>
        {squares.map((square, index) => (
          <Square key={index} useIndex={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
        {/* <Square value='1' />
        <Square value='2' />
        <Square value='3' />
        <Square value='4' />
        <Square value='5' />
        <Square value='6' />
        <Square value='7' />
        <Square value='8' />
        <Square value='9' /> */}
      </div>
    // {/* </div> */}

  )
}
export default Board;