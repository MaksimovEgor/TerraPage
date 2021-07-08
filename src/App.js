import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Events} from "./components/Pages/Events";
import {Dobro} from "./components/Pages/Dobro";
import {Container} from "@material-ui/core";
import {Layout} from "./Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Container>
                        <Route path="/events-page"><Events /> </Route>
                        <Route path="/dobro-page"><Dobro /> </Route>
                    </Container>
                </Switch>
            </Layout>
        </Router>
    );
}
export default App;
