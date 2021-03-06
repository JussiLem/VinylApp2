import React from "react";
import VinylAppBar from "./modules/views/VinylAppBar";
import VinylAppFooter from "./modules/views/VinylAppFooter";
import withRoot from "./modules/withRoot";
import VinylHero from "./modules/views/VinylHero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import VinylCTA from "./modules/views/VinylCTA";
import GetVinyls from "./modules/views/GetVinyls";
import Artist from "./modules/views/Artist";
import VinylEditForm from "./modules/views/VinylEditForm";

const VinylApp = () => (
  <>
    <Router>
      <VinylAppBar />
      <Switch>
        <Route exact path="/">
          <VinylHero />
          <Route path="/edit/:id/:artist">
            <VinylEditForm />
          </Route>
          <Route path="/show/:id/:artist/:title/:genre">
            <Artist />
          </Route>
          <GetVinyls />
          <VinylCTA />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
      <VinylAppFooter />
    </Router>
  </>
);

export default withRoot(VinylApp);
