import { useForm } from "react-hook-form"
import clsx from "clsx";

function ContactForm() {
    interface FormData {
        name: string;
        email: string;
        content: string;
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmitForm = (data: FormData) => {
        console.log(data)
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
            w-fit
              mx-auto
              px-5
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
                ارسال پیام
            </button>
        </form>
    )
}

export default ContactForm