
import "./uploadproperty.css";

const Uploadproperty = () => {
  return (
    <>
   
      <div className="post_a_property">
        <div className="house_description">
          <p className="heading">
            {" "}
            <h1> TITLE & DESCRIPTION </h1>
          </p>
          <span className="property_details">
            {" "}
            <textarea
              rows="3"
              cols="30"
              placeholder="Title Of Your Property..."
            ></textarea>{" "}
          </span>
          <span className="property_details">
            {" "}
            <textarea
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
              placeholder="Property Status..."
            ></textarea>{" "}
          </span>
        </div>

        <div className="house_location">
          <p className="heading">
            {" "}
            <h1> LOCATION </h1>
          </p>
          <div>
            <span className="property_location">
              {" "}
              <textarea
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
                placeholder="Enter City.."
              ></textarea>{" "}
            </span>
            <span className="property_location">
              {" "}
              <textarea
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
                rows="3"
                cols="30"
                placeholder="Enter Zip Code..."
              ></textarea>{" "}
            </span>
            <span className="property_location">
              {" "}
              <textarea
                rows="3"
                cols="30"
                placeholder="Enter Neigbourhood .."
              ></textarea>{" "}
            </span>
            <span className="property_location">
              {" "}
              <textarea
                rows="3"
                cols="30"
                placeholder="Enter Country..."
              ></textarea>{" "}
            </span>
          </div>
        </div>

        <div className="house_description">
          <p className="heading">
            {" "}
            <h1> PROPERTY DETAILS </h1>
          </p>
          <span className="property_details">
            {" "}
            <textarea rows="3" cols="30" placeholder="Beds..."></textarea>{" "}
          </span>
          <span className="property_details">
            {" "}
            <textarea rows="3" cols="30" placeholder="Baths..."></textarea>{" "}
          </span>
          <span className="property_details">
            {" "}
            <textarea
              rows="3"
              cols="30"
              placeholder="Land Size..."
            ></textarea>{" "}
          </span>
          <div className="photo_card">
            <span className="add_photo">
              <img
                src="https://img.icons8.com/metro/26/000000/camera.png" alt="Photo"  />
            </span>
            <p> Add Photo</p>
          </div>
        </div>

        <div>
          <span>
            {" "}
            <button class="btn success">UPLOAD PROPERTY</button>
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
