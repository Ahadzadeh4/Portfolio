import { Element } from "react-scroll"
import { Link } from "react-scroll"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"



function Home() {
     const { data } = useQuery({
        queryKey: ["Hero"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-portfolio/main/data.json")
                .then((res) => res.data)
    })

    return (
        <Element name="Home">
            <section className="flex flex-col bg-(--MyColor-2) snap-start snap-always  
            h-screen min-[300px]:text-sm w-full dark:bg-black dark:text-white transition-all duration-1000 min-[1850px]:text-xl">
                <div className="flex flex-1 justify-center items-center">
                    <div >
                        <main className="text-center pb-[45px] sm:max-lg:pb-[30px] font-vazir font-normal sm:max-lg:text-sm min-[300px]:px-4">
                            <h1 className="text-6xl min-[1850px]:text-7xl sm:max-lg:text-5xl p-3 font-bold min-[300px]:text-5xl">{data?.Hero?.[0]?.name}</h1>
                            <p className="text-(--MyCB) pb-2 sm:max-lg:pb-1.5 dark:text-white">{data?.Hero?.[0]?.litle_description}</p>
                            <p className="text-(--MyCB) pb-8 sm:max-lg:pb-6 dark:text-white">{data?.Hero?.[0]?.big_description}</p>
                             <Link to="About" smooth duration={600} spy offset={-10} containerId="scroll-container">
                              <button className="bg-black text-center text-white cursor-pointer dark:border-white p-4 sm:max-lg:p-3 inline-block border-2 border-black rounded-xl hover:bg-(--MyColor-2) hover:text-black transition duration-500 text-2xl sm:max-lg:text-xl shadow-xl/20 min-[1850px]:text-3xl">درباره من</button>
                             </Link>
                        </main>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Home;

