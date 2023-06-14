import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="selfie_gallery">
        <div style={{ backgroundImage: 'url("assets/Header/1.jpg")' }}></div>
        <div style={{ backgroundImage: 'url("assets/Header/2.jpg")' }}></div>
        <div style={{ backgroundImage: 'url("assets/Header/3.jpg")' }}></div>
        <div style={{ backgroundImage: 'url("assets/Header/5.jpg")' }}></div>
        <div style={{ backgroundImage: 'url("assets/Header/6.jpg")' }}></div>
        <div style={{ backgroundImage: 'url("assets/Header/7.jpg")' }}></div>

        <div style={{ backgroundImage: 'url("assets/Header/8.jpg")' }}></div>
      </div>
    </>
  );
};

export default Header;
