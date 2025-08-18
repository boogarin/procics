"use client"

import * as React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const texts = [
  "Sua marca é única — sua estratégia de tráfego também será. Aqui, cada cliente recebe atenção exclusiva e resultados que fazem a diferença.",
  "Chegou a hora da sua marca ser vista por quem realmente importa — mais visibilidade, mais oportunidades, mais crescimento."
]

export function TypingTextRotator() {
  const [index, setIndex] = React.useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, 9000) // tempo total antes de trocar (5s)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={ref} className="flex items-center justify-center mt-4">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          className="text-xl font-bold tracking-tighter z-20 mt-4 text-transparent bg-gradient-to-r from-yellow-100 via-pink-200 to-purple-100 bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          {texts[index].split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.05, delay: i * 0.05 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </AnimatePresence>
    </div>
  )
}
