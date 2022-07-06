import "./rent.css";

const Rentproperty = ({
  imgpath,
  price,
  timePosted,
  houseType,
  address,
  bathNo,
  bedNo,
  lenNo,
}) => {
  return (
    <>
      <div className="house">
        <div className="house-img">
          <img src={imgpath} alt="hello" />
          <p className="time-posted"> {timePosted}</p>
          <div className=" House-description ">
            <div className=" house-title">
              <p className="text-icon"></p>
              <p className=" house-type"> {houseType}</p>
            </div>

            <p className="amount">{price}</p>
            <p className="house-specification ">
              <span className="bold">{bathNo}</span>Bath
              <span className="bold">{bedNo}</span>Bed
              <span className="bold">{lenNo}</span>sqft
            </p>
            <p className="address"> {address} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rentproperty;
