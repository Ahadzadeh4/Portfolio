import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

function ScrollSnap() {

    return (
        <div
            id="scroll-container"
            className="h-screen snap-mandatory snap-y overflow-y-scroll scroll-smooth ">
            <Home />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
        </div>
    );
}

export default ScrollSnap;