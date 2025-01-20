import { motion, useSpring, useTransform } from "motion/react";
import React, { MouseEventHandler } from "react";
import Image from "next/image";

const cardScale = 1.02;
const sheenSize = 500;

const Card = () => {

    const xPcnt = useSpring(0, {bounce: 0});
    const yPcnt = useSpring(0, {bounce: 0});
    const mouseX = useSpring(0, {bounce: 0});
    const mouseY = useSpring(0, {bounce: 0});
    const scale = useSpring(1, {bounce: 0});

    const rotateX = useTransform(yPcnt, [-0.5, 0.5], ["-15", "15deg"]);
    const rotateY = useTransform(xPcnt, [-0.5, 0.5], ["-15deg", "15deg"]);

    const sheenX = useTransform(() => mouseX.get() - sheenSize / 2);
    const sheenY = useTransform(() => mouseY.get() - sheenSize / 2);

    const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
        const { width, height, left, top } =
        e.currentTarget.getBoundingClientRect();

        const currentMouseX = e.clientX - left;
        const currentMouseY = e.clientY - top;

        return {
            currentMouseX,
            currentMouseY,
            containerWidth: width,
            containerHeight: height,
        }
    }
    
    const handleMouseMove: MouseEventHandler = (e) => {
        const { currentMouseX, currentMouseY, containerWidth, containerHeight } = 
        getMousePosition(e);

        xPcnt.set(currentMouseX / containerWidth - 0.5)
        yPcnt.set(currentMouseY / containerHeight - 0.5)

        mouseX.set(currentMouseX)
        mouseY.set(currentMouseY)
    }

    const handleMouseEnter: MouseEventHandler = () => {
        scale.set(cardScale)
    }

    const handleMouseLeave: MouseEventHandler = () => {
        scale.set(1);
        xPcnt.set(0);
        yPcnt.set(0);
    }

    return (
        <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
            scale
        }}
        className={`w-full bg-[#CCE052] text-[#303030] p-6 lg:p-10 rounded-xl overflow-hidden group`}>
            <motion.div className="absolute z-10 opacity-0 rounded-full blur-md group-hover:opacity-25 transition-opacity duration-200"
            style={{
                background: "radial-gradient(white, #CCE052 80%)",
                left: sheenX,
                top: sheenY,
                height: sheenSize,
                width: sheenSize,
            }}/>
            <div className="flex justify-between font-semibold">
                <span>2025</span>
                <span>Web & Mobile (Android & iOS)</span>   
            </div>
            <div className="h-[1px] bg-black opacity-20 rounded-full mt-2 mb-2 z-30"/>
            <div className="flex flex-col justify-between p-5 lg:py-8 xl:p-10">
                <div className="flex flex-row">
                    <div className="flex justify-center w-full flex-col">
                        <div className="flex w-full items-center md:items-start flex-col">
                            <Image className="mb-5 z-30" draggable={false} src={"/agendex-logo.png"} alt="" height={50} width={200}/>
                            <span className="w-full text-center md:text-left xl:w-3/4 z-30">Realize agendamentos direto do seu celular. A qualquer momento e em qualquer lugar.</span>
                        </div>
                        <div className="flex max-w-[600px] justify-between mt-8">
                            <div className="flex flex-col md:w-1/2 xl:w-2/2">
                                <span className="font-extrabold text-xl z-30">+25 mil</span>
                                <span className="z-30">Usuários ativos</span>
                            </div>
                            <div className="flex flex-col md:w-1/2 xl:w-auto">
                                <span className="font-extrabold text-xl z-30">95%</span>
                                <span className="z-30 truncate">Aprovação de usuários</span>
                            </div>
                        </div>

                        <motion.div initial={{opacity: 0, y: 60}} whileInView={{ opacity: 0.85, y: 0, scale: 1, transition: {delay: 0.1, duration: 0.5}}} whileHover={{opacity: 1}} 
                        className="max-w-[600px] p-3 px-5 mt-10 bg-[#FFFFFF] rounded-3xl hover:cursor-pointer z-30">
                            <div className="flex space-x-4 items-center">
                            <Image className="h-10 w-10 rounded-xl" draggable={false} src={"/agendex-icon.png"} alt="" height={50} width={200}/>
                            <div className="truncate w-4/5 flex flex-col">
                                <span className="font-semibold">Agendex</span>
                                <span className="truncate">Você tem uma consulta marcada!</span>
                            </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>        
        </motion.div>
    )
}

export default Card;