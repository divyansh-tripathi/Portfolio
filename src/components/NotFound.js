// NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "transparent",
      color: "#0f172a",
      textAlign: "center",
      padding: "20px",
    },
    heading: {
      fontSize: "120px",
      fontWeight: "800",
      margin: "0",
      color: "#0ea5a4",
      textShadow: "0 0 20px rgba(14,165,164,0.4)",
    },
    subheading: {
      fontSize: "28px",
      fontWeight: "600",
      margin: "10px 0",
        color: "#334155",
    },
    text: {
      fontSize: "16px",
      color: "#475569",
      maxWidth: "500px",
      marginBottom: "25px",
    },
    button: {
      padding: "10px 22px",
      fontSize: "15px",
      borderRadius: "8px",
      border: "none",
      background: "#0ea5a4",
      color: "white",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subheading}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you’re looking for doesn’t exist or may have been moved.
        Let’s get you back to safety.
      </p>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.background = "#0891b2")}
        onMouseOut={(e) => (e.target.style.background = "#0ea5a4")}
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}
