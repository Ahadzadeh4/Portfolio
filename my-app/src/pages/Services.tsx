import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FontawesomeIcons } from "@/components/icons/FontawesomeMap";
import { Link } from "react-scroll"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"


function Services() {

    const { data, isLoading, error } = useQuery({
        queryKey: ["Services"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-data/refs/heads/main/data.json")
                .then((res) => res.data)
    })

    if (isLoading) return null;
    if (error) return null;
    return (
        <Element name="Services">
            <section className="min-h-screen lg:h-screen snap-start snap-always bg-(--MyColor-2)  dark:bg-black
         transition-all
        duration-700
        dark:text-white ">
                <div className="max-w-7xl mx-auto px-4 pt-12.5 font-vazir items-center justify-center my-auto">
                    <div >
                        <h1 className="text-center lg:text-5xl sm:max-lg:text-4xl p-2 sm:mb-1.5 font-bold test2:text-3xl test2:mb-1">{data?.Services?.[0]?.title}</h1>
                        <p className="text-center text-base md:text-lg xl:text-xl md:mb-4 test2:mb-2 sm:mb-6 max-w-4xl mx-auto ">
                            {data?.Services?.[0]?.description}
                        </p>
                    </div>
                    <div>
                        <div >
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 test2:grid-cols-1 gap-7 justify-center py-1 md:[&>div:nth-child(odd)]:justify-self-end
    md:[&>div:nth-child(even)]:justify-self-start lg:[&>div:nth-child(odd)]:justify-self-center lg:[&>div:nth-child(even)]:justify-self-center test2:overflow-auto test2:h-[415px] lg:h-auto lg:overflow-hidden test2:bg-gray-100 dark:bg-black lg:bg-(--MyColor-2)  transition-all
        duration-700">
                            {data?.Services?.[0]?.services.map((item: any) => (
                                <div key={item.id} className="w-[300px] dark:bg-white/6 h-[340px] overflow-hidden transition-darkmode shadow-lg rounded-xl px-3 py-1 justify-center items-center bg-white justify-self-center">
                                    <div className="flex flex-col flex-nowrap gap-1.5 text-center justify-center items-center ">
                                        <div className="m-4">
                                            <FontAwesomeIcon aria-label={item.title} icon={FontawesomeIcons[item.fontawesome]} className={`text-7xl ${item.FontawesomeColor} `}></FontAwesomeIcon>
                                        </div>
                                        <h2 dir="rtl" className="text-2xl font-bold ">{item.title}</h2>
                                        <p dir="rtl" className="text-lg">{item.description}</p>
                                        <ul className=" flex flex-col gap-1 list-none mt-1">
                                            {item.advantages.map((adv: any) => (

                                                <li className="mb-0.5 flex items-start gap-3 justify-center" dir="rtl" key={adv.id}>
                                                    <span className="text-green-500">✔</span>
                                                    <span className="text-base">{adv.text}</span>

                                                </li>
                                            ))}


                                        </ul>
                                    </div>
                                </div>

                            ))}

                        </div>
                        </div>
                        
                        <article >
                            <div className="py-0.5 pt-2.5 ">
                                <div className="flex flex-col flex-nowrap justify-center text-center">
                                    <div className="flex items-center justify-center">
                                        <span className="flex-1 h-px bg-gray-200"></span>
                                        <h3 className="text-2xl font-bold whitespace-nowrap mx-10">چرا من؟</h3>
                                        <span className="flex-1 h-px bg-gray-200"></span>
                                    </div>
                                    <div className="test2:text-center test2:mx-auto lg:mx-0 test2:py-3 lg:py-0.5">
                                        <ul className="grid lg:grid-cols-3 md:grid-cols-2 test2:grid-cols-1 gap-2 py-1.35 lg:justify-items-center">
                                            {data?.Services?.[0]?.WhyMe.map((item: any) => (
                                                <li className="whitespace-nowrap flex items-start" key={item.id} dir="rtl">
                                                    <span className="text-green-500 ml-3">✔</span>
                                                    <span className="text-xl " dir="rtl">{item.text}</span>

                                                </li>
                                            ))}


                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="">
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
              mt-3
              px-6
              py-2
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
