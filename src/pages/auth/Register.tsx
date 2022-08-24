import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./auth.css";
export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e: any) => {
    e.preventDefault();

  };

  return (
    <>
      <form onSubmit={handleRegistration}>
        <div className="title"> Account Registration</div>
        <ToastContainer />
        <div className="input-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e: any) => setName(e.target.value)}
            value={name}
            placeholder="username...."
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={(e: any) => setEmail(e.target.value)}
            value={email}
            placeholder="exemple@gmail.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit">Submit Registration</button>

        <div className="navigation">
          <p>
            I've already an account. <span className="action">Log in</span>{" "}
          </p>
        </div>
      </form>
    </>
  );
}
