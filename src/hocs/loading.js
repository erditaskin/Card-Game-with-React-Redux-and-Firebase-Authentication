import React from "react";
import "styles/loading.css";

const Loading = () => {
  const logo = "/logo.png";
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <img src={logo} id="loading-image" alt="Loading" />
      </div>
    </div>
  );
};

export default Loading;
