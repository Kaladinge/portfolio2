import React from "react";
import phone from "../../images/phone.svg";
import mail from "../../images/mail.svg";
import linked from "../../images/linkedin.png";

function Footer() {
  return (
    <div className="footer bg-dark text-white text-center py-3">
      <div className="mb-3">
        <img src={phone} className="footer--icon" />
        (+47) 922 81 070
      </div>
      <div className="mb-3">
        <img src={mail} className="footer--icon" />
        lars.inge1988@gmail.com
      </div>
      <a href="https://www.linkedin.com/in/lars-inge-g-johnsen/">
        <img src={linked} className="footer--icon" />
      </a>
    </div>
  );
}

export default Footer;
