import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailJsData = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };

    // EmailJS konfiqurasiyası
    const SID = "YOUR_SERVICE_ID";
    const TID = "YOUR_TEMPLATE_ID";
    const PKEY = "YOUR_PUBLIC_KEY";

    emailjs.send(SID, TID, emailJsData, PKEY).then(
      () => {
        alert("Message sent successfully!");
        // Formu təmizləyirik
        setFormData({ user_name: "", user_email: "", message: "" });
      },
      (error) => {
        alert("An error occurred: " + JSON.stringify(error));
      }
    );
  };

  return (
    <div className="main">
      <h1 className="header">Contact</h1>
      <form onSubmit={handleSubmit} className="contact_form">
        <input
          className="contact_input"
          type="text"
          name="user_name"
          placeholder="Name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
        <input
          className="contact_input"
          type="email"
          name="user_email"
          placeholder="Email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <textarea
          className="contact_text_area"
          name="contact_message"
          placeholder="Message"
          required
        ></textarea>
        <button className="button contact_btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
