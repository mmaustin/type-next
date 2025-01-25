

export type SquareProps = {
  value: string | null,
  key?: number,
}

function Square({ value }: SquareProps) {

  return (
    <button className="inline-flex justify-center items-center p-0 bg-white border border-slate-400 outline-0 rounded-none font-bold text-base" >
      {value}
    </button>
  )
}
export default Square;

