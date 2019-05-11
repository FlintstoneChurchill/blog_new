import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import "./Button.sass";

const Button = props => {

    let button;
    if (props.type === 'link') {
        button = <Link className="button" to={props.to}>{props.children}</Link>;
    } else if(props.type === 'button') {
        button = <button className="button">{props.children}</button>
    }

    return (
        <Fragment>
            {button}
        </Fragment>

    );
};

export default Button;
