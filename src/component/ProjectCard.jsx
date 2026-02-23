import React, { useState } from "react";

export default function ProjectCard({ title, description, tech, liveLink, githubLink, image }) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div
      style={{
        width: "320px",
        borderRadius: "20px",
        overflow: "hidden",
        margin: "20px",
        boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
        transition: "transform 0.3s, box-shadow 0.3s",
        background: "linear-gradient(135deg, #f0f4ff, #d9e8ff)", // subtle gradient
        cursor: "pointer",
      }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-7px) scale(1.03)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}
      onClick={() => setShowDesc(!showDesc)}
    >
      {/* Project Image with overlay */}
      {image && (
        <div style={{ position: "relative", overflow: "hidden", height: "180px" }}>
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s",
              transform: showDesc ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.2)",
              opacity: showDesc ? 0.3 : 0,
              transition: "opacity 0.3s",
            }}
          />
        </div>
      )}

      {/* Card Content */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3 style={{ marginBottom: "10px", color: "#007bff" }}>{title}</h3>

        {/* Description toggle */}
        {showDesc && (
          <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "15px", lineHeight: "1.5" }}>
            {description}
          </p>
        )}

        {/* Tech stack */}
        <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "15px" }}>
          <strong>Tech:</strong> {tech.join(", ")}
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "#0056b3";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "#007bff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              backgroundColor: "#333",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "#000";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "#333";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}