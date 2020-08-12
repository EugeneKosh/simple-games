import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from "./Components/Navbar";
import {About} from "./pages/About";
import {Home} from "./pages/Home";
import TicTacToe from "./pages/TicTacToe/TicTacToe";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className={'container'}>
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/TicTacToe'} component={TicTacToe} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;