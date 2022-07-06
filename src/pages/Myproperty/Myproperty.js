import "./myproperty.css";

const Myproperty = () => {
  return <div>

<div className="mother">
        <div className="house-img">
          <img src="/images/image3.jpg" alt="hello" />
        <p className="status"> Rent</p>
          <div className=" House_description ">
            <div className=" house_title">
              <p className="text_icon"></p>
              <p className=" house_type"> Bungalow</p>
            </div>
            <p className="price">$4,000</p>
            <p className="specifics">
              <span className="bold">5</span>Bath
              <span className="bold">4</span>Bed{" "}
              <span className="bold">1,235</span>sqft{" "}
            </p>
            <p className="address"> Yakoyo, Lagos </p>
          </div>


          <div  className="change_buttons">
          <p>
            <button className="change_section" class="btn">DELETE</button>
            </p>
          <p>
            <button  className="change_section" class="btn">EDIT</button>
            </p>
        </div>

        </div>
      </div>



  </div>;
};

export default Myproperty




;
