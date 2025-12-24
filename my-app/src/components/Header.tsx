import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../Context/ThemeContext";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { ThemeIcon } from "./Theme/ThemeIcon";

function Header() {
    const { theme } = useTheme();
    return (
        <header className=" fixed w-full ">
            <div className=" border-b-2 border-(--MyCB) flex flex-row flex-nowrap justify-between">
                <div className="flex flex-row flex-nowrap  sm:max-lg:gap-3.5 gap-4 p-2 min-[1850px]:p-6 items-center justify-start h-10 sm:max-lg:h-8.5  dark:border-white">
                    <span className="rounded-[3px] w-6 h-6 min-[1850px]:w-7 min-[1850px]:h-7">
                        <a href="https://www.linkedin.com/in/hosein-ahadzadeh"><FontAwesomeIcon icon={faLinkedin} className="text-2xl min-[1850px]:text-3xl" color={theme === 'dark' ? "white" : "#595959"} /></a>
                    </span>
                    <span className="rounded-[3px] w-6 h-6 min-[1850px]:w-7 min-[1850px]:h-7">
                        <a href="https://github.com/Ahadzadeh4"><FontAwesomeIcon icon={faGithub} className="text-2xl min-[1850px]:text-3xl" color={theme === 'dark' ? "white" : "#595959"} /></a>
                    </span>
                    <span className="rounded-[3px] w-6 h-6 min-[1850px]:w-7 min-[1850px]:h-7">
                        <a href="https://www.instagram.com/hosein_frontend?utm_source=qr&igsh=MTZ1MzFtODFmaTVrdw=="><FontAwesomeIcon icon={faInstagram} className="text-2xl min-[1850px]:text-3xl" color={theme === 'dark' ? "white" : "#595959"} /></a>
                    </span>
                </div>
                <div className="flex justify-start ml-auto lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <div className="mr-3.5 items-center ">
                                <button>
                                    <FontAwesomeIcon icon={faBars} className="text-2xl" />
                                </button>
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            <Sidebar />
                            <div className="flex items-center  px-4 py-2 border-b">
                                <div className="ml-4">
                                    <ThemeIcon />
                                </div>

                            </div>

                        </SheetContent>
                    </Sheet>
                </div>
                <div className="lg:flex hidden justify-start items-center ml-auto ">
                    <div className="mr-7">
                        <ThemeIcon />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header