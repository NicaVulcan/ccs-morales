import React, { useState } from "react";

const ProjectCard = ({ ...project }) => {

    const [detailsView, setDetailsView] = useState(false);

    const toggleDetailsView = (e) => {
        setDetailsView(!detailsView);
        console.log(detailsView)
    }

    return (
        <div className="project-card" onClick={toggleDetailsView}>
            {detailsView
                ?
                <div className="img-container">
                    <div className="card-title">
                        <h3 className="project-title">{project.title}</h3>
                        <span className="project-alt-view">(click to view details)</span>
                    </div>
                    <div className="card-img">
                        <img className="project-img" src={require(`../../../../assets/images/project-screenshots/${project.imagePath}.png`)} alt={project.title}></img>
                    </div>
                </div>
                :
                <div className="details-container">
                    <div className="card-title">
                        <h3>{project.title}</h3>
                        <button onClick={toggleDetailsView}>go back! </button>
                    </div>
                    <div className="card-body">
                        <p>{project.description}</p>
                        <ul>
                            {project.techs.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </div>
    )

};

export default ProjectCard;