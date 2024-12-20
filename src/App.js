import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      {isLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Registration toggleForm={toggleForm} />
      )}
    </div>
  );
}

function Login({ toggleForm }) {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div className="form-group forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <button onClick={toggleForm} className="link-button">
          Register
        </button>
      </p>
    </div>
  );
}

function Registration({ toggleForm }) {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group terms">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <button onClick={toggleForm} className="link-button">
          Login
        </button>
      </p>
    </div>
  );
}

export default App;
