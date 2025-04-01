"use client";

import { motion } from "framer-motion";
import { Roboto, Amatic_SC, Pacifico } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

// Mismas fuentes que la página principal
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const amatic = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-amatic',
});

const pacifico = Pacifico({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-pacifico',
});

export default function Contacto() {
  // Eliminar atributo del body (igual que en Home)
  useEffect(() => {
    document.body.removeAttribute('cz-shortcut-listen');
  }, []);

  return (
    <div className={`relative bg-gradient-to-r from-[#CE1126] to-[#A6091B] min-h-screen overflow-hidden ${roboto.variable} ${amatic.variable} ${pacifico.variable}`}>
      
      {/* Paleta de Colores en la parte superior */}
      <div className="fixed top-0 left-0 w-full h-[10px] flex z-20">
        <motion.div className="flex-1 bg-[#FFFFFF]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.1}} />
        <motion.div className="flex-1 bg-[#70A959]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.2}} />
        <motion.div className="flex-1 bg-[#DAA520]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.3}} />
        <motion.div className="flex-1 bg-[#CE1126]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.4}} />
        <motion.div className="flex-1 bg-[#1E90FF]" initial={{scaleX: 0}} animate={{scaleX: 1}} transition={{duration: 0.5, delay: 0.5}} />
      </div>
      
      {/* Bordes de color en diferentes secciones */}
      <div className="fixed left-0 top-[10px] w-[5px] h-screen">
        <motion.div className="w-full h-1/5 bg-[#FFFFFF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.6}} />
        <motion.div className="w-full h-1/5 bg-[#70A959]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.7}} />
        <motion.div className="w-full h-1/5 bg-[#DAA520]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.8}} />
        <motion.div className="w-full h-1/5 bg-[#CE1126]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.9}} />
        <motion.div className="w-full h-1/5 bg-[#1E90FF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 1.0}} />
      </div>
      
      {/* Botón de regreso al inicio */}
      <Link href="/">
        <motion.div 
          className="fixed top-6 left-6 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </motion.div>
      </Link>

      {/* Contenedor principal */}
      <div className="container mx-auto px-4 py-16 pt-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={`${amatic.className} text-6xl text-white text-center mb-8`}>Contacto</h1>
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl max-w-3xl mx-auto">
            
            {/* Formulario de contacto */}
            <form className="space-y-6">
              <div>
                <label className="block text-white text-lg mb-2" htmlFor="name">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 rounded-lg bg-white/30 backdrop-blur text-white placeholder:text-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#70A959]"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-white text-lg mb-2" htmlFor="email">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 rounded-lg bg-white/30 backdrop-blur text-white placeholder:text-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#70A959]"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-white text-lg mb-2" htmlFor="message">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/30 backdrop-blur text-white placeholder:text-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#70A959]"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="py-3 px-8 rounded-full bg-[#70A959] text-white border-none hover:bg-[#5A8A49] transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(112,169,89,0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enviar mensaje
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}