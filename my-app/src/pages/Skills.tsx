import { Element } from "react-scroll";
import { HTML5, CSS, JavaScript, Tailwind, Bootstrap, React, TypeScript, Vite, Npm, Git } from "../components/maps/SvgMap"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

function Skills() {
    const SvgSkills: Record<string, any> = {
        HTML5,
        CSS,
        JavaScript,
        Tailwind,
        Bootstrap,
        React,
        TypeScript,
        Vite,
        Npm,
        Git,
    }

    const { data } = useQuery({
        queryKey: ["Skills"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-portfolio/main/data.json")
                .then((res) => res.data)
    })
    return (
        <Element name="Skills">
            <section className="min-h-screen snap-start bg-(--MyColor-2)  dark:bg-black
         transition-all
         snap-always
        duration-700
        dark:text-white">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div>
                        <h1 className="font-vazir text-center lg:text-5xl sm:max-lg:text-3xl sm:max-lg:mb-3 p-3 lg:mb-6 font-bold min-[300px]:text-3xl min-[300px]:mb-2 ">{data?.Skills?.[0]?.title}</h1>
                        <p className="font-vazir text-center text-base md:text-lg xl:text-xl mb-14 min-[300px]:mb-10 max-w-4xl mx-auto ">
                            {data?.Skills?.[0]?.description}
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6 min-[300px]:gap-1 sm:max-lg:gap-3">
                        {data?.Skills?.[0]?.skills.map((item: any) => {
                            const SvgIcon = SvgSkills[item.svg];
                            return (
                                <div key={item.id} className="m-3 p-3  border-2 border-black rounded-sm shadow-2xl skill-card ">
                                    <div className="flex flex-col flext-nowrap gap-4">
                                        {SvgIcon && <SvgIcon />}
                                        <h3 className="font-bold font-inter text-xl text-center">{item.title}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default Skills;
