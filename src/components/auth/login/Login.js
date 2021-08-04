import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "actions/auth";
import { AUTH_REGISTER } from "constants/routes";
import CustomTextField from "components/custom-elements/custom-text-field/CustomTextField";
import CustomButton from "components/custom-elements/custom-button/CustomButton";
import AlertBlock from "components/common/alert-block/AlertBlock";

const Login = ({ login }) => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state.email, state.password);
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
        <h3>Login</h3>
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
        To register new player{" "}
        <Link to={AUTH_REGISTER}>
          <strong>click here!</strong>
        </Link>
      </p>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
