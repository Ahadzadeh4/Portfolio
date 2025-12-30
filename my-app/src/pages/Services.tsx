import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FontawesomeIcons } from "@/components/icons/FontawesomeMap";
import { Link } from "react-scroll"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"


function Services() {

    const {  data, isLoading, error } = useQuery({
        queryKey: ["Services"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-portfolio/main/data.json")
                .then((res) => res.data)
    })

     if (isLoading) return null;
    if (error) return null;
    return (
        <Element name="Services">
            <section className="lg:h-screen min-h-screen snap-start snap-always bg-(--MyColor-2)  dark:bg-black
         transition-all
        duration-700
        dark:text-white ">
                <div className="max-w-7xl mx-auto px-4 py-20 font-vazir items-center justify-center my-auto">
                    <div >
                        <h1 className="text-center lg:text-5xl sm:max-lg:text-3xl sm:max-lg:mb-3 p-3 lg:mb-3 font-bold test2:text-3xl test2:mb-2">{data?.Services?.[0]?.title}</h1>
                        <p className="text-center text-base md:text-lg xl:text-xl md:mb-7 test2:mb-3 sm:mb-6 max-w-4xl mx-auto ">
                            {data?.Services?.[0]?.description}
                        </p>
                    </div>
                    <div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 test2:grid-cols-1 gap-7 justify-center py-3 md:[&>div:nth-child(odd)]:justify-self-end
    md:[&>div:nth-child(even)]:justify-self-start lg:[&>div:nth-child(odd)]:justify-self-center lg:[&>div:nth-child(even)]:justify-self-center">
                            {data?.Services?.[0]?.services.map((item: any) => (
                                <div key={item.id} className="w-[320px] dark:bg-white/6 h-[392px] .transition-darkmode shadow-xl rounded-xl px-1 py-4 justify-center items-center bg-white justify-self-center">
                                    <div className="flex flex-col flex-nowrap gap-2 text-center justify-center items-center">
                                        <div className="m-4">
                                            <FontAwesomeIcon aria-label={item.title}  icon={FontawesomeIcons[item.fontawesome]} className="text-7xl text-blue-600"></FontAwesomeIcon>
                                        </div>
                                        <h2 className="text-2xl font-bold ">{item.title}</h2>
                                        <p className="text-lg">{item.description}</p>
                                        <ul>
                                            {item.advantages.map((adv: any) => (

                                                <li className="mb-5" key={adv.id}>
                                                    <span className="text-base">{adv.text}</span>
                                                    <span className="text-green-500 ml-3">✔</span>
                                                </li>
                                            ))}


                                        </ul>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <article >
                            <div className="py-1 pt-3 ">
                                <div className="flex flex-col flex-nowrap justify-center text-center">
                                    <div className="flex items-center justify-center">
                                        <span className="flex-1 h-px bg-gray-200"></span>
                                        <h3 className="text-2xl font-bold whitespace-nowrap mx-10">چرا من؟</h3>
                                        <span className="flex-1 h-px bg-gray-200"></span>
                                    </div>

                                    <ul className="grid sm:grid-cols-3 test2:grid-cols-1 gap-3 py-3 justify-center">
                                        {data?.Services?.[0]?.WhyMe.map((item: any) => (
                                            <li className="whitespace-nowrap" key={item.id}>
                                                <span className="text-xl ">{item.text}</span>
                                                <span className="text-green-500 ml-3">✔</span>
                                            </li>
                                        ))}


                                    </ul>
                                </div>
                            </div>
                            <div className="py-1">
                                <div className="flex flex-col flex-nowrap justify-center text-center">
                                    <div>
                                        <h3 className="text-2xl font-bold">آماده ای پروژه رو شروع کنیم؟</h3>
                                    </div>
                                    <div>
                                        <Link
                                            to="Contact"
                                            smooth
                                            duration={600}
                                            spy
                                            offset={-10}
                                            containerId="scroll-container">
                                            <button className="
                                            cursor-pointer
              mt-4
              px-8
              py-3
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              font-medium
              rounded-xl
              border-2
              border-black
              dark:border-white
              bg-black
              dark:bg-transparent
              text-white
              hover:bg-transparent
              hover:text-black
              dark:hover:bg-white
              dark:hover:text-black
              transition-all
              duration-300
              shadow-lg
            ">
                                                ارتباط با من
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Services
