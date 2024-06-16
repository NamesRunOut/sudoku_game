import React from 'react'

const Timer = ({time}) => {

  return(
      <div>{String(Math.floor(time/60)).padStart(2, '0')}:{String(time%60).padStart(2, '0')}</div>
  )
}

export default Timer;