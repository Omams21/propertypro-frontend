import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

import "./myproperty.css";
import axios from "axios";


const Myproperty = () => {
  const [properties, setProperties] = useState([]);

  const getProperties = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/properties`);
    setProperties(data);
    console.log(properties);
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="propertyWrapper">
      {properties.map((item) => {
        return (
          <div className="mother">
            <div className="house-img">
              <img
                src='/Images/image3.jpg'
                alt="hello"
                style={{ border: "1px solid #000", width: "100%" }}
                className = "property-image"
              />
              <p className="status">{item.status}</p>
              <div className=" House_description ">
                <div className=" house_title">
                  <p className="text_icon"></p>
                  <p className=" house_type"> {item.title}</p>
                </div>
                <p className="price">{item.price}</p>
                <p className="specifics">
                  <span className="bold"> {item.number_of_baths} </span>Bath
                  <span className="bold"> {item.number_of_beds} </span>Bed{" "}
                  <span className="bold">{item.land_size}</span>sqft{" "}
                </p>
                <p className="address"> {item.address} </p>
              </div>

              {/* <div className="change_buttons">
                <p>
                  <button className="change_section" class="btn">
                    DELETE
                  </button>
                </p>
                <p>
                  <button className="change_section" class="btn">
                    EDIT
                  </button>
                </p>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
    <Footer/>
    </>

  );
};

export default Myproperty;
