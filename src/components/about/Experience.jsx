import React from "react";

const experienceContent = [
  {
    year: "  Enero 2022 - Presente",
    position: " Asistente de enseñanza FullStack",
    compnayName: "Henry",
    details: `Coordinar a un grupo de estudiantes para lograr la
    integración al grupo de estudio y orientar a los
    estudiantes en los primeros pasos de la cursada asi
    como asistir la resolución de ejercicios y promover la
    colaboración grupal.`,
  },
  {
    year: "Julio 2019 - Octubre 2021",
    position: "Técnico de Sistemas",
    compnayName: "Dilo & CHCP",
    details: `Brindar Soporte informático y configuración de las
    redes de la empresa.`,
  },
  {
    year: "Mayo 2017 - Octubre 2017",
    position: "Practicante",
    compnayName: "PDVSA-INTEVEP",
    details: `Realizar el estudio, comprensión y documentación
    de un código C y C++ para el funcionamiento
    de protocolo Modbus TCP de 1416 líneas`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
