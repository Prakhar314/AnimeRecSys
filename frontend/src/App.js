import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./components/HomePage";
import AnimePage from "./components/AnimePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/anime/:id" children={<AnimePage />} />
                    <Route path="/" children={<HomePage />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
