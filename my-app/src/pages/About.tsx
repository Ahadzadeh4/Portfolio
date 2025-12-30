import { Element, Link } from "react-scroll";
import PersonallImg from "../assets/images/about/person.jpg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

function About() {
  const ImgAbout: Record<string, string> = {
    PersonallImg,
  }

  const {  data, isLoading, error  } = useQuery({
    queryKey: ["About"],
    queryFn: () =>
      axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-portfolio/main/data.json")
        .then((res) => res.data)
  })

   if (isLoading) return null;
    if (error) return null;

  return (
    <Element name="About">
      <section className="
        min-h-screen
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
            alt="عکس پروفایل حسین احدزاده"
            className="
              mx-auto
              mb-10
              w-60
              sm:w-72
              md:w-80
              lg:w-96
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
            md:text-lg
            lg:text-xl
            leading-relaxed
            max-w-3xl
            mx-auto
            
            text-justify
    [text-align-last:right]
          ">
              {data?.About?.[0]?.content}


            </p>
            <span className="block mt-4 font-medium text-center text-sm
            sm:text-base
            md:text-lg
            lg:text-xl">
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
              mt-12
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