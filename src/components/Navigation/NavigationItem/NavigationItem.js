import React from 'react';

const NavigationItem = props => {
    return (
        <li className="menu__item">
            <a className="menu__link" href={props.to}>
                {props.children}
            </a>
        </li>
    );
};

export default NavigationItem;
