import "./uploadproperty.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Dashboard } from "../../components/Dashboard/Dashboard";

const url = "http://localhost:4000/v1/agent/properties";

const Uploadproperty = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  let config = {
    headers: {
      Authorization: token,
      "content-type": "multipart/form-data",
    },
  };
  const [inputProperties, setInputProperties] = useState({
    image: "",
    title: "",
    price: "",
    status: "",
    address: "",
    city: "",
    LGA: "",
    ZIP: "",
    neighbourhood: "",
    country: "",
    numberOfBeds: "",
    numberOfBaths: "",
    landSize: "",
  });
  // const [file, setFile] = useState();
  // const saveImage = (e) => {
  //   setFile(e.target.files[0]);
  // };
  const handleChange = (e) => {
    setInputProperties({ ...inputProperties, [e.target.name]: e.target.value });
    // console.log(inputProperties);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();

    // formData.append("file", file);
    // formData.append("propertyInfo", JSON.stringify(inputProperties));
    try {
      const response = await axios.post(url, inputProperties, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(inputProperties);

  return (
    <>
    {/* <Dashboard /> */}
      <div className="post_a_property">
        <div className="house_description">
          <h1 className="heading">
            {" "}
           TITLE & DESCRIPTION 
          </h1>
          <span className="property_details">
            {" "}
            <textarea
              name="title"
              onChange={handleChange}
              value={inputProperties.title}
              rows="3"
              cols="30"
              placeholder="Title Of Your Property..."
            ></textarea>{" "}
          </span>
          <span className="property_details">
            {" "}
            <textarea
              name="price"
              onChange={handleChange}
              value={inputProperties.price}
              rows="3"
              cols="30"
              placeholder="Property Price..."
            ></textarea>{" "}
          </span>
          <span className="property_details">
            {" "}
            <textarea
              rows="3"
              cols="30"
              name="status"
              onChange={handleChange}
              value={inputProperties.status}
              placeholder="Property Status..."
            ></textarea>{" "}
          </span>
        </div>

        <div className="house_location">
          <h1 className="heading">
            {" "}
            LOCATION 
          </h1>
          <div>
            <span className="property_location">
              {" "}
              <textarea
                name="address"
                onChange={handleChange}
                value={inputProperties.address}
                rows="3"
                cols="30"
                placeholder="enter Address..."
              ></textarea>{" "}
            </span>
            <span className="property_location">
              {" "}
              <textarea
                rows="3"
                cols="30"
                name="city"
                onChange={handleChange}
                value={inputProperties.city}
                placeholder="Enter City.."
              ></textarea>{" "}
            </span>
            <span className="property_location">
              {" "}
              <textarea
                name="LGA"
                onChange={handleChange}
                value={inputProperties.LGA}
                rows="3"
                cols="30"
                placeholder="Select LGA..."
              ></textarea>{" "}
            </span>
          </div>
          <div>
            <span className="property_location">
              {" "}
              <textarea
                name="ZIP"
                onChange={handleChange}
                value={inputProperties.ZIP}
                rows="3"
                cols="30"
                placeholder="Enter Zip Code..."
              ></textarea>{" "}
            </span>
            <span className="property_location">
              {" "}
              <textarea
                name="neighbourhood"
                onChange={handleChange}
                value={inputProperties.neighbourhood}
                rows="3"
                cols="30"
                placeholder="Enter Neigbourhood .."
              ></textarea>{" "}
            </span>
            <span className="property_location">
              {" "}
              <textarea
                name="country"
                onChange={handleChange}
                value={inputProperties.country}
                rows="3"
                cols="30"
                placeholder="Enter Country..."
              ></textarea>{" "}
            </span>
          </div>
        </div>

        <div className="house_description">
          <h1 className="heading">
            {" "}
             PROPERTY DETAILS 
          </h1>
          <span className="property_details">
            {" "}
            <textarea
              name="numberOfBeds"
              onChange={handleChange}
              value={inputProperties.numberOfBeds}
              rows="3"
              cols="30"
              placeholder="Beds..."
            ></textarea>{" "}
          </span>
          <span className="property_details">
            {" "}
            <textarea
              name="numberOfBaths"
              onChange={handleChange}
              value={inputProperties.numberOfBaths}
              rows="3"
              cols="30"
              placeholder="Baths..."
            ></textarea>{" "}
          </span>
          <span className="property_details">
            {" "}
            <textarea
              name="landSize"
              onChange={handleChange}
              value={inputProperties.landSize}
              rows="3"
              cols="30"
              placeholder="Land Size..."
            ></textarea>{" "}
          </span>
          <div className="photo_card">
            <span className="add_photo">
              {/* <file
                src="https://file.icons8.com/metro/26/000000/camera.png" alt="Photo"  /> */}
            </span>
            {/* <p> Add Photo</p> */}
            <input
              type="text"
              name="image"
              onChange={handleChange}
              value={inputProperties.image}
              className="btn success"
            />
          </div>
        </div>

        <div>
          <span>
            {" "}
            <button type="submit" class="btn success" onClick={handleSubmit}>
              UPLOAD PROPERTY
            </button>
          </span>
          <span>
            {" "}
            <button class="btn success">EDIT</button>
          </span>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Uploadproperty;
