import React, { useState } from "react";
import ghGray from "../../assets/icons/footer-icons/gh-gray.png"
import ghTeal from "../../assets/icons/footer-icons/gh-teal.png"
import liGray from "../../assets/icons/footer-icons/li-gray.png"
import liTeal from "../../assets/icons/footer-icons/li-teal.png"
import soGray from "../../assets/icons/footer-icons/so-gray.png"
import soTeal from "../../assets/icons/footer-icons/so-teal.png"


function Footer() {
    const [footerLinks] = useState([
        {
            siteName: "github",
            url: "https://github.com/NicaVulcan",
            alt: "GitHub icon",
            defaultSrc: ghGray,
            hoverSrc: ghTeal,
        },
        {
            siteName: "linked-in",
            url: "https://www.linkedin.com/in/csullivanmorales/",
            alt: "LinkedIn icon",
            defaultSrc: liGray,
            hoverSrc: liTeal
        },
        {
            siteName: "stack-overflow",
            url: "https://stackoverflow.com/users/16744333/csullym",
            alt: "Stack Overflow icon",
            defaultSrc: soGray,
            hoverSrc: soTeal
        }
    ]);


    return (
        <footer>
            <p>C.C.S. Morales · © 2022</p>
            <ul className="footer-links">
                {footerLinks.map((link) => (
                    <li className="footer-link" key={link.siteName}>
                        <a href={link.url}>
                            <img 
                                alt={link.alt} 
                                className="footer-icons"
                                src={link.defaultSrc}
                                // change img source on hover to change color
                                onMouseEnter={(e) => {
                                    e.target.setAttribute("src", `${link.hoverSrc}`);
                                }}
                                // change img source back to default when not hovering
                                onMouseLeave={(e) => {
                                    e.target.setAttribute("src", `${link.defaultSrc}`);
                                }}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer;