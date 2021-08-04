import React from "react";
import { connect } from "react-redux";
import { logout } from "actions/auth";
import { gameReset } from "actions/game";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Navbar = ({ logout, gameReset, authStore }) => {
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    AppBar: {
      backgroundColor: "green",
    },
    title: {
      flexGrow: 1,
    },
    button: {
      textTransform: "none !important",
    },
  }));
  const logo = "/logo.png";
  const classes = useStyles();
  const resetGame = () => {
    gameReset();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className="navbar">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <Typography variant="h6" className={classes.title}>
            Ultimate Card Game
          </Typography>
          <Button
            color="inherit"
            className={classes.button}
            onClick={resetGame}
          >
            Reset Game
          </Button>
          <Button color="inherit" className={classes.button} onClick={logout}>
            <span className="navbar-user-mail">({authStore.user.email})</span>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    gameStore: state.gameStore,
    authStore: state.authStore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    gameReset: () => dispatch(gameReset()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
