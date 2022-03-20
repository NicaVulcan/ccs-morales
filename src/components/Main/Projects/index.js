import React, { useState } from "react";

function Projects() {
    const [featuredProjects] = useState([
        {
            title: "",
            techsUsed: "",
            deployedUrl: "",
            ghRepoUrl: "",
            imagePath: ""
        },
        {
            title: "",
            techsUsed: "",
            deployedUrl: "",
            ghRepoUrl: "",
            imagePath: ""
        },
        {
            title: "",
            techsUsed: "",
            deployedUrl: "",
            ghRepoUrl: "",
            imagePath: ""
        },
        {
            title: "",
            techsUsed: "",
            deployedUrl: "",
            ghRepoUrl: "",
            imagePath: ""
        },
        {
            title: "",
            techsUsed: "",
            deployedUrl: "",
            ghRepoUrl: "",
            imagePath: ""
        },
        {
            title: "",
            techsUsed: "",
            deployedUrl: "",
            ghRepoUrl: "",
            imagePath: ""
        }
    ])
    return (
        <div>
            <h2>My Projects</h2>
            <div>
                {featuredProjects.map((project, i) => (
                    <div className="project-card">
                        <img src={project.imagePath} alt={project.title}></img>
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