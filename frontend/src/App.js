import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import BrowsePage from "./components/BrowsePage/BrowsePage";
import HomePage from "./components/HomePage";
import AnimePage from "./components/AnimePage/AnimePage";
import RecPage from "./components/RecsPage/RecPage";
import ScrollToTop from './components/SharedComponents/ScrollToTop';

function App() {
    return (
        <div className="App">
            <Router >
                <ScrollToTop>
                    <Switch>
                        <Route path="/anime/:id" children={<AnimePage />} />
                        <Route path="/recommend" children={<RecPage />} />
                        <Route path="/browse" children={<BrowsePage />} />
                        <Route path="/" children={<HomePage />} />
                    </Switch>
                </ScrollToTop>
            </Router>
        </div>
    );
}

export default App;
