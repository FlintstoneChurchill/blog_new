import React, {Fragment} from 'react';
import Toolbar from "../UI/Toolbar/Toolbar";

const Layout = props => {
    return (
        <Fragment>
            <header className="header">
                <Toolbar />
            </header>
            <main className="content">
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;
