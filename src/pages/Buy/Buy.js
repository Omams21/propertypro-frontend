import Property from "./Property";
import propertyData from "./Propertydata";
import "./buy.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Buy = () => {
  return (
    <>
      <Navbar />
      <h1>Property For Sale</h1>
      <div className="property_wrapper">
        {propertyData.map((property) => (
          <Property
            imgpath={property.imgpath}
            timePosted={property.timePosted}
            price={property.price}
            houseType={property.houseType}
            bathNo={property.bathNo}
            bedNo={property.bedNo}
            lenNo={property.lenNo}
            address={property.address}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Buy;
