import React from 'react';

import {NavLink} from 'react-router-dom';

const NavBar =()=>{
    return(
        <nav>
            <ul style={{listStyle: 'none', display: 'flex'}}>
                <li style={{marginRight:20}}> <NavLink to='./'>Home</NavLink></li>
                <li> <NavLink to='./about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;