import React, { useState } from "react";

function Projects() {
    const [featuredProjects] = useState([
        {
            title: "Calendari",
            deployedUrl: "https://calendari-day.herokuapp.com",
            ghRepoUrl: "https://github.com/ErikPlachta/Calendari",
            imagePath: "calendari",
            description: "Full Stack scheduling web application",
            techs: ["React", "CSS", "Node", "Express", "MongoDB", "Mongoose", "GraphQL", "Apollo", "Apollo Playground", "MongoDB Atlas", "Heroku"]
        },
        {
            title: "The Sheet Show",
            deployedUrl: "https://sheet-show.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/The-Sheet-Show",
            imagePath: "sheet-show",
            description: "Full Stack DnD Character Sheet Creator web application",
            techs: ["Handlebars", "CSS", "Bootstrap", "Character Sheet CSS", "JavaScript", "DnD5e API", "Node", "Express", "Express Session", "Dotenv", "Bcrypt", "MySQL", "Sequelize", "Insomnia", "JawsDB", "Heroku"]
        },
        {
            title: "Budget Tracker",
            deployedUrl: "https://safe-crag-64410.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/budget-tracker",
            imagePath: "budget-tracker",
            description: "Full Stack Progressive Web Application",
            techs: ["HTML", "CSS", "Bootstrap", "JavaScript", "IndexedDB", "Service Workers", "Node", "Express", "MongoDB", "Mongoose", "Insomnia", "MongoDB Atlas", "Heroku"]
        },
        {
            title: "Tech Blog",
            deployedUrl: "https://safe-dusk-00550.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/tech-blog",
            imagePath: "tech-blog",
            description: "Full Stack blog application",
            techs: ["Handlebars", "CSS", "JavaScript", "Node", "Express", "Express Session", "Dotenv", "Bcrypt", "MySQL", "Sequelize", "Insomnia", "JawsDB", "Heroku"]
        },
        {
            title: "Social Network API",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/social-network-api",
            imagePath: "",
            description: "RESTful API for a social networking application",
            techs: ["Node", "Express", "MongoDB", "Mongoose", "Insomnia"]
        },
        {
            title: "e-Commerce API",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/e-commerce-back-end",
            imagePath: "",
            description: "RESTful API for e-commerce website",
            techs: ["Node", "Express", "Dotenv", "MySQL", "Sequelize", "Insomnia"]
        },
        {
            title: "Employee Tracker",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/employee-tracker",
            imagePath: "",
            description: "CLI Application for keeping track of employee database",
            techs: ["JavaScript", "Node", "Inquirer", "MySQL"]
        },
        {
            title: "Note Taker",
            deployedUrl: "https://frozen-crag-25746.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/note-taker",
            imagePath: "note-taker",
            description: "Note taking application",
            techs: ["HTML", "CSS", "Bootstrap", "FontAwesome", "JavaScript", "Node", "Express"]
        },
        {
            title: "Team Profile Generator",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/team-profile-generator",
            imagePath: "",
            description: "CLI application for generating an HTML file for displaying team profile",
            techs: ["HTML", "CSS", "Node", "Inquirer", "Jest"]
        },
        {
            title: "README Generator",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/readme-generator",
            imagePath: "",
            description: "CLI application for creating professional README files",
            techs: ["Markdown", "Node", "Inquirer", "Shield.io"]
        },
        {
            title: "Poke-Dinner",
            deployedUrl: "https://vinssm.github.io/PokeDinner/index.html",
            ghRepoUrl: "https://github.com/NicaVulcan/PokeDinner",
            imagePath: "poke-dinner",
            description: "Front end web application using server side APIs",
            techs: ["HTML", "CSS", "NES CSS", "JavaScript", "PokéAPI", "Spoonacular Recipe Search API", "Local Storage"]
        },
        {
            title: "Weather Dashboard",
            deployedUrl: "https://nicavulcan.github.io/weather-dashboard/",
            ghRepoUrl: "https://github.com/NicaVulcan/weather-dashboard",
            imagePath: "weather-dashboard",
            description: "Front-end weather forecasting web application",
            techs: ["HTML", "CSS", "Spectre CSS", "JavaScript", "JQuery", "Open Weather One Call API", "Local Storage"]
        },
        {
            title: "Day Scheduler",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/work-day-scheduler",
            imagePath: "",
            description: "Front-end web application for planning work day",
            techs: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery", "Moment.js", "Local Storage"]
        },
        {
            title: "JavaScript Quiz",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/",
            imagePath: "",
            description: "Front-end timed quiz on JavaScript concepts",
            techs: ["HTML", "CSS", "JavaScript", "Local Storage"]
        },
    ])
    return (
        <div>
            <h2>My Projects</h2>
            <div className="projects">
                {featuredProjects.map((project) => (
                    <div className="project-card" key={project.title}>
                        {project.imagePath &&
                            <div className="card-img">
                                <img className="project-img" src={require(`../../../assets/images/project-screenshots/${project.imagePath}.png`)} alt={project.title}></img>
                            </div>
                        }
                        <div className="card-title">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-links">
                                <a className="project-link" href={project.ghRepoUrl} target="_blank" rel="noreferrer">
                                    <img className="project-link-icon" src={require("../../../assets/icons/project-link/repo-link.png")} alt="GitHub icon" />
                                </a>
                                {project.deployedUrl &&
                                    <a className="project-link" href={project.deployedUrl} target="_blank" rel="noreferrer">
                                        <img className="project-link-icon" src={require("../../../assets/icons/project-link/app-link.png")} alt="Website icon" />
                                    </a>
                                }
                            </p>
                            {project.description &&
                                <p>{project.description}</p>
                            }
                            {project.techs &&
                                <ul>
                                    {project.techs.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;