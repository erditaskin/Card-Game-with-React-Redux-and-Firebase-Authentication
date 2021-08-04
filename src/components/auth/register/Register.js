import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "actions/auth";
import { setAlert } from "actions/general";
import { AUTH_LOGIN } from "constants/routes";
import CustomTextField from "components/custom-elements/custom-text-field/CustomTextField";
import CustomButton from "components/custom-elements/custom-button/CustomButton";
import AlertBlock from "components/common/alert-block/AlertBlock";

const Register = ({ register, setAlert }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.password2) {
      register(state.email, state.password);
    } else {
      setAlert({
        show: true,
        severity: "error",
        message: "Passwords do not match",
      });
    }
  };

  const textFieldStyles = {
    borderColor: "#8bb08d",
    hoverBorderColor: "#00d40b",
    focusedBorderColor: "#00d40b",
    color: "#FFF",
    hoverColor: "#FFF",
    focusedColor: "#FFF",
    labelColor: "#8bb08d",
    marginBottom: "15px",
  };

  const submitButtonStyles = {};

  return (
    <>
      <form className="form transparent-box" onSubmit={handleSubmit}>
        <h3>Register New Player</h3>
        <AlertBlock />
        <CustomTextField
          value={state.email}
          label="E-Mail"
          variant="outlined"
          name="email"
          id="email"
          type="email"
          onChange={handleChange}
          autoComplete="off"
          required
          fullWidth
          css={textFieldStyles}
        />
        <CustomTextField
          value={state.password}
          label="Password"
          variant="outlined"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          autoComplete="off"
          required
          fullWidth
          css={textFieldStyles}
        />
        <CustomTextField
          value={state.password2}
          label="Password Confirm"
          variant="outlined"
          id="password2"
          name="password2"
          type="password"
          onChange={handleChange}
          autoComplete="off"
          required
          fullWidth
          css={textFieldStyles}
        />
        <CustomButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          css={submitButtonStyles}
        >
          Log in
        </CustomButton>
      </form>
      <p className="ta_c">
        Already a player?{" "}
        <Link to={AUTH_LOGIN}>
          <strong>Click here</strong>
        </Link>{" "}
        to login!
      </p>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setAlert: (alert) => dispatch(setAlert(alert)),
    register: (email, password) => dispatch(register(email, password)),
  };
}

export default connect(null, mapDispatchToProps)(Register);
