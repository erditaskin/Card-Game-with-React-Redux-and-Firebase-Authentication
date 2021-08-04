import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuth } from "actions/auth";
import { setIsBusy } from "actions/general";

import firebase from "services/firebase";

import Loading from "hocs/loading";
import PrivateRoute from "hocs/private-route";
import AuthRoute from "hocs/auth-route";

import Login from "components/auth/login/Login";
import Register from "components/auth/register/Register";
import Landing from "components/dashboard/landing/Landing";
import GameBoard from "components/game/game-board/GameBoard";
import NotFound from "components/error/not-found/NotFound";

import * as routes from "constants/routes";

const App = ({ authStore, generalStore, checkAuth, setIsBusy }) => {
  useEffect(() => {
    setIsBusy(true);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      checkAuth(user);
      setIsBusy(false);
    });
    return () => unsubscribe();
  }, [checkAuth, setIsBusy]);

  return (
    <>
      {(generalStore.loading || generalStore.isBusy) && <Loading />}
      {!generalStore.isBusy && (
        <Router>
          <Switch>
            <PrivateRoute
              exact
              path={routes.HOME}
              component={Landing}
              isAuthenticated={authStore.isAuthenticated}
            />
            <PrivateRoute
              exact
              path={routes.GAME_BOARD}
              component={GameBoard}
              isAuthenticated={authStore.isAuthenticated}
            />
            <AuthRoute
              exact
              path={routes.AUTH_LOGIN}
              component={Login}
              isAuthenticated={authStore.isAuthenticated}
            />
            <AuthRoute
              exact
              path={routes.AUTH_REGISTER}
              component={Register}
              isAuthenticated={authStore.isAuthenticated}
            />
            <Route path={routes.HOME} component={NotFound} />
          </Switch>
        </Router>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    authStore: state.authStore,
    generalStore: state.generalStore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkAuth: (user) => dispatch(checkAuth(user)),
    setIsBusy: (status) => dispatch(setIsBusy(status)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
