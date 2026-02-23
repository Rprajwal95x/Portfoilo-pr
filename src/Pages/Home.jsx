import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
         minHeight: "100vh",
        height:"100vh",
        textAlign: "center",
        padding: "50px",
        background: "linear-gradient(135deg, #007bff, #00c6ff)", // smooth blue gradient
        color: "#fff",
      }}
    >
      {/* Rounded Profile Image */}
      <img
        src="/profileImage.jpg" // place your image in public folder
        alt="Prajwal Naresh Raut"
        style={{
          width: "290px",
          height: "310px",
          borderRadius: "50%", // perfect circle
          objectFit: "cover",
          marginBottom: "20px",
          border: "4px solid #fff", // white border looks better on gradient
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)", // subtle shadow
        }}
      />

      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        Hi, I'm <span style={{ color: "#ffd700" }}>Prajwal Naresh Raut</span>
      </h1>

      {/* Typing Animation */}
      <h2 style={{ fontSize: "1.5rem", minHeight: "50px", marginBottom: "25px" }}>
        <Typewriter
          words={[
            "React & Java Developer",
            "Full-Stack Web Developer",
            "Building Modern Web Apps",
          ]}
          loop={0} // infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          to="/projects"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#ffd700",
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "2px solid #ffd700",
            color: "#ffd700",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact Me
        </Link>
      </div>

      {/* Social Icons */}
      <div style={{ marginTop: "30px", display: "flex", gap: "20px", justifyContent: "center" }}>
        <a href="https://github.com/Rprajwal95x" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github" style={{ fontSize: "1.8rem", color: "#fff" }}></i>
        </a>
        <a href="https://www.linkedin.com/in/prajwal-naresh-raut/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin" style={{ fontSize: "1.8rem", color: "#0A66C2" }}></i>
        </a>
      </div>
    </section>
  );
}