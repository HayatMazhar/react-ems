import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

    const [navToggle, setNavToggle] = useState('visible');
    const [opacity, setOpacity] = useState(1);

    const toggle = () => {
        if (navToggle === 'visible') {
            setNavToggle('hidden');
            setOpacity(0);
        }
        else {
            setNavToggle('visible');
            setOpacity(1);
        }
    }

    return (
        <nav className="navigation">
            <div className="navigation__title">Employee Management System</div>
            <div className="navigation__menus" style={{ visibility: navToggle, opacity: opacity }}  >
                <NavLink className="navigation__item " exact to="/" activeClassName="navigation--active">home</NavLink>
                <NavLink className="navigation__item" to="about" activeClassName="navigation--active">about</NavLink>
                <NavLink className="navigation__item" to="contact" activeClassName="navigation--active">contact</NavLink>
                <NavLink className="navigation__item " to="feedback" activeClassName="navigation--active">feedback</NavLink>
            </div>
            <div className="navigation__toggle" onClick={() => toggle()} >
                <span className="navigation__icon" ></span>
            </div>

        </nav>
    )
}

export default Navigation;