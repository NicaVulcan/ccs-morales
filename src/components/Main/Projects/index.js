import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    const [featuredProjects] = useState([
        {
            title: "Calendari",
            deployedUrl: "https://calendari-day.herokuapp.com",
            ghRepoUrl: "https://github.com/ErikPlachta/Calendari",
            imagePath: "calendari",
            description: "Calendari is a full-stack, concept scheduling application that allows small businesses to create an account, and provides them with a unique url that clients can use to schedule appointments based on the business' availability.",
            techs: ["React", "CSS", "Node", "Express", "MongoDB", "Mongoose", "GraphQL", "Apollo", "Apollo Playground", "MongoDB Atlas", "Heroku"]
        },
        // {
        //     title: "The Sheet Show",
        //     deployedUrl: "https://sheet-show.herokuapp.com/",
        //     ghRepoUrl: "https://github.com/NicaVulcan/The-Sheet-Show",
        //     imagePath: "sheet-show",
        //     description: "The Sheet Show is a full stack application that allows a user to automatically generate a Dungeons and Dragons character sheet based on user preferences of 'Class' and 'Race'. This application randomizes character stats based on the chosen Class and Race parameters.",
        //     techs: ["Handlebars", "CSS", "Bootstrap", "Character Sheet CSS", "JavaScript", "DnD5e API", "Node", "Express", "Express Session", "Dotenv", "Bcrypt", "MySQL", "Sequelize", "Insomnia", "JawsDB", "Heroku"]
        // },
        {
            title: "Budget Tracker",
            deployedUrl: "https://safe-crag-64410.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/budget-tracker",
            imagePath: "budget-tracker",
            description: "Budget tracker is a full-stack, progressive web application meant to help the user keep track of daily transactions. This application is downloadable, and can operate offline by saving offline transactions to the browser's cache using IndexedDB, and posting these transactions once connectivity is restored.",
            techs: ["HTML", "CSS", "Bootstrap", "JavaScript", "IndexedDB", "Service Workers", "Node", "Express", "MongoDB", "Mongoose", "Insomnia", "MongoDB Atlas", "Heroku"]
        },
        {
            title: "Tech Blog",
            deployedUrl: "https://safe-dusk-00550.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/tech-blog",
            imagePath: "tech-blog",
            description: "Tech Blog is a concept blog application that allows users to create an account, or login if an account has previously been created. When logged in, a user can visit their personal dashboard, create new posts, update or delete their posts, and comment on other user's posts.",
            techs: ["Handlebars", "CSS", "JavaScript", "Node", "Express", "Express Session", "Dotenv", "Bcrypt", "MySQL", "Sequelize", "Insomnia", "JawsDB", "Heroku"]
        },
        {
            title: "Social Network API",
            ghRepoUrl: "https://github.com/NicaVulcan/social-network-api",
            imagePath: "social-network-api",
            description: "This is a RESTful API for a concept social network application. The API routes allow for creating, reading, updating, and deleting users and 'thoughts', as well as creating and deleting 'reactions' to 'thoughts', and adding or removing 'friends' to/from a user's friends list.",
            techs: ["Node", "Express", "MongoDB", "Mongoose", "Insomnia"]
        },
        {
            title: "e-Commerce API",
            ghRepoUrl: "https://github.com/NicaVulcan/e-commerce-back-end",
            imagePath: "e-commerce-api",
            description: "This is a RESTful API for a concept eCommerce website. The API routes allow for creating, reading, updating, and deleting new products, product tags, and product categories.",
            techs: ["Node", "Express", "Dotenv", "MySQL", "Sequelize", "Insomnia"]
        },
        {
            title: "Employee Tracker",
            ghRepoUrl: "https://github.com/NicaVulcan/employee-tracker",
            imagePath: "employee-tracker",
            description: "Employee Tracker is a CLI application designed for keeping track of an employee database. It allows the user to view formatted data for all departments, roles, and employees, as well as create new data for each of these categories.",
            techs: ["JavaScript", "Node", "Inquirer", "MySQL"]
        },
        {
            title: "Note Taker",
            deployedUrl: "https://frozen-crag-25746.herokuapp.com/",
            ghRepoUrl: "https://github.com/NicaVulcan/note-taker",
            imagePath: "note-taker",
            description: "Note Taker is a full-stack application that uses a local database. This application allows the user to create, read, update, or delete notes.",
            techs: ["HTML", "CSS", "Bootstrap", "FontAwesome", "JavaScript", "Node", "Express", "JSON"]
        },
        // {
        //     title: "Team Profile Generator",
        //     ghRepoUrl: "https://github.com/NicaVulcan/team-profile-generator",
        //     imagePath: "team-profile-generator",
        //     description: "Team Profile Generator is a CLI application that prompts the user for information on team members to generate an HTML file that displays a team profile.",
        //     techs: ["HTML", "CSS", "Node", "Inquirer", "Jest"]
        // },
    ])

    return (
        <div>
            <h2>My Projects</h2>
            <div className="projects">
                {featuredProjects.map((project) => (
                    <ProjectCard {...project} key={`${project.imagePath}-card`}/>
                ))}
            </div>
        </div>
    )
};

export default Projects;