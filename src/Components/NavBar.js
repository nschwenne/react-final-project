import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    
    
    return (
        <nav>
            <NavLink to="/" exact>Home</NavLink>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <NavLink to="/creaturefinder" exact>Creature Finder</NavLink>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <NavLink to="/creaturecreator" exact>Creature Creator</NavLink>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <NavLink to="/creaturelist" exact>Creature List</NavLink>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <NavLink to="/diceroller" exact>Dice Roller</NavLink>
        </nav>
    );
}

export default NavBar;



