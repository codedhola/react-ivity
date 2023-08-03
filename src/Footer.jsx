import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <p>Coded hola store. @2023</p>
      {isOpen ? (
        <p>
          We Are currently Opened, Shop with us now, closing shop by {closeHour}
          :00
        </p>
      ) : (
        <p>We are Closed for the day</p>
      )}
    </footer>
  );
};

export default Footer;
