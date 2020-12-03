import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import BrowsePage from "./components/BrowsePage";
import HomePage from "./components/HomePage";
import AnimePage from "./components/AnimePage";
import RecPage from "./components/RecPage";

function App() {
    return (
        <div className="App">
            <Router >
                <Switch>
                    <Route path="/anime/:id" children={<AnimePage />} />
                    <Route path="/recommend" children={<RecPage />} />
                    <Route path="/browse" children={<BrowsePage />} />
                    <Route path="/" children={<HomePage />} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
