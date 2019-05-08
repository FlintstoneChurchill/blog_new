import React from 'react';
import Layout from "./components/Layout/Layout";
import Feed from "./containers/Feed/Feed";

function App() {
    return (
        <div className="App">
            <Layout>
                <Feed />
            </Layout>
        </div>
    );
}

export default App;
