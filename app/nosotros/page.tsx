"use client";

import Image from 'next/image';


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

export default function Nosotros() {
  // Eliminar atributo del body
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
      
      {/* Bordes de color en el lado derecho */}
      <div className="fixed right-0 top-[10px] w-[5px] h-screen">
        <motion.div className="w-full h-1/5 bg-[#1E90FF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 1.0}} />
        <motion.div className="w-full h-1/5 bg-[#CE1126]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.9}} />
        <motion.div className="w-full h-1/5 bg-[#DAA520]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.8}} />
        <motion.div className="w-full h-1/5 bg-[#70A959]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.7}} />
        <motion.div className="w-full h-1/5 bg-[#FFFFFF]" initial={{scaleY: 0}} animate={{scaleY: 1}} transition={{duration: 0.7, delay: 0.6}} />
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

      {/* Contenido principal */}
      <div className="container mx-auto px-6 py-16 pt-20 max-w-5xl">
        {/* Logo y título */}
        <div className="flex flex-col items-center mb-12">
          <motion.div
            className="w-[180px] h-[180px] mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
            initial={{ opacity: 0, y: -20, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            <Image 
              src="/plazam-181w.webp" 
              alt="Plaza Morena Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h1
            className={`${amatic.className} text-6xl text-white text-center`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Nuestra Historia
          </motion.h1>
        </div>

        {/* Secciones con contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1 - Historia */}
          <motion.div
            className="bg-white/15 backdrop-blur-sm rounded-xl p-6 transform rotate-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.02, rotate: 0 }}
          >
            <h2 className={`${amatic.className} text-4xl text-[#70A959] mb-4`}>Nuestros Orígenes</h2>
            <p className="text-white mb-4">
              Plaza Morena nació en 1998 como un pequeño restaurante familiar con una gran pasión por la auténtica cocina mexicana. 
              Nuestros fundadores, la familia Rodríguez, trajeron recetas que han pasado de generación en generación desde Michoacán, México.
            </p>
            <p className="text-white mb-4">
              Lo que comenzó como un modesto local con apenas cinco mesas, se ha convertido en uno de los destinos 
              gastronómicos mexicanos más reconocidos de la ciudad, sin perder nunca nuestras raíces y el sabor casero que nos distingue.
            </p>
            
            <motion.div
              className="mt-6 p-4 bg-white/10 rounded-lg rotate-1"
              whileHover={{ rotate: -1, scale: 1.03 }}
            >
              <p className={`${pacifico.className} text-[#DAA520] text-xl italic`}>
        
              </p>
            </motion.div>
          </motion.div>
          
          {/* Columna 2 - Filosofía y equipo */}
          <motion.div
            className="bg-white/15 backdrop-blur-sm rounded-xl p-6 transform -rotate-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.02, rotate: 0 }}
          >
            <h2 className={`${amatic.className} text-4xl text-[#DAA520] mb-4`}>Nuestra Filosofía</h2>
            <p className="text-white mb-4">
              En Plaza Morena creemos en utilizar ingredientes frescos y de la más alta calidad. Nuestro chef ejecutivo 
              Carlos Mendoza viaja regularmente a diferentes regiones de México para descubrir nuevos sabores y técnicas 
              que incorporamos a nuestra carta.
            </p>
            <p className="text-white mb-4">
              Más que un restaurante, somos una familia. Muchos de nuestros empleados llevan con nosotros más de 15 años, y juntos 
              nos esforzamos por ofrecer no solo excelente comida, sino una experiencia completa que te haga sentir como en casa.
            </p>
            
            <ul className="mt-6 space-y-2">
              <li className="flex items-center text-white">
                <div className="w-2 h-2 rounded-full bg-[#70A959] mr-2"></div>
                Ingredientes frescos seleccionados diariamente
              </li>
              <li className="flex items-center text-white">
                <div className="w-2 h-2 rounded-full bg-[#70A959] mr-2"></div>
                Recetas tradicionales con toques contemporáneos
              </li>
              <li className="flex items-center text-white">
                <div className="w-2 h-2 rounded-full bg-[#70A959] mr-2"></div>
                Ambiente familiar y acogedor
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Sección de equipo */}
        <motion.div
          className="mt-12 bg-white/15 backdrop-blur-sm rounded-xl p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className={`${amatic.className} text-4xl text-[#1E90FF] mb-6 text-center`}>Nuestro Equipo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="text-center p-4"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-[#CE1126]/80 to-[#70A959]/80 flex items-center justify-center text-white">
                  <span className={`${amatic.className} text-3xl`}>Carlos</span>
                </div>
              </div>
              <h3 className="text-[#DAA520] text-xl font-bold mb-2">Carlos Mendoza</h3>
              <p className="text-white">Chef Ejecutivo</p>
              <p className="text-white/80 text-sm mt-2">Con más de 25 años de experiencia en la cocina mexicana tradicional.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-4"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-[#70A959]/80 to-[#DAA520]/80 flex items-center justify-center text-white">
                  <span className={`${amatic.className} text-3xl`}>Elena</span>
                </div>
              </div>
              <h3 className="text-[#DAA520] text-xl font-bold mb-2">Elena Rodríguez</h3>
              <p className="text-white">Gerente General</p>
              <p className="text-white/80 text-sm mt-2">Hija de los fundadores, lleva el espíritu familiar en cada detalle.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-4"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-[#DAA520]/80 to-[#1E90FF]/80 flex items-center justify-center text-white">
                  <span className={`${amatic.className} text-3xl`}>Miguel</span>
                </div>
              </div>
              <h3 className="text-[#DAA520] text-xl font-bold mb-2">Miguel Sánchez</h3>
              <p className="text-white">Mixólogo</p>
              <p className="text-white/80 text-sm mt-2">Creador de nuestras famosas margaritas y cócteles especiales.</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Testimonio destacado */}
        <motion.div
          className="mt-12 mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <svg className="w-12 h-12 text-[#DAA520] mx-auto mb-4 opacity-60" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-white text-lg italic mb-4">
            Plaza Morena ha sido nuestro restaurante mexicano favorito por más de una década. La comida siempre es excepcional y el ambiente te hace sentir como si estuvieras en un rincón acogedor de México.
          </p>
          <p className="text-[#70A959] font-bold">— Revista Gastronómica Local</p>
        </motion.div>
      </div>
    </div>
  );
}