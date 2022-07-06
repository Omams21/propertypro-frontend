import "./profile.css"

const Profile = () => {
  return <div>
   <div className="Agent_details">
          <p className="heading">
            {" "}
            <h1>AGENT DETAILS</h1>{" "}
          </p>
          <span className="agent_info">
            {" "}
            <textarea
              rows="3"
              cols="30"
              placeholder="Agent Name..."
            ></textarea>{" "}
          </span>
          <span className="agent_info">
            {" "}
            <textarea
              rows="3"
              cols="30"
              placeholder="Phone Number..."
            ></textarea>
          </span>
          <span className="agent_info">
            <textarea rows="3" cols="30" placeholder="Email..."></textarea>
          </span>
          <p className="about_me">
            {" "}
            <textarea rows="4" cols="64" placeholder="About Me..."></textarea>
          </p>
        </div>


  </div>;
};

export default Profile;
