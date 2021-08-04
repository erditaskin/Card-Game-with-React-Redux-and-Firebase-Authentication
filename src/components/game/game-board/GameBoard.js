import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setGame, setGameLoading, drawCard, gameReset } from "actions/game";
import Container from "@material-ui/core/Container";
import AlertBlock from "components/common/alert-block/AlertBlock";
import ScoreBlock from "components/game/score-block/ScoreBlock";
import CardBlock from "components/game/card-block/CardBlock";
import EndGameBlock from "components/game/end-game-block/EndGameBlock";
import "styles/game.css";

const GameBoard = ({
  gameStore,
  setGameLoading,
  setGame,
  drawCard,
  gameReset,
}) => {
  useEffect(() => {
    if (gameStore.loading) {
      setGame();
      setGameLoading(false);
    }
  }, [gameStore.loading, setGame, setGameLoading]);

  const imageDeck = "/deck.png";
  const imageDeckPlaceHolder = "/deck-transparent-placeholder.png";

  return (
    <>
      <Container className="transparent-box container-margin p30">
        <AlertBlock />
        <ScoreBlock
          round={gameStore.round}
          userScore={gameStore.score.user}
          computerScore={gameStore.score.computer}
        />
        <CardBlock
          round={gameStore.round}
          drawCard={drawCard}
          imageDeck={imageDeck}
          imageDeckPlaceHolder={imageDeckPlaceHolder}
          imageUsersCard={
            gameStore.lastCards.user && gameStore.lastCards.user.image
              ? gameStore.lastCards.user.image
              : null
          }
          imageComputersCard={
            gameStore.lastCards.computer && gameStore.lastCards.computer.image
              ? gameStore.lastCards.computer.image
              : null
          }
          cardsCount={gameStore.cards.length}
        />
      </Container>
      {gameStore.cards.length === 0 && gameStore.round === 26 && (
        <EndGameBlock
          userScore={gameStore.score.user}
          computerScore={gameStore.score.computer}
          gameReset={gameReset}
        />
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    gameStore: state.gameStore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameReset: () => dispatch(gameReset()),
    drawCard: () => dispatch(drawCard()),
    setGame: () => dispatch(setGame()),
    setGameLoading: () => dispatch(setGameLoading()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
