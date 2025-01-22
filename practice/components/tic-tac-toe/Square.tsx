
// const forX: string = "X" 
// const forO: string = "O" 


export type SquareProps = {
  value: number[],
  onSquareClick(): number
}

function Square({value, onSquareClick}: SquareProps) {
  //console.log(onSquareClick);
  
  return (
    <button className="inline-flex justify-center items-center p-0 bg-white border border-slate-400 outline-0 rounded-none font-bold text-base" onClick={() => onSquareClick()}>
{value}
    </button>
  )
}
export default Square;


// export function SquareTest() {
//   const printThis = (i: number): string => {
//     return 'apple'[i];
    
//   }
//   return (
//     <Square value={[0,1,2]} onSquareClick={() => printThis(2)}/>
//   )
// };