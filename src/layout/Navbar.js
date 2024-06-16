import React from 'react'

import Regen from '../components/buttons/Regen'
import Solve from '../components/buttons/Solve'
import Check from '../components/buttons/Check'

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar_actions">
            <Check 
                stop={props.stop}
                />
            <Regen
                start={props.start}
                reset={props.reset}
                />
            <Solve
                stop={props.stop}
                />
            </div>
        </div>
    )
}

export default Navbar;