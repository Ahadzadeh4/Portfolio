import { Element } from "react-scroll";
import project1 from "@/assets/images/projects/projectimg.jpg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

function Projects() {
    const ImageProjects: Record<string, string> = {
        project1
    }
    const {  data, isLoading, error } = useQuery({
        queryKey: ["Projects"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-data/refs/heads/main/data.json")
                .then((res) => res.data)
    })

     if (isLoading) return null;
    if (error) return null;

    return (
        <Element name="Projects">
            <section className="2xl:h-screen min-h-screen snap-start bg-(--MyColor-2)  dark:bg-black
        transition-darkmode
        dark:text-white">
                <div className="max-w-7xl mx-auto px-4 py-20 font-vazir items-center justify-center my-auto ">
                    <div >
                        <h1 className="text-center lg:text-5xl sm:max-lg:text-3xl sm:max-lg:mb-3 p-3 lg:mb-3 font-bold test2:text-3xl test2:mb-2">{data?.projects?.[0]?.title}</h1>
                        <p className="text-center text-base md:text-lg xl:text-xl md:mb-7 test2:mb-3 sm:mb-6 max-w-4xl mx-auto ">
                            {data?.projects?.[0]?.description}
                        </p>
                    </div>
                    <div>
                        <div className="grid 2xl:grid-cols-3 test2:gap-7.5 test2:grid-cols-1 test2:[&>div:nth-child(odd)]:justify-self-center
    [&>div:nth-child(even)]:justify-self-center sm:gap-10 lg:max-2xl:gap-10 lg:max-2xl:grid-cols-2 lg:max-2xl:[&>div:nth-child(odd)]:justify-self-end
    lg:max-2xl:[&>div:nth-child(even)]:justify-self-start 2xl:gap-35 justify-center py-3">
                            {data?.projects?.[0]?.projects?.map((item: any) => (
                                <div key={item.id} className="sm:w-[420px] sm:h-[480px] bg-white dark:bg-white/10 
    shadow-xl rounded-xl px-4 py-5 flex justify-center items-center 
    transition-colors duration-500 ease-in-out">
                                    <div className="flex flex-col flex-nowrap gap-4 text-center justify-center items-center">
                                        <div className="m-2">
                                            <img src={ImageProjects[item.img]} loading="lazy" alt={`تصویر پروژه${item.title}`} className="w-[560px] rounded-xl shadow-sm" />
                                        </div>
                                        <h2 className="text-2xl font-bold ">{item.title}</h2>
                                        <p className="text-lg px-2 w-max-lg">{item.description}</p>
                                        <div className=" rounded-2xl bg-[#f2f4f7] transition-darkmode dark:bg-[#3c3c3cab]">
                                            <ul className="flex flex-row flex-nowrap gap-5 p-0.5 px-3">
                                                {item.technologies.map((item: any) => (
                                                    <li key={item.id} className="m-1 list-none ">{item.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <div>
                                                {item.published && (
                                                    <button className="
              
              px-10
              py-3
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              font-medium
              font-vazir
              rounded-xl
              border-2
              border-black
              dark:border-white
              bg-white
              dark:bg-transparent
              dark:text-white
              text-black
              hover:bg-black
              hover:text-white
              dark:hover:bg-white
              dark:hover:text-black
              transition-buttun
              shadow-lg
              inline-block
              cursor-pointer
              mx-1.5
            " aria-label="مشاهده پروژه" onClick={() => window.open(item.link, "_blank")}>
                                                        مشاهده
                                                    </button>
                                                )}
                                                {item.githubLink && (
                                                    <button className="
              
              px-10
              py-3
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              font-medium
              font-vazir
              rounded-xl
              border-2
              border-black
              dark:border-black
              bg-black
              dark:bg-white
              text-white
              dark:text-black
              hover:bg-transparent
              hover:text-black
              dark:hover:bg-black
              dark:hover:text-white
              transition-buttun
              shadow-lg
              inline-block
              cursor-pointer
              mx-1.5
            " aria-label="لینک گیت هاب پروژه" onClick={() => window.open(item.githubLink, "_blank")}>

                                                        گیت هاب


                                                    </button>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>


                    </div>
                </div>
            </section>

        </Element>
    )

}

export default Projects