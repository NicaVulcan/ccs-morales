import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

// using 'Main' for this component, instead of 'Project' as suggested by assignment description, because this just made more sense to me
function Main(props) {

    // destructure props
    const { currentDisplay } = props;

    // conditionally render each section of portfolio
    if (currentDisplay === 'About Me') {
        return <About></About>
    } else if (currentDisplay === 'My Projects') {
        return <Projects></Projects>
    } else if (currentDisplay === 'Contact Me') {
        return <Contact></Contact>
    } else {
        return <Resume></Resume>
    }
}

export default Main;