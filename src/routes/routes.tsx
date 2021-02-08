import {
    BrowserRouter as Router,
    Switch,
    Route, Link,

} from "react-router-dom";

import About from "../views/clients/About";
import Clients from "../views/clients/Clients";
import Organization from "../views/clients/Organization";

export default function PagesRoutes() {
    return (
        <Router>
            <div>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/clients">Clients</Link>
                </li>
                <li>
                    <Link to="/organizations">Organization</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>

                <Switch>
                    <Route exact path="/clients">
                        <Clients />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/organizations">
                        <Organization />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
