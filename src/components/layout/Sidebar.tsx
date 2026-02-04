import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FontawesomeIcons } from "@/components/icons/FontawesomeMap";
import { Link } from "react-scroll"




function Sidebar() {


    return (
        <aside className="fixed right-0 top-1/4 transform -translate-x-5 translate-y-1/50 font-vazir font-normal h-full">
            <div dir="rtl" className="flex flex-nowrap flex-col gap-4 dark:text-white pt-2 test:pt-9">
                <div className="sidebar-item group transition-darkmode">
                    <Link to="Home" aria-label="home" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={FontawesomeIcons.faHome} className="text-2xl test:text-3xl" />
                        <span className="sidebar-text">صفحه اصلی</span>
                    </Link>
                </div>
                <div className="sidebar-item group transition-darkmode">
                    <Link to="About" aria-label="about" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={FontawesomeIcons.faUser} className="text-2xl test:text-3xl" />
                        <span className="sidebar-text">درباره من</span>
                    </Link>
                </div>
                <div className="sidebar-item group transition-darkmode">
                    <Link to="Skills" aria-label="skills" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={FontawesomeIcons.faLaptop} className="text-2xl test:text-3xl" />
                        <span className="sidebar-text">مهارت من</span>
                    </Link>
                </div>
                <div className="sidebar-item group transition-darkmode">
                    <Link to="Services" aria-label="services" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={FontawesomeIcons.faBriefcase} className="text-2xl test:text-3xl" />
                        <span className="sidebar-text">خدمات من</span>
                    </Link>
                </div>
                <div className="sidebar-item group transition-darkmode">
                    <Link to="Projects" aria-label="projects" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={FontawesomeIcons.faImage} className="text-2xl test:text-3xl" />
                        <span className="sidebar-text">پروژه ها</span>
                    </Link>
                </div>
                <div className="sidebar-item group transition-darkmode">
                    <Link to="Contact" aria-label="contact" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={FontawesomeIcons.faEnvelope} className="text-2xl test:text-3xl" />
                        <span className="sidebar-text">ارتباط با من</span>
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;