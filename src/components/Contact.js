import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import ScrollTop from "./ScrollTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocation,
  faFlag,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import useScroll from "./useScroll";
import { Fade } from "./Animation/Animation";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [element, controls] = useScroll(Fade, 0.1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const serviceId = "service_fdm8td8";
    const templateId = "template_vj7teji";
    const publicKey = "k_vpwz6yfhdpgIEGK";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Bilal Ahmad",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("sending faild", error);
      });
  };
  return (
    <motion.div
      variants={Fade}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <motion.section className="block">
        <Header className="block__header">
          <h1>Get In Touch</h1>
          <p>Feel Free To Drop a Line To Contact ME</p>
        </Header>
        <ContactContent className="container grid grid--1x2">
          <form onSubmit={handleSubmit}>
            <FormGroup className="form-group">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="Email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </FormGroup>
            <Button title="Submit" />
          </form>
          <Adress>
            <h1>Adress And Phone</h1>
            <AdressDetail>
              <AdressGroup className="adress-group">
                <p>Bilal Ahamd</p>
                <FontAwesomeIcon icon={faUser} />
              </AdressGroup>
              <AdressGroup className="adress-group">
                <p>Riyadh</p>
                <FontAwesomeIcon icon={faLocation} />
              </AdressGroup>
              <AdressGroup className="adress-group">
                <p>Saudi Arabia</p>
                <FontAwesomeIcon icon={faFlag} />
              </AdressGroup>
              <AdressGroup className="adress-group">
                <p>bilalkhan5314@gmail.com</p>
                <FontAwesomeIcon icon={faEnvelope} />
              </AdressGroup>
              <AdressGroup className="adress-group">
                <p>0334-0565314</p>
                <FontAwesomeIcon icon={faPhone} />
              </AdressGroup>
            </AdressDetail>
          </Adress>
        </ContactContent>
      </motion.section>
      <ScrollTop />
    </motion.div>
  );
};

export default Contact;
const Header = styled.header`
  margin-bottom: 6rem;
  h1 {
    color: #7786a3;
    font-size: 4rem;
  }
  p {
    letter-spacing: 1px;
    font-size: 1.8rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
const ContactContent = styled.div`
  gap: 5rem;

  form {
    max-width: 495px;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  input {
    background-color: #191919;
    padding: 2rem 1rem;
    outline: none;
    color: white;
    transition: all 1s;
  }
  input::placeholder {
    color: #7786a3;
  }
  input:focus {
    border-color: #191919;
    box-shadow: 0px 1px 1px #7786a3, 0px 0px 8px #7786a3;

    background-color: black;
  }
  textarea {
    background-color: #191919;
    color: white;
  }
  textarea:focus {
    border-color: #191919;
    box-shadow: 0px 1px 1px #7786a3, 0px 0px 8px #7786a3;

    background-color: black;
  }
  label {
    text-shadow: 2px 2px #7786a3;
    margin-bottom: 1rem;
  }
`;
const Adress = styled.div`
  h1 {
    font-size: 3rem;
    color: #7786a3;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    h1 {
      text-align: left;
    }
  }
`;
const AdressDetail = styled.div`
  font-size: 1.6rem;
  @media screen and (min-width: 768px) {
    padding: 0 5rem 0 0;
    font-size: 1.8rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 16rem 0 0;
  }
`;
const AdressGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;
