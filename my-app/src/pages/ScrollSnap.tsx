import { useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";


function ScrollSnap() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const handleWheel = (e: WheelEvent) => {
            const isTouchPad = Math.abs(e.deltaY) < 50;
            if (isTouchPad) return;
            e.preventDefault();
            const scrollStep = 200;
            el.scrollBy({
                top: e.deltaY > 0 ? scrollStep : -scrollStep,
                behavior: "smooth",
            });
        };

        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div
            ref={containerRef}
            id="scroll-container"
            className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
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