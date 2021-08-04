import React from "react";
import Box from "@material-ui/core/Box";

const Card = ({ player, score, winner }) => {
  return (
    <>
      {player === "user" ? "Your" : "Computer's"}
      <br />
      Score
      <Box className={"score-number " + (winner && "winner")}>{score}</Box>
    </>
  );
};

export default Card;
