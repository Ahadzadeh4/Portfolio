import { Element, Link } from "react-scroll";
import person from "../assets/images/about/info.jfif"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

function About() {
  const ImgAbout: Record<string, string> = {
    person,
  }

  const {  data, isLoading, error  } = useQuery({
    queryKey: ["About"],
    queryFn: () =>
      axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-data/refs/heads/main/data.json")
        .then((res) => res.data)
  })

   if (isLoading) return null;
    if (error) return null;

  return (
    <Element name="About">
      <section className="
        h-screen
        snap-start
        snap-always
        flex
        items-center
        bg-(--MyColor-2)
        dark:bg-black
        text-black
        dark:text-white
        transition-darkmode
      ">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <img
            src={ImgAbout[data?.About?.[0]?.img]}
            loading="lazy"
            alt="عکس پروفایل حسین احدزاده"
            className="
              mx-auto
              mb-10
              sm:mb-8
              w-[250px]
              sm:w-72
              lg:w-80
              rounded-2xl
              border-4
              border-black
              dark:border-white
              shadow-xl
              transition-darkmode
            "
          />

          <div className="font-vazir opacity-90">
            <p dir="rtl" className="
        m-0 p-0 
            font-normal
            text-sm
            sm:text-base
            lg:text-lg
            leading-relaxed
            max-w-3xl
            mx-auto
            text-justify
    [text-align-last:center]
          ">
              {data?.About?.[0]?.content}
            </p>
            <span className="block mt-4 sm:mt-3 font-medium text-center text-sm
            sm:text-base
            lg:text-lg">
              {data?.About?.[0]?.description}
            </span>
          </div>



          <Link
            to="Contact"
            smooth
            duration={600}
            spy
            offset={-10}
            containerId="scroll-container"
          >
            <button className="
            cursor-pointer
            lg:mt-4
            md:mt-8
              mt-12
              px-8
              py-3
              text-sm
              sm:text-base
              md:text-base
              lg:text-lg
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
             transition-buttun
              shadow-lg
            "aria-label="رفتن به بخش ارتباط با من">
              ارتباط با من
            </button>
          </Link>

        </div>
      </section>
    </Element>
  );
}

export default About;