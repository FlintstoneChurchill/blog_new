import React from 'react';
import "./Logo.sass";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link className="logo" to="/" >Blog</Link>
    );
};

export default Logo;
