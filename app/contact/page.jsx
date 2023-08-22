"use client";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !website) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Implement your actual form submission logic here

      toast.success("Form submitted successfully");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
    setName("");
    setEmail("");
    setWebsite("");
    setMessage("");
  };

  return (
    <div className="container">
      <div className="d-flex row justify-content-center align-items-center vh-100">
        <div className="col-lg-5 bg-dark p-5 shadow">
          <p className="lead text-center text-light fs-2 fw-bold">
            Contact Form
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control mb-4"
              placeholder="Enter your name"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-4"
              placeholder="Enter your email"
            />

            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="form-control mb-4"
              placeholder="Enter your website"
            />

            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control mb-4"
              placeholder="Enter your Message"
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Contact;
