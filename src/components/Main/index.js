import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Main(props) {

    // destructure props
    const { currentDisplay } = props;

    console.log(currentDisplay);


    if (currentDisplay === 'About') {
        return <About></About>
    } else if (currentDisplay === 'Portfolio') {
        return <Portfolio></Portfolio>
    } else if (currentDisplay === 'Contact') {
        return <Contact></Contact>
    } else {
        return <Resume></Resume>
    }
}

export default Main;