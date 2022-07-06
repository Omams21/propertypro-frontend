import React from 'react'
import './signup.css'


export default function Signup() {
    return (
        <div>
           <div  className = "box">
           <div className="companyLogo">
          <i class="fa fa-home" aria-hidden="true">
             </i>
            <span className = "name">PropertyPro</span>
                 </div>
               <div className = " firstcontainer">
                    <h2 name ="sign"> Sign Up</h2>
                    <p> Please fill in this form, if you are an agent.</p>
                  <hr/>
                    <label  for = "email"> <b>EMAIL</b></label>
                    <input  className= "top" type = "text" placeholder = "Enter Email" name = "email" id ="email"/> 
                    
               <label for ="psw"> <b>PASSWORD</b> </label>
               <input  className= "top" type = "password" placeholder = " Create Password" name = " psw" id = "psw"/>
                <p> At least 8 characters</p>
                <p> Mix of letters and numbers</p>
                <p> At least 1 special Character</p>
                <p> At least 1 lowercase letter and 1 uppercas letter</p>
                <span> <input  type = "checkbox" id = "agentver" name = "verification"value =" verification"/>
                    <label for = "agentver"> I am a landlord or house agent  </label> </span> 
                    <button class="btn ">Submit</button>
         
               <p  className= "terms"> By submitting, I accept PropertyPro's terms of use.</p>
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
           </div>
          
        </div>
    )
}
