import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CustomTextField = React.memo(
  ({
    name,
    fullWidth,
    color,
    css,
    labelText,
    variant,
    id,
    handleChange,
    type,
    ...rest
  }) => {
    const defaultStyles = {
      borderColor: "black",
      hoverBorderColor: "black",
      focusedBorderColor: "black",
      color: "black",
      hoverColor: "black",
      focusedColor: "black",
      labelColor: "black",
      marginBottom: "0",
    };
    const useStyles = makeStyles({
      root: {
        color: css.color || defaultStyles.color,
        marginBottom: css.marginBottom || defaultStyles.marginBottom,
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: css.borderColor || defaultStyles.borderColor,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: css.hoverBorderColor || defaultStyles.hoverBorderColor,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor:
              css.focusedBorderColor || defaultStyles.focusedBorderColor,
          },
        "& .MuiOutlinedInput-input": {
          color: css.color || defaultStyles.color,
        },
        "&:hover .MuiOutlinedInput-input": {
          color: css.hoverColor || defaultStyles.hoverColor,
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
          color: css.focusedColor || defaultStyles.focusedColor,
        },
        "& .MuiInputLabel-outlined": {
          color: css.color || defaultStyles.color,
        },
        "&:hover .MuiInputLabel-outlined": {
          color: css.hoverColor || defaultStyles.hoverColor,
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
          color: css.focusedColor || defaultStyles.focusedColor,
        },
        "& .MuiFormLabel-root.MuiInputLabel-outlined": {
          color: css.labelColor || defaultStyles.labelColor,
        },
      },
    });
    const classes = useStyles();
    return (
      <TextField
        name={name}
        label={labelText}
        variant={variant}
        onChange={(e) => handleChange(e)}
        id={id}
        type={type}
        className={classes.root}
        {...(fullWidth && { fullWidth: fullWidth })}
        {...rest}
      />
    );
  }
);

CustomTextField.propTypes = {
  name: PropTypes.string,
  css: PropTypes.object,
  fullWidth: PropTypes.bool,
  labelText: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default CustomTextField;
