import React, {Fragment} from 'react';
import Toolbar from "../UI/Toolbar/Toolbar";
import './Layout.sass';

const Layout = props => {
    return (
        <Fragment>
            <header className="header">
                <div className="container header__container">
                    <Toolbar/>
                </div>
            </header>
            <main className="content">
                <div className="container">
                    {props.children}
                </div>
            </main>
        </Fragment>
    );
};

export default Layout;
