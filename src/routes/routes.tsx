import {
    BrowserRouter as Router,
    Switch,
    Route, Link,

} from "react-router-dom";

import About from "../views/clients/About";
import Users from "../views/clients/Users";
import Home from "../views/clients/Home";

export default function PagesRoutes() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>

                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
