import React, {useState} from "react";
import "./signin.css";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../slice/signupslice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:4000/v1/login";


export default function SignIn() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

const navigate = useNavigate()

  const handleSubmit = async() => {
   const userInfo = {email, password}
   const {data} = await axios.post(url,userInfo)
   const {token} = data
   localStorage.setItem("token", token)
  navigate('/dashboard')
   console.log(token)
  }
  return (
    <div className="signinwrap">
      {/* <form> */}
      <div className="companyLogo">
        <i class="fa fa-home" aria-hidden="true"></i>
        <span className="name">PropertyPro</span>
      </div>
      <div className=" firstcontainer">
        <h2 classname="sign"> Sign In </h2>
        <hr />
        <label htmlFor="email">Email</label>
        <input
          className="top"
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email" 
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <label htmlFor="psw"> Password </label>
        <input
          className="top"
          type="password"
          placeholder=" Enter Password"
          name=" psw"
          id="psw"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>Sign In</button>

        <p className="psw"> Forgot Your Password?</p>
      </div>
      <hr></hr>
      <div className="secondcontainer">
        <p className="connect"> Or Connect With : </p>
        <div className="apple">
          {" "}
          <i class="fa fa-apple"></i>
          <span className="span"> Continue With Apple </span>
        </div>

        <div className="facebook">
          {" "}
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <span className="span"> Continue With Facebook </span>
        </div>

        <div className="google">
          {" "}
          <i class="fa fa-google" aria-hidden="true"></i>
          <span> Continue With Google </span>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}
