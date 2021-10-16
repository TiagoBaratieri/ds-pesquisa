import Navbar from "components/Navbar";
import Home from "pages/Home";
import Records from "pages/Records";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/records">
          <Records />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
