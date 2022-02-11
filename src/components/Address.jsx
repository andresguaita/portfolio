import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Direccion</span> Manizales, Colombia.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email</span>{" "}
        <a href="mailto:andresguaitadev@gmail.com">andresguaitadev@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Tlf</span>{" "}
        <a href="Tel: +573157093183">+57 315 709 31 83</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
