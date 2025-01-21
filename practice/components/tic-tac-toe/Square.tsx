

export type SquareProps = {
  value: number[],
  onSquareClick(i:string): string
}

function Square({value, onSquareClick}: SquareProps) {
  return (
    <button className="inline-flex justify-center items-center p-0 bg-white border border-slate-400 outline-0 rounded-none font-bold text-base" onClick={() => onSquareClick}>
      {value}
    </button>
  )
}
export default Square;