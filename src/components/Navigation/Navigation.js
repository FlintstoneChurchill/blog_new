import React from 'react';
import "./Navigation.sass";

const Navigation = props => {
    return (
        <nav className="menu header__menu">
            <ul className="menu__list">
                {props.children}
            </ul>
        </nav>
    );
};

export default Navigation;
