import React from 'react';
import Layout from "./components/Layout/Layout";
import Feed from "./containers/Feed/Feed";
import {Route, Switch} from "react-router";
import SinglePost from "./containers/SinglePost/SinglePost";
import User from "./containers/User/User";

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" exact component={Feed} />
                    <Route path="/posts" exact component={Feed} />
                    <Route path="/posts/:id" component={SinglePost} />
                    <Route path="/users/:id" component={User} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
