import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

function Header() {
    return (
        <header>
            <div className="flex flex-row flex-nowrap gap-5 p-2 border-b-2 border-(--MyCB) ">
                <span className="rounded-[3px] w-6 h-6">
                    <a href="https://www.linkedin.com/in/hosein-ahadzadeh"><FontAwesomeIcon icon={faLinkedin} size="xl" color="#595959" /></a>
                </span>
                <span className="rounded-[3px] w-6 h-6">
                    <a href="https://github.com/Ahadzadeh4"><FontAwesomeIcon icon={faGithub} size="xl" color="#595959" /></a>
                </span>
                <span className="rounded-[3px] w-6 h-6">
                    <a href="https://www.instagram.com/hosein_frontend?utm_source=qr&igsh=MTZ1MzFtODFmaTVrdw=="><FontAwesomeIcon icon={faInstagram} size="xl" color="#595959" /></a>
                </span>
            </div>
        </header>
    )
}

export default Header