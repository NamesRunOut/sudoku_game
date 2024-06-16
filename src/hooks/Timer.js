import {useState, useEffect} from 'react'

export const TimerHook = () => {
  const [time, setTimer] = useState(
    parseInt(localStorage.getItem('time')) || 0);
  const [isActive, setIsActive] = useState(true);

  const reset = () => {
    setTimer(0);
    setIsActive(false);
  }

  const start = () => {
    setIsActive(true);
  }

  const stop = () => {
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(time => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, setTimer, time]);

  return {time, reset, start, stop}
};