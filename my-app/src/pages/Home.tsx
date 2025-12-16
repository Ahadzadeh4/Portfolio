import { Element } from "react-scroll"
import Header from "../components/Header"

function Home() {

    return (
        <Element name="Home">
            <section className="bg-(--MyColor-2) h-lvh ">
                <Header />
            </section>
        </Element>
    )
}

export default Home