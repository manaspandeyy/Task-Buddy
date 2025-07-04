import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "") return alert("Username is required");
    localStorage.setItem("username", username);
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>
          {" "}
          Hi👋 <br /> Welcome to Task Buddy{" "}
        </h2>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #e0eafc, #cfdef3)",
    fontFamily: "Segoe UI, Roboto, sans-serif",
  },
  form: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "24px",
    fontSize: "24px",
    color: "#333",
  },
  input: {
    padding: "12px",
    width: "100%",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#4e73df",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Login;
