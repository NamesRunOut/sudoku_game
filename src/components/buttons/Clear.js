import React from 'react'

const Check = () => {
    const clickHandler = () => {
        localStorage.clear();
    }

    return (
        <button className="navbar_button--clear" onClick={clickHandler}>Clear save data</button>
    )
}

export default Check;