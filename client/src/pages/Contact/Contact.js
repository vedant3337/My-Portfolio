import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import contact_banner from "../../Assets/contact2.jpeg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        alert("Please Enter all Details!");
      } else {
        if (!validateEmail(email)) {
          alert("Invalid Email Format!");
        } else {
          const res = await axios.post("/api/v1/portfolio/sendMail", {
            name,
            email,
            msg,
          });
          if (res.data.success) {
            alert(res.data.message);
            setName("");
            setEmail("");
            setMsg("");
          } else {
            alert(res.data.message);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="row">
          <div className="col1 col-md-6">
            <img src={contact_banner} alt="contact-image" />
          </div>
          <div className="col2 col-md-6">
            <div className="form-control contact-form">
              <div className="d-flex first-row">
                <a href="https://www.linkedin.com/in/vedant3337/">
                  <AiFillLinkedin color="blue" size={30} className="ms-2" />
                </a>
                <a href="https://github.com/vedant3337">
                  <AiFillGithub color="black" size={30} className="ms-2" />
                </a>
                <a href="https://www.instagram.com/vedant_3337/">
                  <AiFillInstagram color="#D42A6B" size={30} className="ms-2" />
                </a>
              </div>
              <div className="d-flex part">
                <div className="line" />
                <small className="or text-center">OR</small>
                <div className="line" />
              </div>
              <div className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="mb-3"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="mb-3"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <textarea
                  type="text"
                  name="msg"
                  placeholder="Type your message here..."
                  value={msg}
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <button className="btn btn-send" onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
