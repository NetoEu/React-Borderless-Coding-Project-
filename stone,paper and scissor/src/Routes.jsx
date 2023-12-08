import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Game } from '/pages/Game';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/result" exact>
                    <Game />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;