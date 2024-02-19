import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hc3o9qi",
        "template_f3ieije",
        form.current,
        "A7KdIaEiER3UvnzmR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Set the state to indicate successful submission
          setTimeout(() => {
            setIsSubmitted(false); // Reset the state after a delay
            form.current.reset(); // Reset the form fields
          }, 3000); // Reset after 3 seconds (adjust as needed)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        {/* Render alert message if form is submitted successfully */}
        {isSubmitted && (
          <div className="alert alert-success" role="alert">
            Message sent successfully!
          </div>
        )}
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="second_name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_name"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="mobile_number"
              id="phone-number"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
