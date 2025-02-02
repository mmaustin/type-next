'use client'

import Game from "@/components/tic-tac-toe/Board";

//import Board from "@/components/tic-tac-toe/Board";


function TicTacToe() {
  // const printThis = (i: number): string => {
  //   console.log('apple'[i]);
  //   return 'apple'[i];
  // }

  return (
    <div className="mt-20 mx-6 display flex justify-center items-center">
      <Game />
    </div>
  )
}
export default TicTacToe;
