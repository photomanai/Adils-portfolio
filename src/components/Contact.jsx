import React, { useState } from "react";

const Contact = () => {
  const myDatas = {
    fullname: "Adil",
    mail: "adilabdulkerimov68@gmail.com",
    phoneNum: "+994 10 310 02 06",
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper">
        <div className="contact__header">
          <div className="contact__line"></div>
          <h2 className="contact__title ">Contact Information</h2>
          <div className="contact__line"></div>
        </div>

        <div className="contact__card">
          <div className="contact__item">
            <h3 className="contact__label">Email Address</h3>
            <a href={`mailto:${myDatas.mail}`} className="contact__detail">
              {myDatas.mail}
            </a>
          </div>

          <div className="contact__item">
            <h3 className="contact__label">Phone Number</h3>
            <a href={`tel:${myDatas.phoneNum}`} className="contact__detail">
              {myDatas.phoneNum}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
