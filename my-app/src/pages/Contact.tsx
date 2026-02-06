import { Element } from "react-scroll";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/form/ContactForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import type { ComponentType, SVGProps } from "react";
import { Telegram, WhatsApp, Envelope } from "@/components/icons/SvgMap";

function Contact() {
    const SvgContact: Record<
        string,
        ComponentType<SVGProps<SVGSVGElement>>
    > = {
        Telegram,
        WhatsApp,
        Envelope,
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ["Contact"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-data/refs/heads/main/data.json")
                .then((res) => res.data)
    })

    if (isLoading) return null;
    if (error) return null;
    return (
        <Element name="Contact">
            <section className="flex flex-col lg:h-screen min-h-screen snap-start snap-always bg-(--MyColor-2)  dark:bg-black
        transition-darkmode
        dark:text-white">
                <div className=" flex lg:block flex-1 flex-col max-w-7xl mx-auto px-4 lg:mt-13 mt-0 font-vazir justify-center grow ">
                    <div className=" test2:mb-3  max-w-4xl mx-auto" >
                        <h1 className="text-center lg:text-5xl sm:max-lg:text-3xl sm:max-lg:mb-3 p-3 lg:mb-3 font-bold test2:text-3xl test2:mb-2">{data?.Contact?.[0]?.title}</h1>
                        <p className="text-center text-base md:text-lg xl:text-xl md:mb-5.5 test2:mb-2.5  max-w-4xl mx-auto ">
                            {data?.Contact?.[0]?.description}
                        </p>
                        <p className="text-center text-base md:text-lg xl:text-xl " dir="rtl">
                            ایمیل من : hoseinahadzadeh0@gmail.com
                        </p>
                    </div>
                    <div>
                        <div>
                            <div dir="rtl" className="flex flex-row justify-center gap-15" aria-label="راه‌های ارتباطی">
                                {data?.Contact?.[0]?.socialmedia_contact?.map((item: any) => {
                                    const SvgIcon = SvgContact[item.svg];
                                    return (
                                        <li className="list-none flex flex-col flex-nowrap gap-1.5" key={item.id}>
                                            <a href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={item.title}
                                            >
                                                {SvgIcon && <SvgIcon />}
                                            </a>
                                            <h2 className="flex justify-center font-inter text-base text-center">{item.title}</h2>
                                        </li>
                                    )
                                })}


                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="p-1">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </Element>
    )
}

export default Contact