import { NavLink } from "react-router";

function NotFound() {
  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh", 
        background: "linear-gradient(135deg, #1e3c72, #2a5298)", 
        color: "#fff", 
        fontFamily: "Arial, sans-serif" 
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: "0" }}>404</h1>
      <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>Page Not Found</h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", maxWidth: "400px", textAlign: "center" }}>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <NavLink 
        to="/" 
        style={{ 
          padding: "12px 24px", 
          backgroundColor: "#ff6b6b", 
          color: "#fff", 
          textDecoration: "none", 
          borderRadius: "8px", 
          fontWeight: "bold", 
          transition: "0.3s" 
        }}
      >
        Back to Home
      </NavLink>
    </div>
  );
}

export default NotFound;
