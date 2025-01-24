'use client'

import Square from "@/components/tic-tac-toe/Square";


function TicTacToe() {
  const printThis = (i: number): string => {
    console.log('apple'[i]);

    return 'apple'[i];

  }
  return (
    <Square value={[0, 1, 2]} onSquareClick={() => printThis(2)} />
  )
}
export default TicTacToe;
