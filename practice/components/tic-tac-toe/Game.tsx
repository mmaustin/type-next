import Board from "./Board";


function Game() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', fontFamily: 'monospace'}}>
      <div className="">
        <Board />
      </div>
      <div className="" style={{marginLeft: '1rem'}}>
        <ol>{}</ol>
      </div>
    </div>
  )
}
export default Game;