import React from "react";
import VinylAppBar from "./modules/views/VinylAppBar";
import VinylAppFooter from "./modules/views/VinylAppFooter";
import withRoot from "./modules/withRoot";
import VinylHero from "./modules/views/VinylHero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import VinylCTA from "./modules/views/VinylCTA";
import ArtistReleaseForm from "./modules/views/ArtistReleaseForm";
import GetVinyls from "./modules/views/GetVinyls";

const VinylApp = () => {
  return (
    <>
      <Router>
        <VinylAppBar />
        <Switch>
          <Route exact path="/vinylapp">
            <VinylHero />
          </Route>
          <Route path="/vinylapp/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <VinylHero />
          </Route>
        </Switch>
        {/*<ArtistReleaseForm/>*/}
        <GetVinyls />
        <VinylCTA />
        <VinylAppFooter />
      </Router>
    </>
  );
};

export default withRoot(VinylApp);
