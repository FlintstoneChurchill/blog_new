import React from 'react';
import Layout from "./components/Layout/Layout";
import Feed from "./containers/Feed/Feed";
import {Route, Switch} from "react-router";

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" component={Feed} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
