"use client"

import Image from "next/image";
import { SiInstagram, SiMailboxdotorg, SiWhatsapp, SiX } from '@icons-pack/react-simple-icons';
import { motion, useSpring, useTime, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import { Spotlight } from "./components/Spotlight";
import { GenerateText } from "./components/GenerateText";
import ContactForm from "./components/ContactForm";
import SectionMenu from "./components/SectionMenu";
import Slider from "./components/Slider";
import Service from "./components/Services";
import { GlobeLock, LayoutDashboardIcon, Wrench } from "lucide-react";

export default function Home() {
  const time = useTime();

  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  })
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #313D6A, #FFEA00, #C587F9`
  })
  const rotatingBgHover = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #FFEA00, #F4A5D8, #C587F9, #FFEA00`
  })

  const pulse = useSpring(0, {damping: 0, mass: 5, stiffness: 5})
  const pulsingBg = useTransform(pulse, (r) => {
    return `blur(${r}px)`
  })

  const variants = {
    hover: {scale: 1.01},
  }

  useEffect(() => {
    pulse.set(5);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const words = `Você está pronto para começar sua nova jornada?`

  const contact = useRef<HTMLDivElement | null>(null);
  const services = useRef<HTMLDivElement | null>(null);

  const transition = { duration: 5, yoyo: Infinity, ease: "easeInOut" }
  const transition2 = { duration: 1, yoyo: Infinity, ease: "easeInOut", delay: 0.5 }
  const transition3 = { duration: 4, yoyo: Infinity, ease: "easeInOut"}

  const [inView, setInView] = useState(false);
  const [inViewTitle, setInViewTitle] = useState(false);
  const [inViewShape, setInViewShape] = useState(false);
  
  return (
    <div>
    <Spotlight/>
    {/* HEADER */}
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{once: true}} 
    className="flex p-6 md:p-10 lg:p-14 justify-between w-[calc(100%-5px)] lg:w-[calc(100%-40px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-600px)] mx-auto">
      <Image src={"/logo.png"} alt='Logo' width={180} height={10}/>
      <div className='flex space-x-10 items-center'>
        <ul className='hidden md:flex space-x-10 text-white font-light'>
          <li className="font-jet hover:underline cursor-pointer z-10 transition ease-in-out duration-100 hover:font-extrabold hover:scale-105">INÍCIO</li>
          <li onClick={() => {services.current?.scrollIntoView({behavior: "smooth"})}} className="font-jet hover:underline cursor-pointer z-10 transition ease-in-out duration-100 hover:font-extrabold hover:scale-105">SERVIÇOS</li>
          <li className="font-jet hover:underline cursor-pointer z-10 transition ease-in-out duration-100 hover:font-extrabold hover:scale-105">PROJETOS</li>
        </ul>
      </div>
    </motion.div>

    {/* SECTION ONE */}
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: { duration: 1}}} viewport={{once: true}}
    className="flex p-10 -mb-5 md:-mb-0 lg:p-12 h-60 md:h-72 justify-center lg:justify-normal w-[calc(100%-5px)] lg:w-[calc(100%-40px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-600px)] mx-auto">
      <div className="flex flex-col absolute z-10">
        <div className="flex space-x-5 justify-center lg:justify-normal">
          <span className="font-jet font-extralight text-3xl sm:text-5xl md:text-6xl">CONSTRUA</span>
          <div className="relative inline-block">
            <span className="font-jet font-extrabold text-3xl sm:text-5xl md:text-6xl text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 bg-clip-text">AGORA</span>
            <div className="-mt-3 absolute flex w-full whitespace-nowrap">
              <motion.svg width="272" height="22" viewBox="0 0 272 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
              d="M7.68988 9.73301L3.05988 10.723C3.05988 10.7163 2.91322 10.7697 2.61988 10.883C2.32655 10.9963 2.04988 11.143 1.78988 11.323C1.53655 11.503 1.30322 11.7097 1.08988 11.943C0.883216 12.183 0.709883 12.4397 0.569883 12.713C0.423216 12.993 0.313216 13.2863 0.239883 13.593C0.166549 13.8997 0.129883 14.2063 0.129883 14.513C0.129883 14.8263 0.166549 15.1363 0.239883 15.443C0.319883 15.743 0.433216 16.033 0.579883 16.313C0.726549 16.5863 0.903216 16.843 1.10988 17.083C1.31655 17.3163 1.54988 17.5197 1.80988 17.693C2.06988 17.873 2.34655 18.0197 2.63988 18.133C2.93322 18.2397 3.23655 18.313 3.54988 18.353C3.85655 18.3863 4.16655 18.383 4.47988 18.343C4.78655 18.303 6.45988 17.8463 9.49988 16.973C12.5399 16.093 15.7332 15.2663 19.0799 14.493C22.4266 13.713 25.9332 13.053 29.5999 12.513C33.2599 11.973 37.0199 11.4797 40.8799 11.033C44.7399 10.593 48.3599 10.173 51.7399 9.77301C55.1199 9.37968 58.2066 9.00301 60.9999 8.64301C63.7932 8.27635 66.1432 8.08968 68.0499 8.08301C69.9632 8.06968 71.6999 8.10301 73.2599 8.18301C74.8199 8.25635 76.7599 8.38635 79.0799 8.57301C81.3999 8.75968 83.0599 9.49635 84.0599 10.783C85.0666 12.063 86.1566 13.5263 87.3299 15.173C88.5032 16.8197 89.7066 18.1097 90.9399 19.043C92.1666 19.9697 94.0632 20.7263 96.6299 21.313C99.1966 21.893 102.01 21.893 105.07 21.313C108.137 20.733 111.31 20.0663 114.59 19.313C117.87 18.5597 121.16 17.793 124.46 17.013C127.76 16.233 130.76 15.563 133.46 15.003C136.16 14.4563 138.843 13.9563 141.51 13.503C144.17 13.0563 146.743 12.653 149.23 12.293C151.723 11.9397 154.59 11.653 157.83 11.433C161.077 11.213 165.31 11.043 170.53 10.923C175.757 10.803 181.973 10.7063 189.18 10.633C196.393 10.5663 204.013 10.6063 212.04 10.753C220.067 10.9063 227.617 11.0097 234.69 11.063C241.763 11.1163 247.667 11.1497 252.4 11.163C257.127 11.183 260.59 11.253 262.79 11.373C263.68 11.4244 270 11.5 268 10.5C268.122 9.79824 266.82 10.7005 268.736 10.4036C270.696 10.0998 271.351 9.17778 271 8.5C270.307 7.16 270.333 6.83635 268.66 6.26301C266.987 5.68301 265.047 5.43968 262.84 5.53301C260.633 5.63301 257.17 5.65635 252.45 5.60301C247.723 5.55635 241.833 5.48301 234.78 5.38301C227.733 5.28301 220.17 5.12968 212.09 4.92301C204.017 4.70968 196.363 4.59635 189.13 4.58301C181.903 4.56968 175.643 4.56635 170.35 4.57301C165.05 4.57968 160.663 4.62301 157.19 4.70301C153.717 4.78301 150.737 4.99968 148.25 5.35301C145.763 5.70635 143.15 6.03968 140.41 6.35301C137.677 6.67301 134.917 7.00301 132.13 7.34301C129.337 7.68968 126.293 8.07968 123 8.51301C119.7 8.94635 116.437 9.30968 113.21 9.60301C109.983 9.90301 107.207 10.0997 104.88 10.193C102.553 10.2863 100.487 10.1763 98.6799 9.86301C96.8732 9.54968 95.5299 8.70301 94.6499 7.32301C93.7632 5.94968 92.5766 4.72301 91.0899 3.64301C89.6099 2.55635 87.8099 1.71301 85.6899 1.11301C83.5766 0.513014 81.3199 0.343015 78.9199 0.603015C76.5199 0.869681 74.5066 1.10301 72.8799 1.30301C71.2466 1.50301 69.4399 1.74301 67.4599 2.02301C65.4732 2.30968 63.0999 2.61635 60.3399 2.94301C57.5732 3.26968 54.4999 3.59968 51.1199 3.93301C47.7399 4.25968 44.0866 4.60301 40.1599 4.96301C36.2332 5.32301 32.3499 5.72635 28.5099 6.17301C24.6766 6.61968 21.0199 7.15968 17.5399 7.79301C14.0665 8.43301 10.7832 9.07968 7.68988 9.73301Z" fill="#FFEA00"/>
              </motion.svg>
            </div>
          </div>
          <span className="font-jet font-extralight text-3xl sm:text-5xl md:text-6xl">SEU</span>
        </div>
        <div className="text-center lg:text-right flex flex-col">
          <span className="font-jet font-extrabold text-3xl sm:text-5xl md:text-6xl lg:ml- mt-1">SITE OU APLICATIVO</span>
          <span className="font-jet font-semibold text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text mt-2 text-xs sm:text-sm lg:ml-32">finalizamos seu projeto em até 2 meses*</span>
        </div>
      </div>
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 5, delay: 1}}} viewport={{once: true}} className="absolute lg:top-0 z-0">
      <Image draggable="false" src={"/globe.png"} alt='Logo' width={1000} height={10}/>
      </motion.div>
    </motion.div>

    {/* SECTION TWO */}
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{once: true}}
    className="bg-gradient-to-br from-[#373737]/20 to-[#FFFFFF]/10 backdrop-blur-xl relative z-10 h-full p-14">
      <div className="flex flex-col lg:flex-row justify-between items-center w-[calc(100%-5px)] lg:w-[calc(100%-40px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-600px)] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-4/6">
          <div className="flex text-center lg:text-left flex-col space-y-2 w-full lg:w-2/5">
            <span className="font-semibold">NOS ENCONTRE</span>
            <div className="flex space-x-3 justify-center lg:justify-normal">
              <SiInstagram size={20}/>
              <SiX size={20}/>
            </div>
          </div>
          <div className="text-center lg:text-justify mt-8 lg:mt-0 lg:w-4/5">
          Somos um estúdio de produção digital que oferece uma nova maneira de trazer suas ideias à vida. Nossa equipe é capaz de entregar resultados e soluções que excedem suas expectativas e engajam seus clientes.
          </div>
        </div>
        <div className="relative">
          <div className="group mt-10 lg:mt-0">
            <motion.button onClick={() => {contact.current?.scrollIntoView({behavior: "smooth"})}} variants={variants} whileHover="hover" className="relative bg-white h-16 rounded-2xl z-10 px-10">
              <span className="text-[#313D6A] font-bold text-xl">Entre em contato</span>
            </motion.button>
            <motion.button className="absolute rounded-2xl group-hover:-inset-1 mt-10 lg:mt-0"
            style={{background: rotatingBgHover, filter: pulsingBg}}
            />
            <motion.button className="absolute rounded-2xl -inset-1 mt-10 lg:mt-0"
            style={{background: rotatingBg}}
            />
          </div>
        </div>
      </div>
    </motion.div>

    {/* SECTION THREE */}
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{once: true}}
    className="w-[calc(100%-5px)] lg:w-[calc(100%-40px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-600px)] mx-auto p-6 py-10 md:py-0 md:p-10 lg:p-14">
    <div className="flex justify-between">
      <div className="font-bold text-lg mb-5">NOSSOS PROJETOS</div>
      <div className="font-jet hover:underline cursor-pointer transition ease-in-out duration-100 hover:font-extrabold hover:scale-105">VEJA TODOS...</div>
    </div>
    <motion.div 
    layout
    className="flex flex-col md:flex-row gap-5 mb-3 lg:mb-4">
          <Card/>
          <Card2/>
    </motion.div>
    </motion.div>

    <div className="flex bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 1440 40">
        <path fill="#202020" fillOpacity="1" d="M0,32L1440,0L1440,0L0,0Z"></path>
      </svg>
    </div>
    

    {/* SECTION FOUR */}
    <motion.div className="bg-white flex w-full h-full py-5">
      <div className="w-[calc(100%-5px)] lg:w-[calc(100%-40px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-600px)] mx-auto p-6 md:p-10 lg:p-14">

        <div className="flex flex-col md:flex-row md:justify-between w-full p-5 md:p-0">
          <div className="relative inline-block">
            <motion.span onViewportEnter={() => {setInViewTitle(true)}} className="text-black text-3xl font-bold z-20 font-jet">CICLO DE DESENVOLVIMENTO</motion.span>
            <svg className="absolute w-full overflow-hidden" width="400" height="5" viewBox="0 0 600 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.line y1="2.5" x2="600" y2="2.5" stroke="#A957F7" stroke-width="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inViewTitle ? 1 : 0 }}
              transition={transition2}/>
            </svg>
          </div>

          <div className="font-jet text-black hover:underline mt-2 md:mt-1 cursor-pointer transition ease-in-out duration-100 hover:font-extrabold hover:scale-105 w-fit">SAIBA MAIS...</div>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:mt-5 w-full items-center">
          <div className="flex flex-col w-full md:w-2/5 p-5 md:mt-5 md:p-0">
            <span className="text-[#4d4d4d] mb-5 z-20">Entenda como funciona as etapas do nosso processo de desenvolvimento...</span>
            <SectionMenu/>
          </div>

          <motion.div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Slider/>
          </motion.div>
        </div>

      </div>
    </motion.div>

    {/* SECTION FIVE */}
      <motion.div className="relative max-w-screen overflow-x-clip">
      <svg className="absolute -mt-16 md:-mt-40" width="1440" height="349" viewBox="0 0 1640 349" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="M-382 47.2894C668.5 -96.8037 891 525 1512.5 255" stroke="#BED0FF" stroke-width="40" stroke-linecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={transition}/>
      </svg>
    </motion.div>


    <div ref= {services} className="absolute w-full h-auto right-0 -mt-5 opacity-100 animate-pulse z-10">
      <motion.svg className="absolute right-0 2xl:right-40 mt-32 z-10" initial={{y: 0}} animate={{y: [0, -10, 0]}} transition={{repeat: Infinity, ease: "easeInOut", duration: 3, delay: 3.5}} width="467" height="519" viewBox="0 0 467 519" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M303.449 8.10281L466.15 99.784L404.57 197.027" stroke="#ddb5ff" stroke-linejoin="round" initial={{ pathLength: 0, x: 0 }} animate={{ pathLength: inViewShape ? 1 : 0, x: -30 }} transition={transition3}/>
      <motion.path d="M167.759 176.11L41.8445 51" stroke="#ddb5ff" stroke-linejoin="round" initial={{ pathLength: 0, x: 0 }} animate={{ pathLength: inViewShape ? 1 : 0, x: -30 }} transition={transition3}/>
      <motion.path d="M43.5126 467.782L87.6878 406.699" stroke="#C587F9" stroke-linejoin="round" initial={{ pathLength: 0, x: 0 }} animate={{ pathLength: inViewShape ? 1 : 0, x: -30 }} transition={transition3}/>
      <motion.path d="M230.017 331.678L195.59 465.466L330.935 437.786" stroke="#C587F9" stroke-linejoin="round" initial={{ pathLength: 0, x: 0 }} animate={{ pathLength: inViewShape ? 1 : 0, x: -30 }} transition={transition3}/>
      </motion.svg>
      <motion.svg className="absolute right-20 2xl:right-40 mt-32 z-10" initial={{y: 0}} animate={{y: [-10, -30, -10]}} transition={{repeat: Infinity, ease: "easeInOut", duration: 3.5, delay: 4}} width="467" height="519" viewBox="0 0 467 519" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M136.215 71.7023C138.079 69.0977 141.197 67.6393 144.391 67.8778L297.997 79.3355C301.191 79.5739 303.979 81.472 305.309 84.3153L369.266 221.029C370.596 223.872 370.266 227.229 368.402 229.834L278.752 355.09C276.888 357.695 273.77 359.153 270.576 358.915L116.969 347.457C113.775 347.218 110.987 345.32 109.658 342.477L45.7012 205.763C44.371 202.92 44.7002 199.563 46.5647 196.958L136.215 71.7023Z" stroke="#C587F9" stroke-linecap="round" stroke-linejoin="round" initial={{ pathLength: 0, x: 0 }} animate={{ pathLength: inViewShape ? 1 : 0, x: -30 }} transition={transition3}/>
      <motion.path d="M450.539 507.525L305.226 489.423L392.364 382.224L450.539 507.525Z" stroke="#ddb5ff" stroke-linecap="round" stroke-linejoin="round" initial={{ pathLength: 0, x: 0 }} animate={{ pathLength: inViewShape ? 1 : 0, x: -30 }} transition={transition3}/>
      <motion.path d="M1 268.948L130.11 216.632" stroke="#ddb5ff" stroke-linejoin="round" initial={{ pathLength: 0, x: 0 }} animate={{ pathLength: inViewShape ? 1 : 0, x: -30 }} transition={transition3}/>
      <motion.path d="M43 333.923L155.43 418.744" stroke="#C587F9" stroke-linejoin="round" initial={{ pathLength: 0, x: 0 }} animate={{ pathLength: inViewShape ? 1 : 0, x: -30 }} transition={transition3}/>
      </motion.svg>
    </div>

    <motion.div onViewportEnter={() => {setInView(true)}} className="bg-white bg-gradient-to-b from-yellow-100/50 via-pink-100/50 to-purple-200  flex w-full py-5">
      <div className="w-[calc(100%-5px)] lg:w-[calc(100%-40px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-600px)] mx-auto p-6 md:p-10 lg:p-14 text-[#4d4d4d] z-20">
        <div className="flex flex-col gap-7">
          <motion.span onViewportEnter={() => {setInViewShape(true)}} className="text-center md:text-left text-5xl font-playfair">Nossos serviços</motion.span>
          <span className="text-center md:text-left md:w-2/4 mb-10 tracking-wide">A Procics atua em todas as etapas do projeto, desde a Prototipação, Desenvolvimento e Homologação, até a Instalação e Suporte do produto entregue.</span>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <Service title="Segurança da Informação" subtitle="Serviços de segurança, roteamento e autorização de transações..." Icon={GlobeLock}/>
          <Service title="Plataformas e Softwares" subtitle="Desde plataformas (SaaS) com vários usuários até softwares corporativos..." Icon={LayoutDashboardIcon}/>
          <Service title="Suporte e Manutenção" subtitle="Com a Procics, você tem um time de TI exclusivo para o seu negócio..."  Icon={Wrench}/>
        </div>
      </div>
    </motion.div>

    <div className="bg-purple-200 rotate-180 flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 1440 40">
        <path fill="#252525" fillOpacity="1" d="M0,32L1440,0L1440,0L0,0Z"></path>
      </svg>
    </div>

    {/* SECTION SIX */}
    <motion.div ref={contact} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{once: true}}
    className="py-10 pt-11 bg-[#252525]">
      <motion.div className="flex flex-col md:flex-row start justify-between items-center md:items-start w-[calc(100%-5px)] lg:w-[calc(100%-40px)] 2xl:w-[calc(100%-600px)] mx-auto p-6 md:p-10 lg:p-14">
        <div className="text-center mb-10 -mt-5 md:mb-0 md:text-left md:w-1/3 flex flex-col">
          <GenerateText words={words}/>
          <motion.span initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0, transition: {duration: 2, delay: 1.8}}} viewport={{once: true}} className="opacity-75 mt-5">Preencha o formulário para entrar em contato com nossa equipe e iremos retornar o mais rápido possível.</motion.span>
          <motion.span initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0, transition: {duration: 2, delay: 2.3}}} viewport={{once: true}} className="opacity-75 mt-5 mb-5">Caso prefira, também estamos disponíveis por e-mail e telefone:</motion.span>
          <motion.div className="flex flex-col" initial={{opacity: 0, y: -10}} whileInView={{opacity: 1, y: 0, transition: {duration: 2, delay: 2.8}}} viewport={{once: true}}>
            <div className="relative flex space-x-3 items-center mb-3 justify-center md:justify-normal">
              <SiMailboxdotorg size={18}/>
              <span className="font-semibold">luciana.sato@procics.com</span>
            </div>
            <div className="flex space-x-3 items-center justify-center md:justify-normal">
              <SiWhatsapp size={20}/>
              <span className="font-semibold">(11) 98319-9825</span>
            </div>
          </motion.div>

        </div>
        <ContactForm/>
      </motion.div>
    </motion.div>

    {/* FOOTER */}
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{once: true}}
    className='w-full items-center justify-between flex flex-row bg-black md:h-[220px]'>
      <div className="flex flex-col md:grid md:grid-cols-3 w-[calc(100%-5px)] lg:w-[calc(100%-40px)] 2xl:w-[calc(100%-600px)] mx-auto text-white p-14">
        <div className="flex flex-col space-y-3 w-2/3">
          <Image src={"/logo.png"} alt='Logo' width={140} height={40}/>
          <span className="opacity-75">Nossa equipe te aguarda para dar início à sua jornada no mundo digital!</span>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col font-jet text-right">
          <span className="font-bold mb-2 text-lg">Links úteis</span>
          <ul className="hover:underline cursor-pointer mb-6">
            <li>Novas tecnologias</li>
          </ul>
        </div>
        <div className="flex flex-col items-end font-jet">
          <span className="font-bold mb-2 text-lg">Entre em contato</span>
          <span className="mb-1">luciana.sato@procics.com.br</span>
          <span className="mb-5">(11) 98319-9825</span>
        </div>
      </div>
    </motion.div>

    </div>
  );
}
