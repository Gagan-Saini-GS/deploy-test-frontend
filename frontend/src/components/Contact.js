import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <form
        className="contact-form"
        action="mailto:kiraruke19@gmail.com"
        method="post"
        enctype="multipart/form-data"
      >
        <div className="input-item">
          <p>Name:</p>
          <input className="input" type="text" name="name" placeholder="Name" />
        </div>
        <div className="input-item">
          <p>Email:</p>
          <input
            className="input"
            type="text"
            name="Email"
            placeholder="Email"
          />
        </div>
        <div className="input-item">
          <p>Message:</p>
          <textarea
            className="input"
            name="message"
            rows="5"
            placeholder="Your message..."
          ></textarea>
        </div>
        <div className="input-item">
          <button
            type="submit"
            onClick={(event) => {
              alert("Your msg is sent");
              event.preventDefault();
              document.querySelectorAll(".input")[0].value = "";
              document.querySelectorAll(".input")[1].value = "";
              document.querySelectorAll(".input")[2].value = "";
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
