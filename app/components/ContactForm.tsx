import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    nome: string;
    email: string;
    mensagem: string;
}

const OutlineButton = () => {
    return (
        <button
        className="group relative p-5 bg-[#525252] font-semibold border-2 border-[#576596] text-[#a3b2e4] transition-colors duration-[400ms] font-jet hover:text-white">
            <span>Enviar mensagem</span>
            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#FBC688] transition-all duration-100 group-hover:w-full" />
            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#F4A5D8] transition-all delay-100 duration-100 group-hover:h-full" />
            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#C587F9] transition-all delay-200 duration-100 group-hover:w-full" />
            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#ffd900] transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form className="flex flex-col w-1/2 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input className="p-3 px-4 rounded-lg placeholder-gray-400 text-[#313D6A]" placeholder="Nome" {...register("nome", {required: true})}/>
            {errors.nome && <span className="text-red-300 mb-3">Insira seu nome.</span>}
            <input className="p-3 px-4 rounded-lg placeholder-gray-400 text-[#313D6A]" placeholder="E-mail" {...register("email", {required: true})}/>
            {errors.nome && <span className="text-red-300 mb-3">Insira seu e-mail.</span>}
            <textarea className="p-3 px-4 resize-none h-40 rounded-lg placeholder-gray-400 text-[#313D6A]" placeholder="Sua mensagem" {...register("mensagem", {required: true})}/>
            {errors.nome && <span className="text-red-300 mb-5">Por favor, escreva sua mensagem.</span>}
            <OutlineButton/>
        </form>
    )
}