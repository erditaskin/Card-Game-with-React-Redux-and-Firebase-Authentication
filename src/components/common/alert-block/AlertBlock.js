import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const AlertBlock = ({ alert }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {alert.show && <Alert severity={alert.severity}>{alert.message}</Alert>}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    alert: state.generalStore.alert,
  };
}

export default connect(mapStateToProps)(AlertBlock);
