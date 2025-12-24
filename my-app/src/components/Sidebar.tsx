import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faImage, faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLaptop, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"




function Sidebar() {


    return (
        <aside className="fixed right-0 top-1/4 transform -translate-x-5 translate-y-1/50 font-vazir font-normal h-full">
            <div dir="rtl" className="flex flex-nowrap flex-col gap-4 dark:text-white pt-2 min-[1850px]:pt-9">
                <div className="w-35 dark:hover:border-white border-none border-white lg:hover:shadow-md lg:border-(--MyColor-2) lg:hover:border-black dark:border-black cursor-pointer relative py-1 pr-1 group border-2  hover:border-2 rounded-md transition-all duration-300">
                    <Link to="Home" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={faHome} className="text-2xl min-[1850px]:text-3xl" />
                        <span className="absolute p-2 -top-1 min-[1850px]:top-0  -translate-x-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">صفحه اصلی</span>
                    </Link>
                </div>
                <div className="w-35 dark:hover:border-white border-none border-white lg:hover:shadow-md lg:border-(--MyColor-2) lg:hover:border-black dark:border-black cursor-pointer relative py-1 pr-1 group border-2  hover:border-2 rounded-md transition-all duration-300">
                    <Link to="About" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={faUser} className="text-2xl min-[1850px]:text-3xl" />
                        <span className="absolute p-2 -top-1 min-[1850px]:top-0  -translate-x-4  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">درباره من</span>
                    </Link>
                </div>
                <div className="w-35 dark:hover:border-white border-none border-white lg:hover:shadow-md lg:border-(--MyColor-2) lg:hover:border-black dark:border-black cursor-pointer relative py-1 pr-1 group border-2  hover:border-2 rounded-md transition-all duration-300">
                    <Link to="Skills" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={faLaptop} className="text-2xl min-[1850px]:text-3xl" />
                        <span className="absolute p-2 -top-1 min-[1850px]:top-0  -translate-x-4  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">مهارت من</span>
                    </Link>
                </div>
                <div className="w-35 dark:hover:border-white border-none border-white lg:hover:shadow-md lg:border-(--MyColor-2) lg:hover:border-black dark:border-black cursor-pointer relative py-1 pr-1 group border-2  hover:border-2 rounded-md transition-all duration-300">
                    <Link to="Services" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={faBriefcase} className="text-2xl min-[1850px]:text-3xl" />
                        <span className="absolute p-2 -top-1 min-[1850px]:top-0  -translate-x-4  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">خدمات من</span>
                    </Link>
                </div>
                <div className="w-35 dark:hover:border-white border-none border-white lg:hover:shadow-md lg:border-(--MyColor-2) lg:hover:border-black dark:border-black cursor-pointer relative py-1 pr-1 group border-2  hover:border-2 rounded-md transition-all duration-300">
                    <Link to="Projects" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={faImage} className="text-2xl min-[1850px]:text-3xl" />
                        <span className="absolute p-2 -top-1 min-[1850px]:top-0  -translate-x-4  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">پروژه ها</span>
                    </Link>
                </div>
                <div className="w-35 dark:hover:border-white border-none border-white lg:hover:shadow-md lg:border-(--MyColor-2) lg:hover:border-black dark:border-black cursor-pointer relative py-1 pr-1 group border-2  hover:border-2 rounded-md transition-all duration-300">
                    <Link to="Contact" smooth duration={600} spy offset={-10} containerId="scroll-container">
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl min-[1850px]:text-3xl" />
                        <span className="absolute p-2 -top-1 min-[1850px]:top-0  -translate-x-4  opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">ارتباط با من</span>
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;