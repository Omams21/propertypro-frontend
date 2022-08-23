import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Dashboard } from '../../Dashboard/Dashboard';
import './style.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// const url = "http://localhost:4000/v1/agent/property";

const AgentProperties = () => {

 const navigate = useNavigate()

    const token =  localStorage.getItem("token")

    const config = {
        headers : {
            Authorization: token
        }
    }
    const [agentProperties, setAgentProperties] = useState([])

    const getAgentProperties = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/agent/property`, config)
        const {data} = response
        setAgentProperties(data)
    }

    useEffect(()=> {
        getAgentProperties();
    }, [])

    const deleteItem = async(id) => {
      const removeProperty = agentProperties.filter((item) => item.id !== id)
setAgentProperties(removeProperty)
      try {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/agent/property/${id}`, config)
      } catch (error) {
        console.log(error)
      }
    }

  return ( 
    <>
    {/* <Dashboard /> */}
   
    <div className="propertyWrapper"> 
    {agentProperties.map((item) => {
      return (
        <div className="mother">
          <div className="house-img">
            <img className='property-image'
              src='/Images/image3.jpg'
              alt="hello"
            //   style={{ border: "1px solid #000", width: "100%", height:'100px' }}
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

            <div className="change_buttons">
              <p>
                <button className="change_section" class="btn" onClick={()=> deleteItem(item.id)}>
                  DELETE
                </button>
              </p>
              <p>
                <button className="change_section" class="btn" onClick={
                  (id) =>{
                    navigate(`/edit/${item.id}`)
                  }
                }>
                  EDIT
                </button>
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>  
  </>
  )
}

export default AgentProperties