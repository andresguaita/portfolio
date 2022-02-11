import React from "react";

const personalInfoContent = [
  { meta: "Nombre", metaInfo: "Andres Guaita" },
  { meta: "Direccion", metaInfo: "Manizales,Caldas" },
  { meta: "Telefono", metaInfo: "+573157093183" },
  { meta: "Email", metaInfo: "andresguaitadev@gmail.com" },
  { meta: "Github", metaInfo: "andresguaita" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
