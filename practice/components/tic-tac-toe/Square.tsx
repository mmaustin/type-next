/* eslint-disable @typescript-eslint/no-unused-vars */

export type SquareProps = {
  value: number[],
  onSquareClick(fn: ()=> void): string
}

function Square({value, onSquareClick}: SquareProps) {
  return (
    <div>Square</div>
  )
}
export default Square