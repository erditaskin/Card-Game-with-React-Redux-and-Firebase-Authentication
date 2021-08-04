import React from "react";
import { Box } from "@material-ui/core";

const Layout = (props) => {
  const logo = "/logo.png";
  return (
    <React.Fragment>
      <Box className="auth-box">
        <Box className="logo">
          <img src={logo} alt="Logo" />
          <h1>Ultimate Card Game</h1>
        </Box>
        <section>{props.children}</section>
      </Box>
    </React.Fragment>
  );
};

export default Layout;
