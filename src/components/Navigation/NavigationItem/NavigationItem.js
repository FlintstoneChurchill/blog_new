import React from 'react';
import {NavLink} from "react-router-dom";

const NavigationItem = props => {
    return (
        <li className="menu__item">
            <NavLink className="menu__link" to={props.to}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;
