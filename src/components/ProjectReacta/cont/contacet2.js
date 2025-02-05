import React, { useState } from "react";
import "./contact2.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
            <div
        style={{
          width: "100%",
          backgroundColor: "#f9b200",
          height: "3px",
        }}
      ></div>
      <section id="contact">
      <h2 className="h2l">Contact Us</h2>
      <form className="formo" onSubmit={handleSubmit}>

          <input className="inputo"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
                <label className="labelo" htmlFor="email">Email</label>
          <input className="inputo"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
                    <label className="labelo" htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="buttono" type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;