///* eslint-disable @typescript-eslint/no-unused-vars */


export type SquareProps = {
  value: string,
  useIndex: number,
  onSquareClick:(index: number) => void
}

function Square({ value, useIndex, onSquareClick }: SquareProps) {

  return (
    <button className="inline-flex justify-center items-center p-0 bg-white border border-slate-400 outline-0 rounded-none font-bold text-base" onClick={() => onSquareClick(useIndex)}>
      {value}
    </button>
  )
}
export default Square;

