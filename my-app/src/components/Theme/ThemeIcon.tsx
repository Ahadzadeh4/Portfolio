import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/Context/ThemeContext";



export function ThemeIcon() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div >
            <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="
                    cursor-pointer transition-transform duration-300
                    text-sm lg:text-xl min-[1850px]:text-2xl
                "
            >
                <FontAwesomeIcon
                    icon={theme === "light" ? faSun : faMoon}
                    className="transition-opacity duration-300"
                />
            </button>
        </div>
    )
}

