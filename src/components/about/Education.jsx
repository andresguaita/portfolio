import React from "react";

const educationContent = [
  {
    year: "Noviembre 2021 - Marzo 2022",
    degree: "Desarrollador FullStack",
    institute: "Henry",
    details: `Bootcamp con +800 horas de codeo para formarse como
    desarrollador FullStack.`,
  },
  {
    year: "Enero 2015 - Enero 2018",
    degree: "Tecnico Superior Universitario",
    institute: "Universidad Politecnica Territorial del Estado Aragua",
    details: `Técnico Superior Universitario en Electricidad Mencion Telecomunicaciones.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
