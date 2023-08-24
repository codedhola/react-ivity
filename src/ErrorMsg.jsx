import React from "react";

const ErrorMsg = ({ message }) => {
  return (
    <p className="error">
      {" "}
      <span>🛑</span>
      {message} 
    </p>
  );
};

export default ErrorMsg;
