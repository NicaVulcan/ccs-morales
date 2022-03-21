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
            <div>
                {featuredProjects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <div>
                            <img src={`/assets/images/project-screenshots/${project.imagePath}.png`} alt={project.title}></img>
                        </div>
                        <h4>{project.title}</h4>
                        <p>{project.techsUsed}</p>
                        <p>
                            <a href={project.ghRepoUrl}>GitHub Repo</a>
                            <a href={project.deployedUrl}>Visit App</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;