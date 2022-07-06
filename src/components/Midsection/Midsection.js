import React from "react";
import "./midsection.css";

export default function Midsection() {
  return (
    <div className="mid">
      <div  className = "boxcontainer">
        <div className="buy">
          <div className="icon"><img src="https://img.icons8.com/carbon-copy/100/000000/home.png" alt="house.img"/></div>
          <div className="middleheader">
            <p  className= "caption"> <b> BUY A HOME </b> </p>
            <p>  Find your place with an immersive photo and top listing, including things you won't find anywhere else.</p>
          </div>
          <div   className = " search">
          <button  className="searchbutton">Search Home </button>
          </div>
        </div>
      </div>

      <div className = "boxcontainer" >
        <div className="buy">
          <div className="icon"> <img src="https://img.icons8.com/carbon-copy/100/000000/home.png" alt="house.img"/> </div>
          <div className="middleheader">
            <p className= "caption"> <b> RENT A HOME </b> </p>
            <p>
              We're creating a seamless online experience from shopping on the
              largest rental network, to applying, to paying rent.
            </p>
          </div>
          <div  className = " search"><button  className = "searchbutton">Find Rentals </button></div>
        </div>
       
      </div>

      <div  className = "boxcontainer" >
        <div className="buy">
          <div className="icon"><img src="https://img.icons8.com/carbon-copy/100/000000/home.png"alt="house.img"/></div>
          <div className="middleheader">
            <p  className= "caption"> <b> SELL A HOME</b> </p>
            <p>
             
              No matter what path you take to sell your home, we can help you
              navigate a successful sale.
            </p>
          </div>
          <div className = " search" >
          <button className="searchbutton" >See Your Option</button>
          </div>
        </div>
      </div>
    </div>
  );
}
