import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser, signupError } from "../../slice/signupslice";

const url = "http://localhost:4000/v1/signup";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const submitButton = async (e) => {
    e.preventDefault();
    try {
      const userDetails = { firstName, lastName, email, password, phoneNumber };
      const response = await axios.post(url, { ...userDetails });
      console.log(response);
      const {token} = response.data
      localStorage.setItem("token", token);
      // console.log(localStorage.setItem("token", JSON.stringify(token)))
      navigate("/dashboard");
      dispatch(setCurrentUser({ currentUser: response.data.user }));
    } catch (err) {
      console.log(err);
      // dispatch(signupError({ userError: err.response.data.message }));
    }
    // setfirstName("");
    // setlastName("");
    // setemail("");
    // setpassword("");
    // setphoneNumber("");
  };
  console.log(firstName, lastName, email, password, phoneNumber);
  return (
    <div>
      <div className="parent-container">
        <div className="box">
          <div className="companyLogo">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span className="name">PropertyPro</span>
          </div>
          <div className=" firstcontainer">
            <h2 name="sign"> Sign Up</h2>
            <p> Please fill in this form, if you are an agent.</p>
            <hr />
            <label for="firstName">
              <b>First Name</b>
            </label>
            <input
              className="top"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />

            <label for="lastName">
              <b>Last Name</b>
            </label>
            <input
              className="top"
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <label for="phoneNumber">
              <b>Phone Number</b>
            </label>
            <input
              className="top"
              type="text"
              placeholder="Enter Phone Number"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <label for="email">
              <b>EMAIL</b>
            </label>
            <input
              className="top"
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label for="psw">
              <b>PASSWORD</b>
            </label>
            <input
              className="top"
              type="password"
              placeholder=" Create Password"
              name=" password"
              id="psw"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <p> At least 8 characters</p>
            <p> Mix of letters and numbers</p>
            <p> At least 1 special Character</p>
            <p> At least 1 lowercase letter and 1 uppercas letter</p>
            <span>
              <input
                type="checkbox"
                id="agentver"
                name="verification"
                value=" verification"
              />
              <label for="agentver"> I am a landlord or house agent </label>
            </span>
            <button class="btn " onClick={submitButton}>
              Submit
            </button>
            <p className="terms">
              By submitting, I accept PropertyPro's terms of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
