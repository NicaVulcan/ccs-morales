import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ ...project }) => {

    const [detailsView, setDetailsView] = useState(false);

    const toggleDetailsView = (e) => {
        setDetailsView(!detailsView);
        console.log(detailsView)
    }

    return (
        <div className="project-card" onClick={toggleDetailsView}>
            <div className="img-container">
                <div className="card-img">
                    <img className="project-img" src={require(`../../../../assets/images/project-screenshots/${project.imagePath}.png`)} alt={project.title}></img>
                </div>
            </div>
            <div className="card-title">
                <h3 className="project-title">
                    {project.title}
                    {detailsView
                        ? <FontAwesomeIcon className="arrow" icon="fa-solid fa-circle-chevron-up" />
                        : <FontAwesomeIcon className="arrow" icon="fa-solid fa-circle-chevron-down" />
                    }
                </h3>
            </div>
            {detailsView &&
                <div className="details-container">
                    <div className="card-body">
                        <h4>Project Description:</h4>
                        <p>{project.description}</p>
                        {project.deployedUrl
                            ? <p>Check out the deployed application <a href={project.deployedUrl}>here</a>, or visit the GitHub repository <a href={project.ghRepoUrl}>here</a>.</p>
                            : <p>Visit the GitHub repository <a href={project.ghRepoUrl}>here</a>.</p>
                        }
                        <h4>Techs used:</h4>
                        <ul>
                            {project.techs.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }

        </div>
    )

};

export default ProjectCard;