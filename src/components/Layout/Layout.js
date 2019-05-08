import React, {Fragment} from 'react';
import Toolbar from "../UI/Toolbar/Toolbar";

const Layout = props => {
    return (
        <Fragment>
            <header className="header">
                <Toolbar/>
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
