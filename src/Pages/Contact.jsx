import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_w5vt43h", // replace with your EmailJS service ID
      "template_2xnomno", // replace with your EmailJS template ID
      formData,
      "Nu2RJThBEwaFK0yax"   // replace with your EmailJS public key
    )
    .then((res) => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    })
    .catch((err) => {
      alert("Failed to send message. Try again later.");
      setLoading(false);
    });
  };

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #cfd9df, #e2ebf0)",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          backgroundColor: "#fff",
          padding: "40px 30px",
          borderRadius: "20px",
          boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#007bff", marginBottom: "15px" }}>Contact Me</h2>
        <p style={{ color: "#555", marginBottom: "25px" }}>
          Reach out via email or fill the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "30px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={inputStyle}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              ...buttonStyle,
              backgroundColor: loading ? "#ccc" : "#007bff",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Social Icons */}
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#007bff", marginBottom: "15px" }}>Or reach me at:</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "25px", fontSize: "1.5rem" }}>
            <a href="mailto:rprajwal9529@gmail.com" style={{ color: "#ff6b6b" }}>
              <FaEnvelope />
            </a>
            <a href="https://github.com/Rprajwal95x" target="_blank" rel="noopener noreferrer" style={{ color: "#333" }}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prajwal-raut-46198a346/" target="_blank" rel="noopener noreferrer" style={{ color: "#0A66C2" }}>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Shared input style
const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  outline: "none",
  transition: "0.3s",
};

// Shared button style
const buttonStyle = {
  padding: "12px 20px",
  borderRadius: "10px",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  transition: "0.3s",
};