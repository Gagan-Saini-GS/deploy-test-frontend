import React from "react";

function Signup() {
  function submitData() {
    fetch("https://deploy-test-backend.onrender.com/signup", {
      method: "POST",
      body: JSON.stringify({
        username: document.querySelector(".username").value,
        useremail: document.querySelector(".useremail").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.msg);
        alert("Welcome you are signuped");
        document.querySelector(".username").value = "";
        document.querySelector(".useremail").value = "";
      });
  }

  return (
    <div className="box">
      <div className="form-container">
        <div className="item">
          <p className="item-label">Name</p>
          <input
            className="username"
            type="text"
            name="username"
            placeholder="Name"
          />
        </div>
        <div className="item">
          <p className="item-label">Email</p>
          <input
            className="useremail"
            type="email"
            name="useremail"
            placeholder="Email"
          />
        </div>
        <div className="item">
          <button onClick={submitData}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
