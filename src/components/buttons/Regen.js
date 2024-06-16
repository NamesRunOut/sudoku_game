import React, {useContext} from 'react'

import Generator from '../../algorithms/sudokuGenerator'
import {SudokuContext, SolutionContext} from '../../hooks/Sudoku.js'

const Regen = ({reset, start}) => {
    const [, , , setSudoku, , setBoard] = useContext(SudokuContext)
    const [, setSolution] = useContext(SolutionContext)
    
    const clickHandler = () => {
        reset();
        const newBoard = Generator();
        setSolution(null);
        setSudoku([...newBoard]);
        setBoard([...newBoard]);
        localStorage.setItem('sudoku', [...newBoard])
        localStorage.setItem('board', [...newBoard])
        start();
    }

    return (
        <button className="navbar_button--regen" onClick={clickHandler}>Generate</button>
    )
}

export default Regen;