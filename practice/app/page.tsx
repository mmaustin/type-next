// import HomePage from "@/components/pages/HomePage";


// function Page() {
//   return (
//     <div className="mt-8 display flex justify-center items-center">
//       <HomePage />
//     </div>
//   )
// }
// export default Page;
'use client'





// export type SquareProps = {
//   value: number[],
//   onSquareClick(id: number): string
// }

function Page() {
  //console.log(value);
  
  return (
    <>
    <button className="h-10 w-10 inline-flex justify-center items-center p-0 bg-red-300 border border-slate-400 outline-0 rounded-none font-bold text-base" onClick={() => console.log('apple')}>      
      987
    </button>
    </>
  )
}
export default Page;

// export function SquareTest() {
//   const printThis = (i: number): string => {
//     console.log([i]);
    
//     return 'apple'[i];
    
//   }
//   return (
//     <Square value={[0,1,2]} onSquareClick={() => printThis(2)}/>
//   )
// };