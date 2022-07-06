import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Property from "../Buy/Property";
import propertyData from "../Buy/Propertydata";
import "./rent.css";







const Rent = () => {
  return <div>
      <Navbar/>

<h1>Property For Rent</h1>
      <div className="property_wrapper">
      {propertyData.map((property) => 
           <Property imgpath={property.imgpath}  timePosted={ property.timePosted} price={property.price}  houseType= {property.houseType}  bathNo={property.bathNo} bedNo={property.bedNo} lenNo={property.lenNo}address={property.address} />
    
      )}
     <Footer/>
      
     </div>



  </div>;
};

export default Rent;
