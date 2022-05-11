import React from "react";
import avatarPhoto from "../../../assets/images/Avatar-CCSM.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function About() {
    return (
        <div>
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-img">
                    <img className="avatar" src={avatarPhoto} alt="Avatar of Christiana CS Morales" />
                    <ul className="bio-contact">
                        <li className="contact-icons"><FontAwesomeIcon icon='fa-solid fa-envelope' /> c.c.sullivanmorales@gmail.com</li>
                        <li className="contact-icons"><FontAwesomeIcon icon='fa-solid fa-mobile' /> (252) 373-2329</li>
                    </ul>
                </div>

                <div className="about-bio">
                    <p>
                        I am a science and math nerd, with an artistic side, and an insatiable thirst for new knowledge and skills. I love taking on new challenges, especially if they require thinking outside the box, and problem solving.
                    </p>
                    <p>
                        I found my love for programming while attempting to expand my artistic skillset into the world of web design. Very early into that journey I found that creating the logic behind a website was just as exciting as designing it, if not more.
                    </p>
                    <p>
                        I believe that programming is a flawless merging of creativity and logic, and luckily for me, those are two of my favorite things!
                    </p>
                    <p>
                        When I am not programming, I am usually spending time with my husband, daughter, and numerous pets, reading, playing games of any sort, drawing, or learning new skills.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;