

import { create } from "zustand";
import Square from "./Square";
import { combine } from "zustand/middleware";


const useGameStore = create(
  combine({ history: Array(9).fill(''), xIsNext: true }, (set) => {
    return {
      setHistory: (nextHistory) => {
        set(state => ({
          history:
            typeof nextHistory === 'function' ? nextHistory(state.history) : nextHistory,
        }))
      },
      setXIsNext: (nextXIsNext) => {
        set(state => ({
          xIsNext:
            typeof nextXIsNext === 'function'
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }))
      }
    }
  })
);


function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    };
  };
  return null;
};

function calculateTurns(squares: string[]): number {
  return squares.filter(square => !square).length;
};

type CalculateStatus = {
  winner: string | null,
  turns: number,
  player: string
};

type BoardProps = {
  xIsNext: boolean,
  squares: string[],
  onPlay:(nextSquares: string[]) => void
}

function calculateStatus({ winner, turns, player }: CalculateStatus): string {
  if (!winner && !turns) return 'Draw';
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
};


function Board({xIsNext, squares, onPlay}: BoardProps) {

  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? 'X' : 'O';
  const status = calculateStatus({ winner, turns, player })

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
    <>
      <div style={{ marginBottom: '0.5' }} className="">{status}</div>
      <div className="h-40 w-40" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr', width: 'calc(3 * 2.5rem', height: 'calc(3 * 2.5rem', border: '1px solid #999' }}>
        {squares.map((square, index) => (
          <Square key={index} useIndex={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </>
  )
};

function Game() {
  const xIsNext = useGameStore(state => state.xIsNext);
  const setXIsNext = useGameStore(state => state.setXIsNext);
  const history = useGameStore(state => state.history);
  const setHistory = useGameStore(state => state.setHistory);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: string[]){
    setHistory(history.concat([nextSquares]));
    setXIsNext(!xIsNext);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'row', fontFamily: 'monospace'}}>
      <div className="">
        <Board xIsNext={xIsNext} squares={currentSquares}onPlay={handlePlay}/>
      </div>
      <div className="" style={{marginLeft: '1rem'}}>
        <ol>{}</ol>
      </div>
    </div>
  )
}
export default Game;
