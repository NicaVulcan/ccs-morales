import React, { useState } from "react";

function Projects() {
    const [featuredProjects] = useState([
        {
            title: "Calendari",
            deployedUrl: "https://calendari-day.herokuapp.com",
            ghRepoUrl: "https://github.com/ErikPlachta/Calendari",
            imagePath: "calendari",
            description: '',
            techs: ''
        },
        {
            title: "The Sheet Show",
            deployedUrl: "https://sheet-show.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/The-Sheet-Show",
            imagePath: "sheet-show",
            description: '',
            techs: ''
        },
        {
            title: "Budget Tracker - PWA",
            deployedUrl: "https://safe-crag-64410.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/budget-tracker",
            imagePath: "budget-tracker",
            description: '',
            techs: ''
        },
        {
            title: "Tech Blog",
            deployedUrl: "https://safe-dusk-00550.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/tech-blog",
            imagePath: "tech-blog",
            description: '',
            techs: ''
        },
        {
            title: "Social Network API",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/social-network-api",
            imagePath: "",
            description: '',
            techs: ''
        },
        {
            title: "e-Commerce API",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/e-commerce-back-end",
            imagePath: "",
            description: '',
            techs: ''
        },
        {
            title: "Employee Tracker",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/employee-tracker",
            imagePath: "",
            description: '',
            techs: ''
        },
        {
            title: "Note Taker",
            deployedUrl: "https://frozen-crag-25746.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/note-taker",
            imagePath: "note-taker",
            description: '',
            techs: ''
        },
        {
            title: "Team Profile Generator",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/team-profile-generator",
            imagePath: "",
            description: '',
            techs: ''
        },
        {
            title: "README Generator",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/readme-generator",
            imagePath: "",
            description: '',
            techs: ''
        },
        {
            title: "Poke-Dinner",
            deployedUrl: "https://vinssm.github.io/PokeDinner/index.html",
            ghRepoUrl: "https://github.com/NicaVulcan/PokeDinner",
            imagePath: "poke-dinner",
            description: "Front end web application using server side APIs",
            techs: ["HTML", "CSS", "NES CSS", "JavaScript", "PokéAPI", "Spoonacular Recipe Search API"]
        },
        {
            title: "Weather Dashboard",
            deployedUrl: "https://nicavulcan.github.io/weather-dashboard/",
            ghRepoUrl: "https://github.com/NicaVulcan/weather-dashboard",
            imagePath: "weather-dashboard",
            description: '',
            techs: ''
        },
        {
            title: "Day Scheduler",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/NicaVulcan/work-day-scheduler",
            imagePath: "",
            description: '',
            techs: ''
        },
        {
            title: "JavaScript Quiz",
            deployedUrl: "",
            ghRepoUrl: "https://github.com/",
            imagePath: "",
            description: '',
            techs: ''
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