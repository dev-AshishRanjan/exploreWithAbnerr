import React, { useState } from "react";
import styles from "./style.module.scss";

const ContactSection = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const [subject, setSubject] = useState();
  return (
    <div className={styles.ContactSection} id="contact">
      <form
        action="https://formsubmit.co/kumarashishranjan4971@gmail.com"
        method="POST"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          name="msg"
          id="msg"
          cols="30"
          rows="10"
          placeholder="Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
