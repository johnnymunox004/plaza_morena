"use client";

import React, { useState, useEffect, useRef } from "react";

import { Amatic_SC, Roboto, Pacifico } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

// Configuración de las fuentes
const amatic = Amatic_SC({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-amatic",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

// Imágenes de respaldo
const exampleImages = [
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23E88735'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3EFajitas%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23DAA520'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3EMargaritas%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%2370A959'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3EGuacamole%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%238B0000'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3ETacos%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23478860'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3EEnchiladas%3C/text%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23C8553D'/%3E%3Ctext x='150' y='200' font-family='sans-serif' font-size='24' text-anchor='middle' fill='white'%3ENachos%3C/text%3E%3C/svg%3E"
];

const foodImages = [
  "/PLAZA+OW-850w.webp",
  "/margaritas-cocktails.webp",
  "/Guacamole-Autentico-1.webp",
  "/plazam-181w.webp",
  "/PLAZA+OW-850w.webp",
  "/Guacamole-Autentico-1.webp"
];

const externalImages = [
  "",
  "https://images.unsplash.com/photo-1575650772417-e6b418b0d106?q=80&w=1974",
  "image (4).webp",
  "image (1).webp",
  "image (3).webp",
  "/image (2).webp",

];

export default function Home() {
  // Datos de los alimentos
  const foodItems = [
    {
      name: "",
      // Se eliminó la referencia a image: foodImages[0]
      description: "",
      price: "",
      backgroundImage: "/PLAZA+OW-850w.webp", // Fondo especial para este elemento
      color: "#E88735",
      isSpecial: true // Marcador para elemento especial
    },
    {
      name: "MARGARITA CLÁSICA",
      image: foodImages[1],
      description: "Margaritas preparadas...",
      price: "$7.99",
      backgroundImage: "/margaritas-cocktails.webp",
      color: "#DAA520" // Color original
    },
    {
      name: "GUACAMOLE FRESCO",
      image: foodImages[2],
      description: "Guacamole auténtico mexicano, preparado en el momento con aguacates frescos, cilantro, cebolla y chile serrano. El acompañamiento perfecto para tus nachos o como entrada para compartir.",
      price: "$6.50",
      backgroundImage: "/Guacamole-Autentico-1.webp",
      color: "#70A959" // Color original
    },
    {
      name: "TACOS AL PASTOR",
      image: foodImages[3],
      description: "Los mejores tacos de la ciudad con carne al pastor marinada en adobo tradicional y cocinada en trompo vertical, servidos con piña, cilantro, cebolla y nuestras salsas caseras de receta familiar.",
      price: "$12.99",
      backgroundImage: "/plazam-181w.webp",
      color: "#C23616" // Color rojo carmesí
    },
    {
      name: "ENCHILADAS SUIZAS",
      image: foodImages[4],
      description: "Deliciosas enchiladas rellenas de pollo, bañadas en salsa verde cremosa y gratinadas con queso. Un clásico de la cocina mexicana con nuestro toque especial que te transportará a las calles de México.",
      price: "$14.50",
      backgroundImage: "/PLAZA+OW-850w.webp",
      color: "#DA291C" // Color rojo añadido
    },
    {
      name: "NACHOS SUPREMOS",
      image: foodImages[5],
      description: "Crujientes nachos cubiertos de queso fundido, frijoles refritos, jalapeños, guacamole fresco, crema agria y tu elección de pollo o carne asada. Perfectos para compartir y comenzar tu experiencia gastronómica.",
      price: "$9.99",
      backgroundImage: "/Guacamole-Autentico-1.webp",
      color: "#B71C1C" // Color rojo intenso añadido
    }
  ];

  const [active, setActive] = useState(0);
  const [rotate, setRotate] = useState(0);
  const rotateAdd = 60; // 360 / 6 items = 60 grados por item
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  // Agregar estas variables y referencias
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wheelThrottleTime = 500; // Aumentado para dar más tiempo entre eventos
  const wheelEnabledRef = useRef(true); // Usar una referencia en lugar de estado

  // Referencias para los elementos
  const headerRef = useRef(null);
  const heroTextRef = useRef(null);

  // Estado para controlar la apertura del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Versión simplificada del nextSlider sin GSAP
  const nextSlider = () => {
    const newActive = active + 1 > foodItems.length - 1 ? 0 : active + 1;
    setActive(newActive);
    setRotate(prev => prev + rotateAdd);
  };

  // Función para el slide anterior
  const prevSlider = () => {
    const newActive = active - 1 < 0 ? foodItems.length - 1 : active - 1;
    setActive(newActive);
    setRotate(prev => prev - rotateAdd);
  };

  // Auto-rotate con pausa al hover
  useEffect(() => {
    intervalRef.current = setInterval(nextSlider, 5000);
    
    const carousel = carouselRef.current;
    if (carousel) {
      const pauseRotation = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
      
      const resumeRotation = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(nextSlider, 5000);
      };

      carousel.addEventListener('mouseenter', pauseRotation);
      carousel.addEventListener('mouseleave', resumeRotation);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        carousel.removeEventListener('mouseenter', pauseRotation);
        carousel.removeEventListener('mouseleave', resumeRotation);
      };
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [active, rotate, nextSlider]);

  // Soporte para gestos táctiles
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    
    if (diff > 50) {
      nextSlider();
    } else if (diff < -50) {
      prevSlider();
    }
  };

  // Reemplazar la función handleWheel
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Usar la referencia directamente en lugar de estado
    if (!wheelEnabledRef.current) return;
    
    e.preventDefault(); // Evitar el scroll de la página
    
    // Desactivar temporalmente para evitar desplazamientos rápidos múltiples
    wheelEnabledRef.current = false;
    
    // Determinar la dirección de la rueda
    if (e.deltaY > 0) {
      // Scroll hacia abajo = siguiente elemento
      nextSlider();
    } else {
      // Scroll hacia arriba = elemento anterior
      prevSlider();
    }
    
    // Reactivar después del tiempo de espera
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }
    wheelTimeoutRef.current = setTimeout(() => {
      wheelEnabledRef.current = true;
    }, wheelThrottleTime);
  };

  // Añadir el evento de rueda al carrusel en el useEffect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      // Función wrapper que siempre verifica la referencia actualizada
      const wheelHandler = (e: WheelEvent) => handleWheel(e as unknown as React.WheelEvent<HTMLDivElement>);
      
      carousel.addEventListener('wheel', wheelHandler, { passive: false });
      return () => {
        carousel.removeEventListener('wheel', wheelHandler);
        if (wheelTimeoutRef.current) {
          clearTimeout(wheelTimeoutRef.current);
        }
      };
    }
  }, [handleWheel]);

  // Sincronizar rotación con índice activo
  useEffect(() => {
    const normalizedRotation = ((rotate % 360) + 360) % 360;
    const calculatedActive = Math.round(normalizedRotation / rotateAdd) % foodItems.length;
    const actualActive = (foodItems.length - calculatedActive) % foodItems.length;
    if (actualActive !== active) {
      setActive(actualActive);
      // Esta parte asegura que la rotación se alinee perfectamente con múltiplos de 60
      const exactRotation = calculatedActive * rotateAdd;
      if (Math.abs(normalizedRotation - exactRotation) > 0.5) {
        setRotate(exactRotation);
      }
    }
  }, [rotate, foodItems.length, active, rotateAdd]);

  return (
    <div className="flex flex-col bg-white text-gray-800">
      {/* Primera sección - altura exacta de la pantalla con fondo blanco */}
      <div ref={headerRef} className={`relative h-screen ${roboto.variable} ${amatic.variable} ${pacifico.variable}`}>
        {/* Fondo blanco simple */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Fondo dinámico basado en el elemento activo */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{
              opacity: 1
            }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={`bg-${active}`}
            style={{
              backgroundImage: active === 0 && foodItems[0].isSpecial 
                ? 'url(/PLAZA+OW-850w.webp)' 
                : 'url(/bafaf004-0627-4a64-8a71-f496a9d92120.webp)', // Otro fondo para el resto
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Reemplazar el overlay opaco por uno más sutil o quitarlo */}
          {/* OPCIONES: */}
          {/* Opción 1: Sin overlay (máxima nitidez) */}
          {/* No incluir nada aquí */}
          
          {/* Opción 2: Overlay muy sutil */}
          <div className="absolute inset-0 bg-white/10 z-[1]" />
          
          {/* Opción 3: Gradiente sutil para mejorar legibilidad del texto */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/20 z-[1]" /> */}
        </div>

        {/* Header con navegación mejorada - PADDING AUMENTADO */}
        <header className="absolute top-0 w-full z-30 px-6 py-6 md:py-8 flex items-center justify-center backdrop-blur-md bg-black/30">
          {/* Contenedor centrado para los elementos de navegación */}
          <div className="flex items-center justify-center space-x-6 md:space-x-10">
            {/* Botones lado izquierdo */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4 md:space-x-8">
                {/* Botón Inicio - Color verde más vivo */}
                <motion.a 
                  href="#inicio"
                  className="flex items-center gap-2 text-white px-4 py-3 rounded-xl bg-gradient-to-r from-[#4CD137] to-[#44BD32] hover:from-[#44BD32] hover:to-[#4CD137] transition-all font-medium backdrop-blur-sm shadow-md"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 4px 15px rgba(76, 209, 55, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2" />
                  </svg>
                  <span className="relative z-10">Inicio</span>
                </motion.a>

                {/* Botón Menú - Naranja más intenso */}
                <motion.a 
                  href="#menu"
                  className="flex items-center gap-2 text-white px-4 py-3 rounded-xl bg-gradient-to-r from-[#FF9500] to-[#FF7B00] hover:from-[#FF7B00] hover:to-[#FF9500] transition-all font-medium backdrop-blur-sm shadow-md"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 4px 15px rgba(255, 149, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 0h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="relative z-10">Menú</span>
                </motion.a>
              </ul>
            </nav>

            {/* Logo central con efecto mejorado */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.08,
                rotateZ: [0, -2, 2, 0],
                transition: { duration: 0.5 }
              }}
              className="mx-4"
            >
              <div className="relative">
                <img 
                  src="/plazam-181w.webp" 
                  alt="Plaza Morena" 
                  className="h-16 md:h-20 object-contain relative z-10"
                />
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#70A959]/30 to-[#E88735]/30 -z-10 blur-md"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
              </div>
            </motion.div>
            
            {/* Botones lado derecho */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4 md:space-x-8">
                {/* Botón Eventos - Dorado vibrante */}
                <motion.a 
                  href="#eventos"
                  className="flex items-center gap-2 text-white px-4 py-3 rounded-xl bg-gradient-to-r from-[#FFC312] to-[#F79F1F] hover:from-[#F79F1F] hover:to-[#FFC312] transition-all font-medium backdrop-blur-sm shadow-md"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 4px 15px rgba(255, 195, 18, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="relative z-10">Eventos</span>
                </motion.a>

                {/* Botón Contacto - Rojo más vibrante */}
                <motion.a 
                  href="#contacto"
                  className="flex items-center gap-2 text-white px-4 py-3 rounded-xl bg-gradient-to-r from-[#EA2027] to-[#C23616] hover:from-[#C23616] hover:to-[#EA2027] transition-all font-medium backdrop-blur-sm shadow-md"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0px 4px 15px rgba(234, 32, 39, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="relative z-10">Contacto</span>
                </motion.a>
              </ul>
            </nav>
          </div>
          
          {/* Botón de menú móvil mejorado */}
          <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2">
            <motion.button 
              className="text-white bg-gradient-to-r from-[#70A959]/50 to-[#5A8A49]/30 p-3 rounded-full shadow-lg z-50"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -10, 10, 0],
                boxShadow: "0px 0px 15px rgba(112, 169, 89, 0.6)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" // Icono X cuando está abierto
                    : "M4 6h16M4 12h16m-7 6h7" // Icono hamburguesa cuando está cerrado
                  } 
                />
              </svg>
            </motion.button>
          </div>
        </header>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden flex flex-col"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-24"></div> {/* Espacio para el header */}
              <div className="flex flex-col items-center justify-start pt-8 pb-6">
                <motion.img 
                  src="/plazam-181w.webp" 
                  alt="Plaza Morena" 
                  className="h-24 mb-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
                
                <motion.nav className="w-full px-6">
                  <ul className="flex flex-col space-y-4 w-full">
                    {[
                      { name: "Inicio", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2", color: "from-[#4CD137] to-[#44BD32]" },
                      { name: "Menú", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 0h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", color: "from-[#FF9500] to-[#FF7B00]" },
                      { name: "Eventos", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", color: "from-[#FFC312] to-[#F79F1F]" },
                      { name: "Contacto", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "from-[#EA2027] to-[#C23616]" }
                    ].map((item, index) => (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1) }}
                        className="w-full"
                      >
                        <motion.a 
                          href={`#${item.name.toLowerCase()}`}
                          className={`flex items-center gap-3 text-white px-5 py-4 rounded-xl bg-gradient-to-r ${item.color} w-full`}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                          <span className="text-lg font-medium">{item.name}</span>
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>
                
                {/* Redes sociales */}
                <motion.div 
                  className="flex space-x-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a href="#" className="text-white hover:text-[#70A959] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#70A959] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </motion.div>
                
                {/* Botón para cerrar el menú */}
                <motion.button 
                  className="mt-auto mb-10 py-3 px-8 rounded-full bg-white text-[#70A959] font-bold text-lg shadow-lg"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Cerrar menú
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carrusel adaptativo - Versión escritorio vs móvil */}
        <div 
          className="slider relative w-full h-full overflow-hidden z-10" 
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Círculo rotativo - Solo visible en escritorio */}
          <motion.div 
            className="absolute top-1/2 left-[-50%] md:left-[-48%] sm:left-[-45%] w-[100vw] h-[100vw] md:w-[90vw] md:h-[90vw] sm:w-[85vw] sm:h-[85vw] rounded-full hidden sm:block"
            style={{ translateY: '-50%' }}
            animate={{ rotate: `${rotate + 180}deg` }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            {foodItems.map((item, index) => (
              <div 
                key={index} 
                className="absolute w-full h-full text-center" 
                style={{ rotate: `${60 * index}deg` }}
              >
                <motion.div 
                  className={`absolute h-[25vw] w-[25vw] md:h-[22vw] md:w-[22vw] sm:h-[20vw] sm:w-[20vw] left-0 top-1/2 -mt-[12.5vw] md:-mt-[11vw] sm:-mt-[10vw] overflow-hidden rounded-full ${active === index ? 'z-10' : 'z-0'} cursor-pointer`}
                  animate={{ 
                    scale: active === index ? 1.15 : 0.9,
                    filter: active === index ? 'brightness(1.1)' : 'brightness(0.9)',
                    boxShadow: active === index 
                      ? (index === 0 || item.isSpecial 
                          ? "none" 
                          : "0 0 1.5vw rgba(112, 169, 89, 0.6)") 
                      : "none"
                  }}
                  whileHover={{ 
                    scale: active === index ? 1.2 : 0.95,
                    filter: 'brightness(1.05)',
                  }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    setActive(index);
                    let diff = index - active;
                    if (diff > foodItems.length / 2) diff -= foodItems.length;
                    if (diff < -foodItems.length / 2) diff += foodItems.length;
                    setRotate(prev => prev + (diff * rotateAdd));
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                    {/* Si externalImages[index] está vacío, no renderizar la imagen en absoluto */}
                    {externalImages[index] ? (
                      <motion.img
                        src={externalImages[index]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        animate={{ 
                          scale: active === index ? 1.05 : 1,
                          rotate: 180
                        }}
                        transition={{ duration: 0.8 }}
                        onError={(e) => {
                          e.currentTarget.src = exampleImages[index];
                        }}
                      />
                    ) : (
                      // Si es el primer elemento y está vacío, usar el backgroundImage
                      <motion.img
                        src={item.backgroundImage}
                        alt={item.name}
                        className={index === 0 ? "hidden" : "w-full h-full object-cover"}
                        animate={{ 
                          scale: active === index ? 1.05 : 1,
                          rotate: 180
                        }}
                        transition={{ duration: 0.8 }}
                      />
                    )}
                    
                    {/* El gradiente solo aparece si hay una imagen */}
                    {externalImages[index] && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full"
                        animate={{ 
                          opacity: active === index ? 0.3 : 0.5
                        }}
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          
          {/* VISTA MÓVIL - Se eliminaron los controles de navegación inferiores */}
          <div className="block sm:hidden w-full h-full">
            <AnimatePresence mode="wait">
              {foodItems.map((item, index) => (
                active === index && (
                  <motion.div 
                    key={`mobile-${index}`}
                    className="flex flex-col h-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Imagen centrada en la parte superior */}
                    <motion.div 
                      className="w-full h-[45vh] flex items-center justify-center overflow-hidden relative mt-16" 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {index === 0 ? (
                        <motion.img
                          src="/plazam-181w.webp"
                          alt="Plaza Morena"
                          className="w-[70%] max-h-[80%] object-contain"
                          animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      ) : (
                        <motion.div 
                          className="w-full h-full" 
                          style={{ backgroundColor: item.color + '33' }}
                        >
                          <motion.img
                            src={externalImages[index] || item.backgroundImage}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            animate={{ scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            onError={(e) => {
                              e.currentTarget.src = exampleImages[index];
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </motion.div>
                      )}
                    </motion.div>
                    
                    {/* Panel descriptivo */}
                    <motion.div 
                      className={index === 0 
                        ? "px-6 py-8 mb-auto" 
                        : "bg-white/90 backdrop-blur-md px-6 py-8 mb-auto rounded-t-3xl mt-[-20px] relative z-10 shadow-lg"
                      }
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {index === 0 ? (
                        <div className="flex flex-col items-center">
                          <motion.h2 
                            className={`${amatic.className} text-5xl text-center text-[#70A959] font-bold mb-8`}
                            animate={{
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse" 
                            }}
                          >
                            Auténtica Cocina Mexicana
                          </motion.h2>
                        </div>
                      ) : (
                        <>
                          <motion.h1 
                            className={`${amatic.className} text-[#70A959] text-5xl font-black mb-4 text-center`}
                          >
                            {item.name}
                          </motion.h1>
                          <div className="w-1/2 h-1 mx-auto bg-gradient-to-r from-transparent via-[#70A959]/70 to-transparent rounded-full mb-4"></div>
                          <p className="text-gray-800 font-medium text-base leading-relaxed mb-6">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className={`${pacifico.className} text-[#DAA520] text-3xl font-bold`}>
                              {item.price}
                            </span>
                            
                            <motion.button 
                              className="py-2 px-5 rounded-full bg-[#70A959] text-white font-medium text-sm shadow-md"
                              whileTap={{ scale: 0.95 }}
                            >
                              Ordenar
                            </motion.button>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Panel descriptivo - Solo visible en escritorio */}
          <div ref={heroTextRef} className="absolute right-[5%] top-[15%] w-[45%] text-left hidden sm:block">
            <AnimatePresence mode="wait">
              {foodItems.map((item, index) => (
                active === index && (
                  <motion.div 
                    key={`item-${index}`} 
                    className={index === 0 
                      ? "carousel-item p-5 md:p-8 rounded-2xl bg-transparent border-none shadow-none" // Sin blur, sin fondo para el primero
                      : "carousel-item backdrop-blur-[2px] p-5 md:p-8 rounded-2xl bg-white/10 border border-white/20 shadow-xl"
                    }
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index === 0 ? (
                      // Solo imagen para el primer elemento
                      <motion.div className="flex justify-center">
                        <motion.img
                          src="/plazam-181w.webp"
                          alt="Plaza Morena"
                          className="w-full max-w-[400px] object-contain mx-auto"
                          animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      </motion.div>
                    ) : (
                      <>
                        {/* Título mejorado con sombra y tamaño aumentado */}
                        <motion.h1 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className={`${amatic.className} text-[#70A959] text-7xl sm:text-6xl xs:text-5xl rotate-1 transform font-black mb-4 text-center drop-shadow-md`}
                          whileHover={{ rotate: 0, scale: 1.02 }}
                        >
                          {item.name}
                        </motion.h1>
                        
                        {/* Línea decorativa */}
                        <div className="w-1/2 h-1 mx-auto bg-gradient-to-r from-transparent via-[#70A959]/70 to-transparent rounded-full mb-6"></div>
                        
                        {/* Descripción mejorada con texto más grueso y legible */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="my-6 md:my-8"
                        >
                          <p className="text-gray-800 font-medium text-lg md:text-xl leading-relaxed tracking-wide drop-shadow-sm">
                            {item.description}
                          </p>
                        </motion.div>
                        
                        {/* Contenedor de precio y botón */}
                        <div className="flex flex-wrap justify-between items-center mt-8">
                          {/* Precio */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-4 text-left"
                          >
                            <span className={`${pacifico.className} text-[#DAA520] text-4xl font-bold drop-shadow-md`}>
                              {item.price}
                            </span>
                          </motion.div>
                          
                          {/* Botón mejorado */}
                          <motion.button 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="py-3 px-8 rounded-full bg-[#70A959] text-white border-none font-medium text-lg shadow-lg hover:bg-[#5A8A49] hover:scale-105 transition-all duration-300"
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0px 5px 15px rgba(112, 169, 89, 0.4)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Ordenar ahora
                          </motion.button>
                        </div>
                      </>
                    )}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Botones de navegación - Solo visibles en escritorio */}
          <motion.button 
            onClick={prevSlider} 
            className="absolute border-none top-1/2 left-[3%] text-[60px] bg-transparent text-[#70A959] font-bold opacity-70 hover:opacity-100 transform z-20 hidden sm:block"
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Anterior plato"
          >
            &lt;
          </motion.button>
          <motion.button 
            onClick={nextSlider} 
            className="absolute border-none top-1/2 left-[10%] text-[60px] bg-transparent text-[#70A959] font-bold opacity-70 hover:opacity-100 transform z-20 hidden sm:block"
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Siguiente plato"
          >
            &gt;
          </motion.button>

          {/* Indicadores de navegación para el carrusel */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 hidden sm:flex">
            {foodItems.map((_, idx) => (
              <motion.button
                key={`dot-${idx}`}
                className={`w-3 h-3 rounded-full transition-all ${active === idx ? 'bg-[#70A959]' : 'bg-gray-400'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: active === idx ? 1.25 : 1 }}
                onClick={() => {
                  setActive(idx);
                  // Calcular la rotación necesaria
                  const diff = idx - active;
                  setRotate(prev => prev + (diff * rotateAdd));
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}