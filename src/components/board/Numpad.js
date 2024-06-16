import React, {useRef, useState, useEffect, useContext} from 'react'

import { motion } from "framer-motion"

import {SudokuContext} from '../../hooks/Sudoku.js'

const Numpad = () => {
  const [updated, setUpdated] = useState(false);
  const constraintsRef = useRef(null)

  const [selected, , , , board, setBoard] = useContext(SudokuContext)

  const handleClick = (val) => {
    if (document.querySelector(".main_board--input-selected")===undefined || document.querySelector(".main_board--input-selected")===null || selected===null || selected===undefined) return;
    document.querySelector(".main_board--input-selected").value=val;


     let tmp = board;
     tmp[selected] = val;
     setBoard(tmp);
     setUpdated(updated => !updated)
  }
      
  useEffect(() => {
    // store user save data
    localStorage.setItem('board', board)
  }, [updated, board]);

  return(
    <motion.div className="main_numpad" ref={constraintsRef}>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(1)}>1</motion.span>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(2)}>2</motion.span>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(3)}>3</motion.span>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(4)}>4</motion.span>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(5)}>5</motion.span>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(6)}>6</motion.span>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(7)}>7</motion.span>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(8)}>8</motion.span>
            <motion.span drag dragConstraints={constraintsRef} onClick={() => handleClick(9)}>9</motion.span>
    </motion.div>
  )
}

export default Numpad;