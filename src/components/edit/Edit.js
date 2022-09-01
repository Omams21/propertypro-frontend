import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


// const url = `http://localhost:4000/v1//agent/property/ + id`;


const Edit = () => {
    console.log(useParams())
    const {id} = useParams()

    console.log(id)
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    console.log(token);
    let config = {
      headers: {
        Authorization: token,
        "content-type": "multipart/form-data",
      },
    };
    const [inputProperties, setInputProperties] = useState({
      image_url: "",
      title: "",
      price: "",
      status: "",
      address: "",
      city: "",
      lga: "",
      zip_code: "",
      neighbourhood: "",
    //   country: "",
      number_of_beds: "",
      number_of_baths: "",
      land_size: "",
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
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/agent/property/${id}`, inputProperties, config);
        navigate("/agent/properties");
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
                  name="lga"
                  onChange={handleChange}
                  value={inputProperties.lga}
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
                  name="zip_code"
                  onChange={handleChange}
                  value={inputProperties.zip_code}
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
              {/* <span className="property_location">
                {" "}
                <textarea
                  name="country"
                  onChange={handleChange}
                  value={inputProperties.country}
                  rows="3"
                  cols="30"
                  placeholder="Enter Country..."
                ></textarea>{" "}
              </span> */}
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
                name="number_of_beds"
                onChange={handleChange}
                value={inputProperties.number_of_beds}
                rows="3"
                cols="30"
                placeholder="Beds..."
              ></textarea>{" "}
            </span>
            <span className="property_details">
              {" "}
              <textarea
                name="number_of_baths"
                onChange={handleChange}
                value={inputProperties.number_of_baths}
                rows="3"
                cols="30"
                placeholder="Baths..."
              ></textarea>{" "}
            </span>
            <span className="property_details">
              {" "}
              <textarea
                name="land_size"
                onChange={handleChange}
                value={inputProperties.land_size}
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
                name="image_url"
                onChange={handleChange}
                value={inputProperties.image_url}
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
}

export default Edit