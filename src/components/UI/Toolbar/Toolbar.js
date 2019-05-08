import React, {Fragment} from 'react';
import Logo from "../../Logo/Logo";
import Navigation from "../../Navigation/Navigation";
import NavigationItem from "../../Navigation/NavigationItem/NavigationItem";

const Toolbar = () => {
    return (
        <Fragment>
            <Logo />
            <Navigation>
                <NavigationItem to="/">
                    Home
                </NavigationItem>
            </Navigation>
        </Fragment>
    );
};

export default Toolbar;
