import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "components/game/card/Card";

const CardBlock = ({
  imageDeck,
  imageDeckPlaceHolder,
  imageUsersCard,
  imageComputersCard,
  cardsCount,
  round,
  drawCard,
}) => {
  const handleDrawCard = () => {
    drawCard();
  };
  const useStyles = makeStyles(() => ({
    button: {
      textTransform: "none !important",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#00ff0c",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid className="board board-left" item xs>
          <Card
            id="usersCard"
            imageDeck={imageDeck}
            imageCard={imageUsersCard}
          />
        </Grid>
        <Grid className="board board-deck" item xs>
          <Box className="board-deck-img-wrapper">
            <Button
              color="inherit"
              variant="outlined"
              className={classes.button}
              onClick={handleDrawCard}
              disabled={cardsCount === 0 ? true : false}
            >
              {cardsCount === 0 && round === 26 ? "GAME FINISHED" : "DRAW"}
            </Button>
            <img
              src={cardsCount > 0 ? imageDeck : imageDeckPlaceHolder}
              alt="Deck"
              className="imageDeck"
            />
          </Box>
          <Box className="remaining-info">
            <h4>Remaining Cards</h4>
            <Box className="remaining-numbers">
              <span>{cardsCount}</span>/52
            </Box>
          </Box>
        </Grid>
        <Grid className="board board-right" item xs>
          <Card
            id="computersCard"
            imageDeck={imageDeck}
            imageCard={imageComputersCard}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CardBlock;
