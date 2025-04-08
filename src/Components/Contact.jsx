import React from "react";
import "../Styles/Contact.css";
import Parse from "html-react-parser";

function Contact(props) {
  return (
    <div>
      <div id="contact">
        <div className="wrapper">
          <div className="footer">
            {props.contactSection.map((item, index) => {
              return (
                <div className="footer-section" key={index}>
                  {Parse(item.content)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
