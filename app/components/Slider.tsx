import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Slider = () => {
    const [isActive, setIsActive] = useState("p1");
    const [opacity, setOpacity] = useState(1)

    const imageSrc =
        isActive === "p1"
        ? "./rec1.webp"
        : isActive === "p2"
        ? "./rec2.png"
        : isActive === "p3"
        ? "./rec3.webp"
        : "";

    useEffect(() => {
        const timer = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setIsActive(prev => {
                    const photos = ["p1", "p2", "p3"];
                    const index = photos.indexOf(prev);
                    return photos[(index + 1) % photos.length];
                });
                setOpacity(1);
            }, 500);
        }, 6000);

        return () => clearInterval(timer); // Limpeza do intervalo
    }, []);

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
            <div className="bg-white lg:h-96 rounded-xl">
                <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: opacity }}
                exit={{ opacity: 0.5 }}
                transition={{ duration: 0.6, ease: "easeInOut"}}
                className="rounded-xl shadow-md"
                src={imageSrc}
                alt="pictures"/>
            </div>
            <div className="flex md:hidden mt-5 gap-1">
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