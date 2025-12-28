import { Element } from "react-scroll";
import { useTheme } from "@/Context/ThemeContext";
import Footer from "@/components/Footer";
import ContactForm from "@/components/form/ContactForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { Telegram , WhatsApp , Envelope } from "@/components/maps/SvgMap";

function Contact() {
    const SvgContact: Record<string, any> = {
        Telegram,
        WhatsApp,
        Envelope,
    }
    const { theme } = useTheme()
    const { data } = useQuery({
        queryKey: ["Contact"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-portfolio/main/data.json")
                .then((res) => res.data)
    })
    return (
        <Element name="Contact">
            <section className="flex flex-col 2xl:h-screen min-h-screen  snap-start snap-always bg-(--MyColor-2)  dark:bg-black
         transition-all
        duration-700
        dark:text-white">
                <div className=" flex lg:block flex-1 flex-col max-w-7xl mx-auto px-4 lg:mt-20 mt-0 font-vazir justify-center grow ">
                    <div >
                        <h1 className="text-center lg:text-5xl sm:max-lg:text-3xl sm:max-lg:mb-3 p-3 lg:mb-3 font-bold min-[300px]:text-3xl min-[300px]:mb-2">{data?.Contact?.[0]?.title}</h1>
                        <p className="text-center text-base md:text-lg xl:text-xl md:mb-7 min-[300px]:mb-3 sm:mb-6 max-w-4xl mx-auto ">
                            {data?.Contact?.[0]?.description}
                        </p>
                    </div>
                    <div>
                        <div>
                            <div dir="rtl" className="flex flex-row justify-center gap-15">
                                {data?.Contact?.[0]?.socialmedia_contact?.map((item: any) => {
                                    const SvgIcon = SvgContact[item.svg];
                                    return (
                                        <div key={item.id}>
                                            <a href="#">
                                                {SvgIcon && <SvgIcon />}
                                            </a>

                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                        <div className="mt-12">
                            <div className="p-2">
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