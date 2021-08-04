import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { GAME_BOARD } from "constants/routes";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
  },
  letterSpacing: {
    letterSpacing: "-1px",
  },
  button: {
    textTransform: "none !important",
    margin: "15px auto",
  },
}));

const Landing = ({ drawnCards }) => {
  const homeImg = "/home.png";
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs className="transparent-box p30 mb30sm">
            <Typography
              variant="h4"
              gutterBottom
              className={classes.letterSpacing}
            >
              Are you ready to push limits of your fortune?
            </Typography>
            <Typography variant="h6" gutterBottom>
              Cards will be dealt from the deck of Cosmo The Conjuror and will
              bring fortune to your development life.
            </Typography>
            <hr className="styled" />
            <Typography
              variant="h5"
              gutterBottom
              className={classes.letterSpacing}
            >
              Game Info :
            </Typography>
            <ul>
              <li>
                Once you started to game, you'll be matched with a Computer Bot
                in a game session.
              </li>
              <li>
                Cards will be dealt one by one until deck is out of cards.
              </li>
              <li>Every turn whoever gets higher card gets 1 point.</li>
              <li>
                In the end of deck whoever collects more points wins whole game
              </li>
            </ul>
            <div className="ta_c">
              <Button
                color="inherit"
                variant="outlined"
                className={classes.button}
                onClick={() => history.push(GAME_BOARD)}
              >
                {drawnCards > 0 ? "Continue your game" : "Start a new game"}
              </Button>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xs={5}>
              <img src={homeImg} alt="Home" className="home-banner-img" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    drawnCards: state.gameStore.drawnCards.length,
  };
}

export default connect(mapStateToProps)(Landing);
