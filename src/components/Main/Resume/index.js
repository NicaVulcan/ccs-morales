import React from "react";
import resume from "../../../assets/documents/sample.pdf"

function Resume() {
    return (
        <div>
            <h2>My Resume</h2>
            <div className="proficiencies">
                <div className="skills">
                    <h3>What I have learned so far: </h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="tools">
                    <h3>The tools I use:</h3>
                    <ul>
                        <li>VS Code</li>
                        <li>GitHub</li>
                        <li>Heroku</li>
                        <li>Insomnia</li>
                    </ul>
                </div>
            </div>

            <h3 className="resume"><a href={resume} download="ccs-morales_resume" className="resume-link">Download My Resume</a></h3>

        </div>
    )
};

export default Resume;