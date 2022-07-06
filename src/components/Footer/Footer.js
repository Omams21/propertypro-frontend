import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-first-child">
        <span className="ab">ABOUT US</span>
        <span className="abc">CONTACT US</span>
      </div>
      <div className="footer-second-child">
        <span className="copyright"> COPYRIGHT</span>
        <span className="Preference"> COOKIE PREFERENCE</span>
      </div>
      <div className="footer-third-child">
        <span className="h"> HELP</span>
        <span className="b">BLOG</span>
      </div>
    </div>
  );
}
