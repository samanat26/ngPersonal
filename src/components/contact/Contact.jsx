/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Contact.css";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
// import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m50sb3u",
        "template_dmw9y0n",
        form.current,
        "r79dplPsiAnJunqBw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option-icon" />
              <h4>Email</h4>
              <h5>sumangill544@gmail.com</h5>
              <a
                href="mailto:sumangill544@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>

            <article className="contact_option">
              <BsWhatsapp className="contact_option-icon" />
              <h4>Whatsapp</h4>
              <h5>+123456789</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+923360777181"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="your full name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="your email"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="your message"
              ></textarea>
              <button type="submit" value="Send" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
