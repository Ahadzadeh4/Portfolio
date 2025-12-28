import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import clsx from "clsx";
import { useState, useEffect } from "react";

function ContactForm() {
    interface FormData {
        name: string;
        email: string;
        content: string;
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
    const [Error, SetError] = useState<boolean>(false)
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [bounce, setBounce] = useState<boolean>(false)
    const [isloading, setIsloading] = useState<boolean>(false)

    useEffect(() => {
        if (!showMessage) return;


        setBounce(true);


        const bounceTimer = setTimeout(() => {
            setBounce(false);
        }, 350);


        const messageTimer = setTimeout(() => {
            setShowMessage(false);
            SetError(false);
        }, 4000);

        return () => {
            clearTimeout(bounceTimer);
            clearTimeout(messageTimer);
        };
    }, [showMessage]);

    const onSubmitForm = (data: FormData) => {
        setIsloading(true)
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: data.name,
                email: data.email,
                content: data.content
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsloading(false)
                setShowMessage(true)
                SetError(false)
                reset()
            })
            .catch(() => {
                setIsloading(false)
                SetError(true)
                setShowMessage(false)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-4 max-w-4xl" dir="rtl">
            <div className="flex flex-row flex-nowrap gap-4">
                <div className="flex-1">
                    <input type="text" className={clsx('border-2 flex-1 w-full border-(--MyColor-2) outline-none shadow-lg p-4  rounded-xl text-xl', errors.name && 'bg-red-300  border-red-700')} placeholder="نام" {...register("name", { required: "نام الزامی است" })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="flex-1">
                    <input type="text" className={clsx('border-2 flex-1 w-full  border-(--MyColor-2) outline-none shadow-lg p-4  rounded-xl text-xl', errors.email && 'bg-red-300 border-red-700')} placeholder="ایمیل" {...register("email", {
                        required: "ایمیل الزامی است",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "ایمیل معتبر نیست",
                        }
                    })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
            </div>
            <div>
                <textarea id="content" className={clsx(' w-full h-[200px] resize-none border-2 border-(--MyColor-2) outline-none shadow-xl p-4  rounded-xl text-xl', errors.content && 'bg-red-300 border-red-700')} placeholder="پیام" {...register("content", { required: "پیام را وارد کنید" })} ></textarea>
                {errors.content && <p>{errors.content.message}</p>}
            </div>
            <button type="submit" className="
            group
            w-fit
              mx-auto
              px-5
              py-3
              h-15
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
              cursor-pointer
            ">

                {isloading ? (
                    <div className="w-8 h-8 text-center border-4 group-hover:border-gray-300 group-hover:border-t-white/40 border-white/40 border-t-gray-300 dark:border-t-white/40 dark:border-gray-300 rounded-full animate-spin"></div>
                ) : (
                    <p className="text-center">ارسال پیام</p>
                )}
            </button>
            <div className="p-1 mt-1 text-center min-h-10">
                {showMessage &&
                    <p className={`${Error ? "text-red-500" : "text-green-500"} font-bold text-xl ${bounce ? "animate-bounce" : ""}`} style={{ animationDuration: "0.2s" }}>

                        {Error ? "خطا در ارسال پیام❌" : "ارسال پیام با موفقیت انجام شد✔"}
                    </p>
                }
            </div>
        </form>
    )
}

export default ContactForm