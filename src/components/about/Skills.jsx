import React from "react";

const skillsContent = [
  { skillName: "HTML", skillimg: 'img/html.svg' },
  { skillName: "CSS", skillimg: 'img/css.svg' },
  { skillName: "JavaScript", skillimg: 'img/javascript.svg' },
  { skillName: "React", skillimg: 'img/react.svg' },
  { skillName: "Node", skillimg: 'img/node.svg' },
  { skillName: "Express", skillimg: 'img/express.svg' },
  { skillName: "Socket.io", skillimg: 'img/socket.svg' },
  { skillName: "PostgreSQL", skillimg: 'img/postgres.svg' },
  { skillName: "Sequelize", skillimg: 'img/sequelize.svg' },
  { skillName: "MongoDB", skillimg: 'img/mongo.svg' },
  { skillName: "Git", skillimg: 'img/github.svg' },
  
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className="d-flex justify-content-center">
            <img src={val.skillimg} alt='img'/>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-2">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
