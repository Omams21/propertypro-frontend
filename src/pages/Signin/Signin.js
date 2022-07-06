import React from 'react'
import './signin.css'

export default function SignIn() {
    return (
        <div className ="signinwrap">
           {/* <form> */}
           <div className="companyLogo">
          <i class="fa fa-home" aria-hidden="true">
             </i>
            <span className = "name">PropertyPro</span>
                 </div>
               <div className = " firstcontainer">
                    <h2 classname = "sign"> Sign In </h2>
                  <hr/>
                    <label  for = "email">Email</label>
                    <input className= "top" type = "text" placeholder = "Enter Email" name = "email" id ="email"/> 
                    
               <label  for ="psw"> Password </label>
               <input className= "top" type = "password" placeholder = " Enter Password" name = " psw" id = "psw"/>
               <button class="btn ">Sign In</button>
               
             
                <p   className= "psw">  Forgot Your Password?</p>
               </div>
               <hr></hr>
               <div className = "secondcontainer">
                   <p className ="connect"> Or Connect With : </p>
                   <div className = "apple">    <i class="fa fa-apple"></i>
                    <span className = "span" >  Continue With Apple </span></div>
            
                   <div className = "facebook">  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    <span className = "span" > Continue With Facebook </span></div>
                   
                    <div className = "google"> <i class="fa fa-google" aria-hidden="true"></i>
                    <span > Continue With Google </span></div>
                   
                  

               </div>
           {/* </form> */}
        </div>
    )
}
