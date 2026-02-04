import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontawesomeIcons } from "@/components/icons/FontawesomeMap";
import { useTheme } from "@/Context/ThemeContext";



export function ThemeIcon() {
    const { theme, toggleTheme } = useTheme();
    return (
            <button
            type="button"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="
                    cursor-pointer transition-darkmode
                    text-sm lg:text-xl test:text-2xl
                "
            >
                <FontAwesomeIcon
                    icon={theme === "light" ? FontawesomeIcons.faSun : FontawesomeIcons.faMoon}
                    className="transition-opacity duration-700"
                />
            </button>
    )
}

