import React, {useContext} from 'react'

import { motion } from "framer-motion"
import { container, item, solutionItem } from '../../animations/pieces.js'

import {SudokuContext, SolutionContext} from '../../hooks/Sudoku.js'

const Board = () => {
const [selected, setSelected, sudoku, , board, setBoard] = useContext(SudokuContext)
const [solution] = useContext(SolutionContext)
let i = 0;

const handleClick = (event) => {
    const {name} = event.target;
    if (document.getElementsByName(selected)[0]!==undefined && document.getElementsByName(selected)[0].name===name) {
        setSelected(null);
        document.getElementsByName(selected)[0].className="main_board--input";
        return;
    }
    if (document.getElementsByName(selected)[0]!==undefined) document.getElementsByName(selected)[0].className="main_board--input";
    setSelected(name);
    event.target.className="main_board--input-selected"
}

const handleChange = (event) => {
    const {name, value} = event.target;
    if (name!==null && name!==undefined) {
        let tmp = board;
        tmp[name] = parseInt(value%10, 10);
        setBoard(tmp);
    }
}

const mapping = solution===null ?
board.map(
    element => {
        i++;
        if (element === 0 || sudoku[i-1] === 0) {
            return <input 
                readOnly // here to prevent keyboard popup on mobile
                onChange={handleChange} 
                onClick={handleClick} 
                className="main_board--input" 
                name={i-1} 
                key={i-1} 
                value={board[i-1] === 0 ? '' : board[i-1]} />
        }
        else return <motion.span 
                        variants={item} 
                        className="main_board--disabled" 
                        name={i-1} 
                        key={i-1}>
                            {element}
                    </motion.span>
    }
)
: solution.map(
    element => {
        i++;
        if (sudoku[i-1] === 0) {
            return <motion.input 
                        readOnly
                        variants={solutionItem(i/110)} 
                        onChange={handleChange} 
                        onClick={handleClick} 
                        className="main_board--input" 
                        name={i-1} 
                        key={i-1} 
                        value={element} />
        }
        else return <span 
                        className="main_board--disabled" 
                        name={i-1} 
                        key={i-1}>
                            {element}
                    </span>
    }
)

  return(
        <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="main_board"> 
                {mapping}
        </motion.div>
  )
}

export default Board;