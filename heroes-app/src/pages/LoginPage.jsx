import React from "react";

const Login = ({ history }) => {
  const handleLogin = () => {
    history.push("/marvel");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
