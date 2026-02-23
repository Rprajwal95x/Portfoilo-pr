import React from "react";
import ProjectCard from "../component/ProjectCard.jsx";

export default function Projects() {
  const projectList = [
    {
      image: "/traveal.png", 
      title: "traval",
      description:
        "Full-stack application with React frontend and Spring Boot backend. Users can browse restaurants, place orders, and manage their profiles.",
      tech: ["React", "Bootstrap", "HTML"],
      liveLink: "https://traveal-frontend-kqmp.vercel.app/",
      githubLink: "https://github.com/Rprajwal95x/traveal-frontend",
    },
    {
      image: "/foodvilla.png", 
      title: "foodvilla Website",
      description:
        "TO order food online used foodwilla",
      tech: ["HTML", "Javascript", "CSS"],
      liveLink: "https://rprajwal95x.github.io/foodvilla/",
      githubLink: "https://github.com/Rprajwal95x/foodvilla",
    },
    {
      image: "/weather.png",
      title: "wheather app",
      description: "Cheak wheather all our world",
      tech: ["Javascript", "HTML", "CSS"],
      liveLink: "#",
      githubLink: "https://github.com/Rprajwal95x/weahter",
    },

    {
      image: "/empoymanenet.png",
      title: "Employee Manegement System ",
      description: "Emploee Mananegement system that manage employee leave ,record, crud opration  using springboot  ",
      tech: ["React.js", "HTML", "CSS","Springboot","MYSQL"],
      liveLink: "#",
      githubLink: "https://github.com/Rprajwal95x/ems-system",
    },
     {image: "/claculater.png",
      title: "Calculater",
      description: "TO make a calculation ",
      tech: ["Javascript", "HTML", "CSS",],
      liveLink: "#",
      githubLink: "https://github.com/Rprajwal95x/Calculator",
    },
     {image: "/pacages.png",
      title: "Tour-Details-page",
      description: "TO make a calculation ",
      tech: ["Javascript", "HTML", "CSS",],
      liveLink: "#",
      githubLink: "https://github.com/Rprajwal95x/tour-deatial-page",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px 20px",
        backgroundColor: "#508bc6",
      }}
    >
      {projectList.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
    </section>
  );
}