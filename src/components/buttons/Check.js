import React, {useContext} from 'react'

import check from '../../algorithms/checker'
import {SudokuContext, SolutionContext} from '../../hooks/Sudoku.js'

const Check = ({stop}) => {
    const [, , , , board] = useContext(SudokuContext)
    const [solution] = useContext(SolutionContext)

    const clickHandler = () => {
        if (solution!==null) {
            if (check(solution)) {
                stop();
                alert("The soluton is correct, but how about you do it yourself next time? :)")
            } else {
                alert("Error in the solving program. The board is solved incorrectly")
            }
        } else if (check(board)) {
            stop();
            alert("Correct!")
        } else {
            alert("Incorrect")
        }
    }

    return (
        <button className="navbar_button--check" onClick={clickHandler}>Check solution</button>
    )
}

export default Check;