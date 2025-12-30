import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

function ScrollSnap() {

    return (
        <main
            id="scroll-container"
            className="min-h-screen h-dvh snap-mandatory snap-y overflow-y-scroll scroll-smooth ">
            <Home />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Contact />
        </main>
    );
}

export default ScrollSnap;