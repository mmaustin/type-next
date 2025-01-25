/* eslint-disable @typescript-eslint/no-unused-vars */

import { create } from "zustand";
import Square from "./Square";
import { combine } from "zustand/middleware";


const useGameStore = create(
  combine({squares: Array(9).fill(null)}, (set) => {
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
  return (
    <div className="" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr', width: 'calc(3 * 2.5rem', height: 'calc(3 * 2.5rem', border: '1px solid #999' }}>
      <Square value='1' />
      <Square value='2' />
      <Square value='3' />
      <Square value='4' />
      <Square value='5' />
      <Square value='6' />
      <Square value='7' />
      <Square value='8' />
      <Square value='9' />
    </div>

  )
}
export default Board;