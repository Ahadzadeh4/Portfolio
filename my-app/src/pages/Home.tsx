import { Element } from "react-scroll"
import { Link } from "react-scroll"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"



function Home() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["Hero"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-data/refs/heads/main/data.json")
                .then((res) => res.data)
    })
    if (isLoading) return null;
    if (error) return null;

    return (
        <Element name="Home">
            <section className="flex flex-col bg-(--MyColor-2) snap-start snap-always  
            lg:h-screen min-h-screen test2:text-sm w-full dark:bg-black dark:text-white transition-all duration-1000 test:text-xl">
                <main className="flex flex-1 justify-center items-center">
                    <div >
                        <div className="text-center pb-[45px] sm:max-lg:pb-[30px] font-vazir font-normal sm:max-lg:text-sm test2:px-4">
                            <h1 className=" test:text-8xl sm:text-6xl p-3 font-bold test2:text-5xl whitespace-nowrap">{data?.Hero?.[0]?.name}</h1>
                            <p className="text-(--MyCB) pb-2 sm:max-lg:pb-1.5 text-lg dark:text-white font-inter">{data?.Hero?.[0]?.litle_description}</p>
                            <p className="text-(--MyCB) pb-6 test2:max-lg:pb-5 dark:text-white text-sm lg:text-base">{data?.Hero?.[0]?.big_description}</p>
                            <Link to="About" smooth duration={600} spy offset={-10} containerId="scroll-container">
                                <button aria-label="رفتن به بخش درباره من" className="bg-black text-center text-white cursor-pointer dark:border-white test2:p-2.5 sm:max-lg:p-3 inline-block border-2 border-black rounded-xl hover:bg-(--MyColor-2) hover:text-black transition-buttun text-2xl sm:max-lg:text-xl shadow-xl/20 test:text-3xl">درباره من</button>
                            </Link>
                        </div>
                    </div>
                </main>
            </section>
        </Element>
    )
}

export default Home;

