import { Element } from "react-scroll";
import project1 from "../assets/images/portfolio.png";

function Projects() {
    return (
        <Element name="Projects">
            <section className="2xl:h-screen min-h-screen snap-start snap-always bg-(--MyColor-2)  dark:bg-black
         transition-all
        duration-700
        dark:text-white">
                <div className="max-w-7xl mx-auto px-4 py-20 font-vazir items-center justify-center my-auto ">
                    <div >
                        <h1 className="text-center lg:text-5xl sm:max-lg:text-3xl sm:max-lg:mb-3 p-3 lg:mb-3 font-bold min-[300px]:text-3xl min-[300px]:mb-2">پروژه ها</h1>
                        <p className="text-center text-base md:text-lg xl:text-xl md:mb-7 min-[300px]:mb-3 sm:mb-6 max-w-4xl mx-auto ">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                            طراحان گرافیک است. در این صورت می‌توان امید داشت که تمام دشواری‌های
                            موجود در ارائه راهکارها به پایان برسد.
                        </p>
                    </div>
                    <div>
                        <div className="grid 2xl:grid-cols-3 min-[300px]:gap-7.5 min-[300px]:grid-cols-1 min-[300px]:[&>div:nth-child(odd)]:justify-self-center
    [&>div:nth-child(even)]:justify-self-center sm:gap-10 lg:max-2xl:gap-10 lg:max-2xl:grid-cols-2 lg:max-2xl:[&>div:nth-child(odd)]:justify-self-end
    lg:max-2xl:[&>div:nth-child(even)]:justify-self-start 2xl:gap-35 justify-center py-3">
                            <div className="sm:w-[420px] sm:h-[480px] min-[300px]:w-[350px] min-[300px]:h-[470px] dark:bg-white/6  transition-all
                                    duration-700  shadow-xl rounded-xl px-4 py-5 justify-center items-center bg-white ">
                                <div className="flex flex-col flex-nowrap gap-4 text-center justify-center items-center">
                                    <div className="m-2">
                                        <img src={project1} alt="my projects" className="w-[560px] rounded-xl shadow-sm" />
                                    </div>
                                    <h2 className="text-2xl font-bold ">سایت شخصی</h2>
                                    <p className="text-lg px-2 w-max-lg">طراحی وبسایت شخصی برای نشان دادن مهارت ها و برندم و خدمات و ارتباط با من</p>
                                    <div className=" rounded-2xl bg-[#f2f4f7] dark:bg-[#3c3c3cab]">
                                        <div className="flex flex-row flex-nowrap gap-5 p-0.5 px-3">
                                            <li className="m-1 list-none">React</li>
                                            <li className="m-1">TypeScript</li>
                                            <li className="m-1">Tailwind</li>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
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
              transition-all
              duration-300
              shadow-lg
              inline-block
              mx-1.5
            ">
                                                مشاهده
                                            </button>
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
              transition-all
              duration-300
              shadow-lg
              inline-block
              mx-1.5
            ">
                                                گیت هاب
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-[420px] sm:h-[480px] min-[300px]:w-[350px] min-[300px]:h-[470px] dark:bg-white/6  transition-all
                                    duration-700  shadow-xl rounded-xl px-4 py-5 justify-center items-center bg-white ">
                                <div className="flex flex-col flex-nowrap gap-4 text-center justify-center items-center">
                                    <div className="m-2">
                                        <img src={project1} alt="my projects" className="w-[560px] rounded-xl shadow-sm" />
                                    </div>
                                    <h2 className="text-2xl font-bold ">سایت شخصی</h2>
                                    <p className="text-lg px-2 w-max-lg">طراحی وبسایت شخصی برای نشان دادن مهارت ها و برندم و خدمات و ارتباط با من</p>
                                    <div className=" rounded-2xl bg-[#f2f4f7] dark:bg-[#3c3c3cab]">
                                        <div className="flex flex-row flex-nowrap gap-5 p-0.5 px-3">
                                            <li className="m-1 list-none">React</li>
                                            <li className="m-1">TypeScript</li>
                                            <li className="m-1">Tailwind</li>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
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
              transition-all
              duration-300
              shadow-lg
              inline-block
              mx-1.5
            ">
                                                مشاهده
                                            </button>
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
              transition-all
              duration-300
              shadow-lg
              inline-block
              mx-1.5
            ">
                                                گیت هاب
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-[420px] sm:h-[480px] min-[300px]:w-[350px] min-[300px]:h-[470px] dark:bg-white/6  transition-all
                                    duration-700  shadow-xl rounded-xl px-4 py-5 justify-center items-center bg-white ">
                                <div className="flex flex-col flex-nowrap gap-4 text-center justify-center items-center">
                                    <div className="m-2">
                                        <img src={project1} alt="my projects" className="w-[560px] rounded-xl shadow-sm" />
                                    </div>
                                    <h2 className="text-2xl font-bold ">سایت شخصی</h2>
                                    <p className="text-lg px-2 w-max-lg">طراحی وبسایت شخصی برای نشان دادن مهارت ها و برندم و خدمات و ارتباط با من</p>
                                    <div className=" rounded-2xl bg-[#f2f4f7] dark:bg-[#3c3c3cab]">
                                        <div className="flex flex-row flex-nowrap gap-5 p-0.5 px-3">
                                            <li className="m-1 list-none">React</li>
                                            <li className="m-1">TypeScript</li>
                                            <li className="m-1">Tailwind</li>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
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
              transition-all
              duration-300
              shadow-lg
              inline-block
              mx-1.5
            ">
                                                مشاهده
                                            </button>
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
              transition-all
              duration-300
              shadow-lg
              inline-block
              mx-1.5
            ">
                                                گیت هاب
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </Element>
    )

}

export default Projects