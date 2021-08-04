import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const EndGameBlock = ({ userScore, computerScore, gameReset }) => {
  const useStyles = makeStyles(() => ({
    button: {
      textTransform: "none !important",
      margin: "30px auto",
      backgroundColor: "#00ff0c",
      color: "black",
      "&:hover": {
        backgroundColor: "#00d00a",
        color: "black",
      },
    },
  }));
  const classes = useStyles();
  const resetGame = () => {
    gameReset();
  };
  return (
    <>
      <div className="blurred-container">
        <div className="blurred-wrapper">
          {userScore > computerScore && (
            <Typography variant="h3" className="end-game-win">
              You Win!
            </Typography>
          )}
          {userScore < computerScore && (
            <Typography variant="h3" className="end-game-lose">
              You Lose!
            </Typography>
          )}
          {userScore === computerScore && (
            <Typography variant="h3">It's a draw!</Typography>
          )}
          <Button
            variant="contained"
            className={classes.button}
            onClick={resetGame}
          >
            Play again
          </Button>
        </div>
      </div>
    </>
  );
};

export default EndGameBlock;
