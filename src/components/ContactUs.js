// ContactUs.js
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Inline CSS styles
  const inline = {
    container: {
      background: "transparent",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "700px",
      margin: "40px auto",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      backdropFilter: "blur(6px)",
    },
    label: {
      display: "block",
      fontSize: "14px",
      marginBottom: "8px",
      color: "#ffffffff",
    },
    input: {
      width: "100%",
      padding: "10px 12px",
      borderRadius: "8px",
      border: "1px solid rgba(15,23,42,0.12)",
      outline: "none",
      fontSize: "14px",
      background: "rgba(255,255,255,0.6)",
    },
    textarea: {
      minHeight: "120px",
      resize: "vertical",
      padding: "10px 12px",
      borderRadius: "8px",
      border: "1px solid rgba(15,23,42,0.12)",
      fontSize: "14px",
      background: "rgba(255,255,255,0.6)",
    },
    small: { fontSize: "13px", color: "#ef4444", marginTop: "6px" },
    btn: {
      padding: "10px 16px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      background: "#0ea5a4",
      color: "#fff",
      fontWeight: 600,
    },
    success: { color: "#059669", fontWeight: 600, marginTop: "12px" },
  };

  // Validation
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(form.email)) e.email = "Enter a valid email.";
    }
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: null }));
    setStatus("");
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) {
      setStatus("error");
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      subject: `New Portfolio Message from ${form.name}`,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_9kwy5sl", 
        "template_cy6wpwn",
        templateParams,
        "TmkOPqXRXlR4jxdyM" 
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <div style={inline.container} aria-live="polite">
      <h2 style={{ margin: 0, marginBottom: 12, color: "#0f172a" }}>
        Contact Us
      </h2>
      <p style={{ marginTop: 0, marginBottom: 18, color: "#334155" }}>
        Have feedback or a project idea? Send a message — I’ll get back to you soon.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <label style={inline.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={inline.input}
          placeholder="Your name"
        />
        {errors.name && <div style={inline.small}>{errors.name}</div>}

        <label style={{ ...inline.label, marginTop: 12 }} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={inline.input}
          placeholder="you@example.com"
        />
        {errors.email && <div style={inline.small}>{errors.email}</div>}

        <label style={{ ...inline.label, marginTop: 12 }} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          style={inline.textarea}
          placeholder="Tell me about your project or feedback..."
        />
        {errors.message && <div style={inline.small}>{errors.message}</div>}

        <div style={{ marginTop: 18 }}>
          <button type="submit" style={inline.btn}>
            Send Message
          </button>

          {status === "success" && (
            <div style={inline.success}>Thanks — your message was sent!</div>
          )}
          {status === "error" && (
            <div style={{ color: "#b91c1c", fontWeight: 600 }}>
              Please fix the errors above or try again later.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
