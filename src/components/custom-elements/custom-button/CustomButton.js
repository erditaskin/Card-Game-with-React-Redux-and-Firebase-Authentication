import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CustomButton = React.memo(
  ({ children, fullWidth, color, css, variant, id, type, ...rest }) => {
    const defaultStyles = {
      color: "white",
      backgroundColor: "green",
      hoverColor: "white",
      hoverBackgroundColor: "green",
    };
    const useStyles = makeStyles({
      button: {
        backgroundColor: css.backgroundColor || defaultStyles.backgroundColor,
        color: css.color || defaultStyles.color,
        "&:hover": {
          backgroundColor:
            css.hoverBackgroundColor || defaultStyles.hoverBackgroundColor,
          color: css.hoverColor || defaultStyles.hoverColor,
        },
      },
    });
    const classes = useStyles();
    return (
      <Button
        variant={variant}
        color={color}
        id={id}
        type={type}
        className={classes.button}
        {...(fullWidth && { fullWidth: fullWidth })}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

CustomButton.propTypes = {
  color: PropTypes.string,
  css: PropTypes.object,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default CustomButton;
