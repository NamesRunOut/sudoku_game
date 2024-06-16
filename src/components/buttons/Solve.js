import React, {useContext} from 'react'

import Solver from '../../algorithms/sudokuSolver'

import {SudokuContext, SolutionContext} from '../../hooks/Sudoku.js'

const Solve = ({stop}) => {
    const [, , sudoku] = useContext(SudokuContext)
    const [, setSolution] = useContext(SolutionContext)

    const clickHandler = () =>  {
        stop();
        let response = Solver(sudoku);
        if(response!=='error') {
            setSolution(response);        
        }
        else alert("couldn't solve this board")
    }

    return (
        <button className="navbar_button--solve" onClick={clickHandler}>Solve</button>
    )
}

export default Solve;