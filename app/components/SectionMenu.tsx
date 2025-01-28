import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const SectionMenu = () => {
    const [isExpanded, setIsExpanded] = useState("b0")

    return (
        <div className="text-black">
            <div className="border-b-[1px] border-black mb-4"/>

            <div className="flex justify-between">
                <motion.div
                onViewportLeave={() => {setIsExpanded("b0")}}
                animate={{
                    height: isExpanded === "b1" ? "100px" : "",
                    fontSize: isExpanded === "b1" ? "20px" : "16px",
                }}
                transition={{
                    duration: 0.4,
                    ease: "linear",
                }}
                onClick={() => {setIsExpanded("b1"); if (isExpanded === "b1") {setIsExpanded("b0")}}}
                className={`${isExpanded == "b1" ? 'font-bold text-xl text-[#303030] cursor-pointer' : 'font-semibold text-[#303030] flex flex-col cursor-pointer'}`}>Prototipação</motion.div>
                <motion.div
                className="flex items-end justify-center h-full"
                animate={{
                    rotate: isExpanded === "b1" ? -180 : 0,
                }}
                style={{
                    transformOrigin: "center",
                    display:"inline-block",
                    originX: "12px",
                    originY: "12px",
                }}
                transition={{ duration: 0.8 }}>
                    <ChevronDown onClick={() => {setIsExpanded("b1"); if (isExpanded === "b1") {setIsExpanded("b0")}}} className="cursor-pointer" color="#000000"/>
                </motion.div>
            </div>
            {isExpanded == "b1" ? 
            <motion.div
            initial={{ opacity: 0, y: -20}}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
            }}
            transition={{
                delay: 0.4,
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="-mt-16 mb-5 text-[#4d4d4d]">
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since...
            </motion.div> : <></>
            }

            <div className="border-b-[1px] border-black mb-4 mt-4"/>
            
            <div className="flex justify-between">
                <motion.div
                animate={{
                    height: isExpanded === "b2" ? "100px" : "",
                    fontSize: isExpanded === "b2" ? "20px" : "16px",
                }}
                transition={{
                    duration: 0.4,
                    ease: "linear",
                }}
                onClick={() => {setIsExpanded("b2"); if (isExpanded === "b2") {setIsExpanded("b0")}}}
                className={`${isExpanded == "b2" ? 'font-bold text-xl text-[#303030] cursor-pointer' : 'font-semibold flex flex-col text-[#303030] cursor-pointer'}`}>Processo criativo</motion.div>
                <motion.div
                className="flex items-end justify-center h-full"
                animate={{
                    rotate: isExpanded === "b2" ? 180 : 0,
                }}
                style={{
                    transformOrigin: "center",
                    display:"inline-block",
                    originX: "12px",
                    originY: "12px",
                }}
                transition={{ duration: 0.8 }}>
                    <ChevronDown onClick={() => {setIsExpanded("b2"); if (isExpanded === "b2") {setIsExpanded("b0")}}} className="cursor-pointer" color="#000000"/>
                </motion.div>
            </div>
            {isExpanded == "b2" ? 
            <motion.div
            initial={{ opacity: 0, y: -12}}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
            }}
            transition={{
                delay: 0.4,
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="-mt-16 mb-5 text-[#4d4d4d]">
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since...
            </motion.div> : <></>
            }

            <div className="border-b-[1px] border-black mb-4 mt-4"/>

            <div className="flex justify-between">
                <motion.div
                animate={{
                    height: isExpanded === "b3" ? "100px" : "",
                    fontSize: isExpanded === "b3" ? "20px" : "16px",
                }}
                transition={{
                    duration: 0.4,
                    ease: "linear",
                }}
                onClick={() => {
                setIsExpanded("b3"); if (isExpanded === "b3") {setIsExpanded("b0")}}}
                className={`${isExpanded == "b3" ? 'font-bold text-xl text-[#303030] cursor-pointer' : 'font-semibold flex flex-col text-[#303030] cursor-pointer'}`}>Marketing</motion.div>
                <motion.div
                    className="flex items-end justify-center h-full"
                    animate={{
                        rotate: isExpanded === "b3" ? -180 : 0,
                    }}
                    style={{
                        transformOrigin: "center",
                        display:"inline-block",
                        originX: "12px",
                        originY: "12px",
                    }}
                    transition={{ duration: 0.8 }}>
                        <ChevronDown onClick={() => {setIsExpanded("b3"); if (isExpanded === "b3") {setIsExpanded("b0")}}} className="cursor-pointer" color="#000000"/>
                </motion.div>
            </div>
            {isExpanded == "b3" ?
            <motion.div
            initial={{ opacity: 0, y: -12}}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
            }}
            transition={{
                delay: 0.4,
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="-mt-16 mb-5 text-[#4d4d4d]">
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industrys standard dummy  text ever since...
            </motion.div> : <></>
            }

            <div className="border-b-[1px] border-black mb-4 mt-4"/>
        </div>
    )
}

export default SectionMenu;