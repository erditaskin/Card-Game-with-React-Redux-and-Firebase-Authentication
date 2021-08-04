import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Score from "components/game/score/Score";

const ScoreBlock = ({ userScore, computerScore, round }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid className="score score-left" item xs>
          <Score
            player="user"
            winner={userScore > computerScore}
            score={userScore}
          />
        </Grid>
        <Grid className="round" item xs>
          Round
          <Box className="round-number">{round}</Box>
        </Grid>
        <Grid className="score score-right" item xs>
          <Score
            player="computer"
            winner={userScore < computerScore}
            score={computerScore}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ScoreBlock;
