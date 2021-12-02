import React from "react";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
      <div className="container-fluid">
    <div className="contactus_main_container row">
        <div className="col-10 mx-auto">
            <div className="row">
      <div className="form_main col-6">
        <form className="container">
          <div class="">
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div class="">
            <input
              type="number"
              class="form-control"
              id="phone"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <div class="">
            <input
              type="email"
              class="form-control"
              id="mail"
              name="mail"
              placeholder="Your Email"
            />
          </div>
          <div class="">
            <textarea
              class="form-control"
              placeholder="Message"
              id="message"
              name="message"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            SEND
          </button>
        </form>
      </div>
      <div className="map_container col-6">
<div>

</div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};
export default ContactUs;
