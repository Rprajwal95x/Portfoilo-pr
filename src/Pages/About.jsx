import React from "react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(135deg, #007bff, #00c6ff)", // subtle light gradient for section
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Card container */}
      <div
        style={{
          maxWidth: "900px",
          background: "linear-gradient(145deg, #ffecd2, #fcb69f)", // beautiful warm gradient
          padding: "40px 30px",
          borderRadius: "20px",
          boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
          textAlign: "center",
          color: "#333",
        }}
      >
        {/* Profile Image */}
        <img
          src="/profileImage.jpg" // your image in public folder
          alt="Prajwal Naresh Raut"
          style={{
            width: "160px",
            height: "190px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #fff",
            marginBottom: "25px",
          }}
        />

        <h2 style={{ color: "#ff6f61", marginBottom: "20px" }}>About Me</h2>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
          Hi! I'm <strong>Prajwal Naresh Raut</strong>, a passionate <strong>React & Java Developer</strong> 
          with a keen interest in building scalable and efficient web applications. I love creating 
          seamless user experiences and clean, maintainable code.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
          I have experience working with <strong>React, Java, Spring Boot, MySQL</strong>, and other modern technologies. 
          I'm eager to learn new tools and continuously improve my skills.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "25px" }}>
          When I'm not coding, I enjoy exploring new tech trends, contributing to open source projects, 
          and enhancing my portfolio with new projects.
        </p>

        {/* Skills Section */}
        <div>
          <h3 style={{ color: "#ff6f61", marginBottom: "20px" }}>Skills</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {[
              "Java / Core Java / Spring Boot",
              "React.js / Vite / CSS / HTML",
              "MySQL / Database Management",
              "Git / GitHub / Version Control",
            ].map((skill, index) => (
              <li
                key={index}
                style={{
                  background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // colorful gradient badges
                  padding: "10px 20px",
                  borderRadius: "25px",
                  fontWeight: "600",
                  color: "#fff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}