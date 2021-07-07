import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


import Subscribe from "./pages/subscribe/subscribe";
import Welcome from "./pages/welcomePage/welcome";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Navbar/>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Welcome/>
                    </Route>
                    <Route path="/subscribe" exact>
                        <Subscribe/>
                    </Route>
                </Switch>
                <Redirect to="/"/>
            </main>
        </Router>
    );
}

export default App;
