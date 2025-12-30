import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FontawesomeIcons } from "@/components/maps/FontawesomeMap";
import { useTheme } from "../Context/ThemeContext";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { ThemeIcon } from "./Theme/ThemeIcon";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"



function Header() {
    const { theme } = useTheme()
    const { data, isLoading, error } = useQuery({
        queryKey: ["Socialmedia"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-portfolio/main/data.json")
                .then((res) => res.data)
    })
    if (isLoading) return null;
    if (error) return null;

    return (
        <header className=" fixed w-full z-50">
            <div className=" border-b-2 border-black flex flex-row flex-nowrap justify-between">
                <div className="flex flex-row flex-nowrap  sm:max-lg:gap-3.5 gap-4 p-2 test:p-6 items-center justify-start h-10 sm:max-lg:h-8.5  dark:border-white">
                    {data?.Header?.[0]?.Socialmedia?.map((item: any) => (
                        <span key={item.id} className="rounded-[3px] w-6 h-6 test:w-7 test:h-7 transition-thememode">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.name}><FontAwesomeIcon icon={FontawesomeIcons[item.fontawesome]} className="text-2xl test:text-3xl" color={theme === 'dark' ? "white" : "#595959"} /></a>
                        </span>
                    ))}
                </div>
                <div className="flex justify-start ml-auto lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="mr-3.5 items-center flex " aria-label="Open menu">
                                <FontAwesomeIcon icon={FontawesomeIcons.faBars} className="text-2xl" />
                            </button>
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