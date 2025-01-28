import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Slider = () => {
    const [isActive, setIsActive] = useState("p1");

    const imageSrc =
        isActive === "p1"
        ? "./rec1.png"
        : isActive === "p2"
        ? "./rec2.png"
        : isActive === "p3"
        ? "./rec3.png"
        : "";

    useEffect(() => {
        const img = new window.Image();
        img.src = imageSrc;
    }, [imageSrc]);


    useEffect(() => {
        const photos = ["p1", "p2", "p3"];
        let index = 0;
        const alternate = () => {
            index = (index + 1) % photos.length;
            setIsActive(photos[index])
        }
        const timer = setInterval(alternate, 6000)
        return () => clearInterval(timer)
    },[])

    return (
        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-2/3 z-20">
            <div className="hidden md:flex md:flex-col gap-1">
                <button 
                onClick={() => {setIsActive("p1")}}
                className={`${isActive === "p1" ? "bg-[#5C5C5C]" : "bg-[#C2C2C2]"} w-3 h-3 rounded-full transition duration-1000 ease-in-out`}/>
                <button
                onClick={() => {setIsActive("p2")}}
                className={`${isActive === "p2" ? "bg-[#5C5C5C]" : "bg-[#C2C2C2]"} w-3 h-3 rounded-full transition duration-1000 ease-in-out`}/>
                <button
                onClick={() => {setIsActive("p3")}}
                className={`${isActive === "p3" ? "bg-[#5C5C5C]" : "bg-[#C2C2C2]"} w-3 h-3 rounded-full transition duration-1000 ease-in-out`}/>
            </div>
            <div className="bg-white rounded-xl">
                <motion.img
                key={isActive}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut"}}
                className="rounded-xl shadow-md"
                src={imageSrc}
                alt="1"/>
            </div>
            <div className="flex md:hidden mt-3 gap-1">
                <button 
                onClick={() => {setIsActive("p1")}}
                className={`${isActive === "p1" ? "bg-[#5C5C5C]" : "bg-[#C2C2C2]"} w-3 h-3 rounded-full transition duration-1000 ease-in-out`}/>
                <button
                onClick={() => {setIsActive("p2")}}
                className={`${isActive === "p2" ? "bg-[#5C5C5C]" : "bg-[#C2C2C2]"} w-3 h-3 rounded-full transition duration-1000 ease-in-out`}/>
                <button
                onClick={() => {setIsActive("p3")}}
                className={`${isActive === "p3" ? "bg-[#5C5C5C]" : "bg-[#C2C2C2]"} w-3 h-3 rounded-full transition duration-1000 ease-in-out`}/>
            </div>
        </div>
    )
}

export default Slider;