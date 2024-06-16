import React, {useState, createContext} from 'react'

export const SudokuContext = createContext()
export const SolutionContext = createContext()

const Sudoku = (props) => {
const [selected, setSelected] = useState(null);

const [sudoku, setSudoku] = useState(
  localStorage.getItem('sudoku')===null ? [
    0,0,1,9,8,4,7,6,0,
    6,0,0,0,5,7,0,0,0,
    8,0,7,0,1,0,0,0,0,
    9,6,0,3,0,8,1,0,5,
    1,8,5,0,2,0,0,7,3,
    3,0,0,0,0,0,2,0,8,
    2,1,0,0,0,0,0,3,6,
    0,0,0,1,0,0,0,0,4,
    0,9,6,0,0,2,5,1,0] : localStorage.getItem('sudoku').split(",").map(Number));

const [board, setBoard] = useState(
  localStorage.getItem('board')===null? [
    0,0,1,9,8,4,7,6,0,
    6,0,0,0,5,7,0,0,0,
    8,0,7,0,1,0,0,0,0,
    9,6,0,3,0,8,1,0,5,
    1,8,5,0,2,0,0,7,3,
    3,0,0,0,0,0,2,0,8,
    2,1,0,0,0,0,0,3,6,
    0,0,0,1,0,0,0,0,4,
    0,9,6,0,0,2,5,1,0] : localStorage.getItem('board').split(",").map(Number));

  return (
    <SudokuContext.Provider value={[ selected, setSelected, sudoku, setSudoku, board, setBoard ]}>
      {props.children}
    </SudokuContext.Provider>
  )
}

const Solution = (props) => {
    const [solution, setSolution] = useState(null);

    return (
      <SolutionContext.Provider value={ [solution, setSolution] }>
        {props.children}
      </SolutionContext.Provider>
    )
}

export {Sudoku, Solution}