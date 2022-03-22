import React, { useState } from "react";

function Projects() {
    const [featuredProjects] = useState([
        {
            title: "The Sheet Show",
            deployedUrl: "https://sheet-show.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/The-Sheet-Show",
            imagePath: "sheet-show"
        },
        {
            title: "Budget Tracker - PWA",
            deployedUrl: "https://safe-crag-64410.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/budget-tracker",
            imagePath: "budget-tracker"
        },
        {
            title: "Tech Blog",
            deployedUrl: "https://safe-dusk-00550.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/tech-blog",
            imagePath: "tech-blog"
        },
        {
            title: "Poke-Dinner",
            deployedUrl: "https://vinssm.github.io/PokeDinner/index.html",
            ghRepoUrl: "https://github.com/NicaVulcan/PokeDinner",
            imagePath: "poke-dinner"
        },
        {
            title: "Note Taker",
            deployedUrl: "https://frozen-crag-25746.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/note-taker",
            imagePath: "note-taker"
        },
        {
            title: "Weather Dashboard",
            deployedUrl: "https://nicavulcan.github.io/weather-dashboard/",
            ghRepoUrl: "https://github.com/NicaVulcan/weather-dashboard",
            imagePath: "weather-dashboard"
        },
    ])
    return (
        <div>
            <h2>My Projects</h2>
            <div className="projects">
                {featuredProjects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div className="card-img">
                            <img className="project-img" src={`/assets/images/project-screenshots/${project.imagePath}.png`} alt={project.title}></img>
                        </div>
                        <div className="card-title">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-links">
                                <a className="project-link" href={project.ghRepoUrl}><img className="project-link-icon" src="/assets/icons/project-link/repo-link.png" alt="GitHub icon"/></a>
                                <a className="project-link" href={project.deployedUrl}><img className="project-link-icon" src="/assets/icons/project-link/app-link.png" alt="Website icon"/></a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;