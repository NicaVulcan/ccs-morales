import React, { useState } from "react";

function Projects() {
    const [featuredProjects] = useState([
        {
            title: "Calendari",
            deployedUrl: "https://calendari-day.herokuapp.com",
            ghRepoUrl: "https://github.com/ErikPlachta/Calendari",
            imagePath: "calendari",
            description: "Calendari is a full-stack, React application. It is a scheduling application that allows for small businesses to create an account, which provides them with a unique url that clients can use to schedule appointments based on the business' availability.",
            techs: ["React", "CSS", "Node", "Express", "MongoDB", "Mongoose", "GraphQL", "Apollo", "Apollo Playground", "MongoDB Atlas", "Heroku"]
        },
        {
            title: "The Sheet Show",
            deployedUrl: "https://sheet-show.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/The-Sheet-Show",
            imagePath: "sheet-show",
            description: "The Sheet Show is a full stack application that allows a user to automatically generate a Dungeons and Dragons character sheet based on user preferences of 'Class' and 'Race'. This application randomizes character stats based on the chosen Class and Race parameters.",
            techs: ["Handlebars", "CSS", "Bootstrap", "Character Sheet CSS", "JavaScript", "DnD5e API", "Node", "Express", "Express Session", "Dotenv", "Bcrypt", "MySQL", "Sequelize", "Insomnia", "JawsDB", "Heroku"]
        },
        {
            title: "Budget Tracker",
            deployedUrl: "https://safe-crag-64410.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/budget-tracker",
            imagePath: "budget-tracker",
            description: "Budget tracker is a full-stack, progressive web application meant to help the user keep track of daily transactions. This application is downloadable, and can operate offline by saving offline transactions to the IndexedDB, and posting these transactions once the device regains connectivity.",
            techs: ["HTML", "CSS", "Bootstrap", "JavaScript", "IndexedDB", "Service Workers", "Node", "Express", "MongoDB", "Mongoose", "Insomnia", "MongoDB Atlas", "Heroku"]
        },
        {
            title: "Tech Blog",
            deployedUrl: "https://safe-dusk-00550.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/tech-blog",
            imagePath: "tech-blog",
            description: "Tech Blog is a full-stack application. It is a concept for a blog application that allows users to create an account, or login if an account has previously been created. If logged in, a user can create new posts, update or delete their posts, and comment on other user's posts.",
            techs: ["Handlebars", "CSS", "JavaScript", "Node", "Express", "Express Session", "Dotenv", "Bcrypt", "MySQL", "Sequelize", "Insomnia", "JawsDB", "Heroku"]
        }
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