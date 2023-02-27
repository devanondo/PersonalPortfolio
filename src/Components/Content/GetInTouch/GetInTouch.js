import React from "react";
import "./GetInTouch.scss";

export default function GetInTouch() {
  return (
    <div id="contact" className="get_in_touch">
      <h4 className="head_title">Get In Touch</h4>

      <div className="contact_me">
        <div className="input">
          <div className="icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <input type="text" placeholder="Enter you name..." />
        </div>
        <div className="input">
          <div className="icon">
            <i class="fa-solid fa-at"></i>
          </div>
          <input type="text" placeholder="Enter you name..." />
        </div>
        <div className="input textarea">
          <div className="icon">
            <i class="fa-regular fa-envelope"></i>
          </div>
          <textarea name="" id="" placeholder="Write you message"></textarea>
        </div>

        <button className="send_btn">send message</button>
      </div>
    </div>
  );
}
