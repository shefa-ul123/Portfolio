import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    toast.dismiss();

  toast.info("Sending message...", {
      position: "top-right",
      autoClose: 1500,
    });

    emailjs
      .send(
        "service_nc4yqq8",      
        "template_pp7eanu",     
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,  
        },
        "EDvp3-hKTn3ZKr3xW"      
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅", {
            position: "top-right",
            autoClose: 3000,
          });
          setFormData({ 
            name: "", 
            email: "", 
            subject: "", 
            message: "", 
          });
        })
        .catch(() => {
          toast.error("Failed to send message ❌", {
            position: "top-right",
            autoClose: 3000,
          });
        });     
  };

  return (
   <div className="contact-total">
      <ToastContainer />
    <h2 className="section-title">Contact Me</h2>
    <section id="contact" className="contact-section">
      

      {/* Contact Cards */}
      
        <div className="contact-cards">
          
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />   
            <h3>Email</h3> 
            <p>shefaul810@gmail.com</p>    
          </div>

          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <p>+94 743470027</p> 
          </div> 

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>No : 194 New Road, Kalmunaikudy 13, Sri Lanka</p>
          </div>
        </div>
      


        <div className="contact-form-container">
          <h3>Send Me a Message</h3>

          <form className="contact-form" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="subject"
              rows="2"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            ></textarea>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
    
    </section>

    </div>
  );
}

export default Contact;
