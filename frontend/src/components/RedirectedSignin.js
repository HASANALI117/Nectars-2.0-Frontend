import React, { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../constants";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const RedirectedSignin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { shopName } = useParams();

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/api/token/`, {
        username: username,
        password: password,
      });

      // Save access and refresh tokens to local storage
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      navigate(`/shop/${shopName}/dashboard`);

      // Redirect to the authenticated area or update the app state to reflect the user's authentication status
      // For example, you can set a state variable here to indicate that the user is authenticated, and use it to conditionally render components that require authentication.
    } catch (error) {
      console.error("Error signing in:", error);
      // Handle sign-in error, e.g., display an error message to the user
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{ maxWidth: "400px", padding: "20px", border: "1px solid #ccc" }}
      >
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default RedirectedSignin;
