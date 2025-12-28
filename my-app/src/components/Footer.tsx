import { useQuery } from "@tanstack/react-query";
import axios from "axios"

function Footer() {
    const { data } = useQuery({
        queryKey: ["Skills"],
        queryFn: () =>
            axios.get("https://raw.githubusercontent.com/Ahadzadeh4/my-portfolio/main/data.json")
                .then((res) => res.data)
    })

    return (
        <footer className=" w-full lg:h-10 box-border bg-(--MyColor-2) font-inter font-normal dark:bg-black dark:text-white transition-all duration-1000">
            <div className="grid  items-center justify-center border-t-2 border-black p-1 dark:border-white ">
                <div className="justify-self-center lg:text-xl whitespace-nowrap  min-[300px]:text-sm items-center">
                    {/* © 2025 Hosein Ahadzadeh. All rights reserved */}
                    {data?.Footer?.[0]?.text}
                    </div>
            </div>
        </footer>
    )
}

export default Footer;









 