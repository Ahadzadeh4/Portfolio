import { Element } from "react-scroll";
import { HTML5, CSS, JavaScript, Tailwind, Bootstrap, React, TypeScript, Vite, Npm, Git } from "../components/icons/SvgMap"
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

    const {  data, isLoading, error } = useQuery({
        queryKey: ["Skills"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-data/refs/heads/main/data.json")
                .then((res) => res.data)
    })

     if (isLoading) return null;
    if (error) return null;
    return (
        <Element name="Skills">
            <section className="min-h-screen sm:h-screen snap-start bg-(--MyColor-2)  dark:bg-black
        transition-darkmode
         snap-always
        dark:text-white">
                <div className=" mx-auto px-4 py-20 ">
                    <div>
                        <h1 className="font-vazir text-center lg:text-5xl sm:max-lg:text-3xl sm:max-lg:mb-3 p-3 lg:mb-6 font-bold test2:text-3xl test2:mb-2 ">{data?.Skills?.[0]?.title}</h1>
                        <p className="font-vazir text-center text-base md:text-lg xl:text-xl mb-14 test2:mb-10 max-w-4xl mx-auto ">
                            {data?.Skills?.[0]?.description}
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 lg:grid-cols-5 lg:gap-2.5 test2:gap-1 sm:max-lg:gap-1 test2:overflow-auto test2:h-[350px] lg:h-auto test2:bg-gray-100 lg:bg-(--MyColor-2) lg:overflow-hidden  dark:bg-black transition-darkmode">
                        {data?.Skills?.[0]?.skills.map((item: any) => {
                            const SvgIcon = SvgSkills[item.svg];
                            return (
                                <div key={item.id} className="m-2 p-2 border-2 border-black rounded-sm shadow-2xl skill-card ">
                                    <div className="flex flex-col flex-nowrap gap-4">
                                        {SvgIcon && <SvgIcon aria-label={item.title} />}
                                        <h3 className="font-bold font-inter text-xl text-center transition-colors duration-300">{item.title}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                    
                </div>
            </section>
        </Element>
    );
}

export default Skills;
