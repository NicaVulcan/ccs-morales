import React from "react";

function Portfolio () {
    return (
        <div>
            <h2>My Projects</h2>
            <div className="project-card">
                <img alt="project-name"></img>
                <h4>project title</h4>
                <p>project techs</p>
                <p><a href="a">GitHub Repo link</a><a href="b">Deployed App link</a></p>
            </div>
        </div>
    )
};

export default Portfolio;