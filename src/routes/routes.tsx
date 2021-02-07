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
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
