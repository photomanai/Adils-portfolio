import React, { useState } from "react";
import emailjs from "emailjs-com";
import { PKEYex, SIDex, TIDex } from "../EmailJsKeys";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailJsData = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.user_message,
    };

    const SID = SIDex;
    const TID = TIDex;
    const PKEY = PKEYex;

    emailjs.send(SID, TID, emailJsData, PKEY).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", user_message: "" });
      },
      (error) => {
        alert("An error occurred: " + JSON.stringify(error));
      }
    );
  };

  return (
    <div className="main" id="contact">
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
          name="user_message"
          placeholder="Message"
          value={formData.user_message}
          onChange={handleChange}
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
