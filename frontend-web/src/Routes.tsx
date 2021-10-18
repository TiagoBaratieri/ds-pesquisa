import Navbar from "components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Records from "./pages/Records";

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/records">
                    <Records />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;