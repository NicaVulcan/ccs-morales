import React from "react";

function Nav(props) {

        // destructure props
        const {
            navLinks = [],
            currentDisplay,
            setCurrentDisplay
        } = props;

    return (
        <nav>
            <ul>
                {/* create a list item per nav link */}
                {navLinks.map((navLink) => (
                    <li 
                        // active link is highlighted
                        className={`${currentDisplay === navLink && 'active-link'}`}
                        key={navLink}
                    >
                        <span
                            // on click, set current nav link to the one clicked
                            onClick={() => {
                                setCurrentDisplay(navLink);
                            }}
                        >{navLink}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Nav;