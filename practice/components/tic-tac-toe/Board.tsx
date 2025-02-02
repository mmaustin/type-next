

import { create } from "zustand";
import Square from "./Square";
import { combine } from "zustand/middleware";


const useGameStore = create(
  combine({ squares: Array(9).fill(''), xIsNext: true }, (set) => {
    return {
      setSquares: (nextSquares) => {
        set(state => ({
          squares:
            typeof nextSquares === 'function' ? nextSquares(state.squares) : nextSquares,
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

function calculateStatus({ winner, turns, player }: CalculateStatus): string {
  if (!winner && !turns) return 'Draw';
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
};


function Board() {

  const xIsNext = useGameStore(state => state.xIsNext);
  const setXIsNext = useGameStore(state => state.setXIsNext);
  const squares = useGameStore(state => state.squares);
  const setSquares = useGameStore(state => state.setSquares);
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? 'X' : 'O';
  const status = calculateStatus({ winner, turns, player })

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
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
