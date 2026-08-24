"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Bell, MailOpen, ArrowLeft, Flower2, RotateCcw } from "lucide-react"; // Íconos

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

// --------------------------------------------------------
// DATOS DE TUS FOTOS (Tus 25 fotos)
// --------------------------------------------------------
const memories = [
  { id: 1, src: "/foto1.jpeg", text: "GABIAAAOOOO! Donde todo empezo eeeh, Y matchinggg, somos almas gemelas, que noche esa" },
  { id: 2, src: "/foto2.jpeg", text: "Otraaa mas de gabiao, porque no. Ese dia andaba tu prima y el negro, y nos cayeron los monos. Por si dudas si me gustas, la mancha del pantalon no era comida" },
  { id: 3, src: "/foto3.jpeg", text: "No se si fue el primer gift, realmente, lamento perderla una de ellas. Pero genuinamente me lleno el corazon este regalo" },
  { id: 4, src: "/foto4.jpeg", text: "First christmas I think, creeeooo, pero na una de nuestras primeras salidas." },
  { id: 5, src: "/foto5.jpeg", text: "Miralaa que bella, loco por esa chicaaaa" },
  { id: 6, src: "/foto6.jpeg", text: "Hartica y contentaaa, seguro comimos quipes ese dia, que dices tu?" },
  { id: 7, src: "/foto7.jpeg", text: "El cumple de la bebaaaa, y esa foto iconica en mi galeria, esa mirada wao, si te digooooo" },
  { id: 8, src: "/foto8.jpeg", text: "No se que habia ese dia que andaba asi, pero me encanta, la camisa, la foto y obviamente la chica" },
  { id: 9, src: "/foto9.jpeg", text: "Una tu solita, porque no. Donde estaran esos lentes? Te ves bellaaaa" },
  { id: 10, src: "/foto10.jpeg", text: "La beba intentaaandoooo tirar el arte, pero la del loco sabe mejoooll, no acepto discusiones" },
  { id: 11, src: "/foto11.jpeg", text: "No podia hacer esto, sin ponerte durmiendo, mi bella durmiente..." },
  { id: 12, src: "/foto12.jpeg", text: "Y esta que quedo loquisima jejejeje" },
  { id: 13, src: "/foto13.jpeg", text: "Ultima, lo prometo. Ibas callendo en el sueño parece HAHAHAHAH" },
  { id: 14, src: "/foto14.jpeg", text: "Aeteticcc, en las mesedoras, que si hablaran contaraaaan muchas cosassss" },
  { id: 15, src: "/foto15.jpeg", text: "Eooo, y ese papi, obvio con su mamiiii, diab. Quien diria era aputando 3 meses y vamos por 4 años. CALLATE ADONIIIII!" },
  { id: 16, src: "/foto16.jpeg", text: "Primera playita, minutos antes de pal de chapuzoneeeee bacanooo. Repetiria, ojala alguien dijera lo mismo" },
  { id: 17, src: "/foto17.jpeg", text: "Buscando las fotos encontre esta. Nunca la borre, aun tengo ese sueño. Nadie sabe" },
  { id: 18, src: "/foto18.jpeg", text: "Siiin palabraaasssss, ella llego a casa bien cenada y perdiiiiidaaaaaaa. ARRIBAAAA EL EQUIPOOOO AZUUUULLLLL" },
  { id: 19, src: "/foto19.jpeg", text: "Una chuleaita mami como te gustaaa, vennnn echa pa acaaaa" },
  { id: 20, src: "/foto20.jpeg", text: "Tu sabe subiendo al penthouse, hahahahaha" },
  { id: 21, src: "/foto21.jpeg", text: "Que vivaaaa el amooooor" },
  { id: 22, src: "/foto22.jpeg", text: "OFICIALMENTEEEE, MI licenciadaaaaaaaa!! hahahahahaha, que orgullo verte lograr y triunfar cosas mi vida" },
  { id: 23, src: "/foto23.jpeg", text: "Eta pa ultimo! con eso do palito e coco, si sin****mos prendiamos fuegooo coño" },
];

// --------------------------------------------------------
// COMPONENTE: POLAROID 3D
// --------------------------------------------------------
function PolaroidCard({ memory }: { memory: { src: string; text: string } }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-72 h-[400px] cursor-pointer"
      style={{ perspective: 1200 }} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="absolute w-full h-full bg-white p-4 rounded-md shadow-2xl flex flex-col" style={{ backfaceVisibility: "hidden" }}>
          <div className="relative w-full flex-grow bg-gray-200 overflow-hidden rounded-sm">
            <Image src={memory.src} alt="Nuestra foto" fill className="object-cover" />
          </div>
          <div className="h-16 flex items-center justify-center">
            <span className="text-gray-400 text-sm italic">Toca para voltear</span>
          </div>
        </div>

        <div className="absolute w-full h-full bg-white p-6 rounded-md shadow-2xl flex items-center justify-center text-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <p className="text-xl text-gray-800 font-medium leading-relaxed">{memory.text}</p>
        </div>
      </motion.div>
    </div>
  );
}

// --------------------------------------------------------
// APLICACIÓN PRINCIPAL
// --------------------------------------------------------
export default function AnniversaryApp() {
  const [step, setStep] = useState(1);
  const [showError, setShowError] = useState(false);
  const [isSure, setIsSure] = useState(false);
  
  // Nuevos estados
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [showNotification, setShowNotification] = useState(false);

  // Lógica para mostrar la notificación a los 5 segundos de llegar a la pantalla de fotos
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setShowNotification(true);
      }, 5000); // 5000 ms = 5 segundos
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Funciones Pantalla 1 y 2
  const handleNoClick = () => {
    setShowError(true);
    setTimeout(() => setShowError(false), 1500);
  };

  const handleAcceptClick = () => {
    if (!isSure) {
      setIsSure(true);
    } else {
      confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 }, colors: ['#e0c3fc', '#8ec5fc', '#ffffff', '#ff6b6b'] });
      setTimeout(() => setStep(3), 1500);
    }
  };

  // Función para las rosas
  const throwRoses = () => {
    // Usamos canvas-confetti con emojis de rosas
    const scalar = 3;
    const rose = confetti.shapeFromText({ text: '🌹', scalar });
    
    // Lluvia de rosas desde ambos lados
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000'],
        shapes: [rose],
        scalar: 2
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000'],
        shapes: [rose],
        scalar: 2
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] flex flex-col items-center justify-center p-6 font-sans text-gray-900 overflow-hidden relative">
      
      <AnimatePresence mode="wait">
        
        {/* PANTALLA 1 */}
        {step === 1 && (
          <motion.div key="screen1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center max-w-md w-full">
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl mb-8 overflow-hidden relative border-4 border-white">
               <Image src="/logo.png" alt="Bebo FC Logo" fill className="object-cover" />
            </div>
            <h1 className="text-4xl font-extrabold mb-10 text-white drop-shadow-md">¿Quieres renovar contrato?</h1>
            <div className="flex gap-6 w-full justify-center">
              <button onClick={() => setStep(2)} className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold text-xl py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">Sí</button>
              <motion.button onClick={handleNoClick} animate={showError ? { x: [-10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.4 }} className="bg-white/30 text-white border-2 border-white hover:bg-white/40 font-bold text-xl py-3 px-10 rounded-full shadow-lg transition-transform active:scale-95">No</motion.button>
            </div>
            <div className="h-12 mt-6">
              {showError && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-white font-medium bg-red-500/80 px-6 py-2 rounded-full shadow-sm">Respuesta incorrecta, intente de nuevo 😉</motion.p>}
            </div>
          </motion.div>
        )}

        {/* PANTALLA 2 */}
        {step === 2 && (
           <motion.div key="screen2" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center max-w-md w-full">
             <motion.div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-white relative bg-white/30" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
               <Image src="/jersey.jpg" alt="Camiseta Beba 25" fill className="object-cover" />
             </motion.div>
             <h2 className="text-4xl font-extrabold mb-10 text-white drop-shadow-md">¿Qué dices, 4 años más?</h2>
             <motion.button onClick={handleAcceptClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`font-bold text-xl py-4 px-12 rounded-full shadow-xl transition-colors duration-500 overflow-hidden ${isSure ? "bg-pink-500 text-white border-2 border-pink-400" : "bg-white text-indigo-600"}`}>
               <AnimatePresence mode="wait">
                 <motion.span key={isSure ? "sure" : "accept"} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }} className="block">
                   {isSure ? "¿Estás segura?" : "Acepto"}
                 </motion.span>
               </AnimatePresence>
             </motion.button>
           </motion.div>
        )}

        {/* PANTALLA 3: FOTOS */}
        {step === 3 && (
           <motion.div key="screen3" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.8 }} className="flex flex-col items-center w-full max-w-sm relative">
             <h2 className="text-3xl font-extrabold mb-8 text-white drop-shadow-md text-center">Nuestro Recorrido ❤️</h2>
             
             <div className="w-72 relative">
               <Swiper
                 effect={"cards"}
                 grabCursor={true}
                 modules={[EffectCards]}
                 className="w-full"
                 onSwiper={setSwiperInstance} // Guardamos la instancia para poder controlarla
               >
                 {memories.map((memory) => (
                   <SwiperSlide key={memory.id} className="bg-transparent flex justify-center">
                     <PolaroidCard memory={memory} />
                   </SwiperSlide>
                 ))}
               </Swiper>
             </div>
             
             <div className="flex flex-col items-center gap-4 mt-8">
               <p className="text-white/80 font-medium text-sm text-center">Desliza para ver más • Toca la foto para leer</p>
               
               {/* Botón para regresar a la primera foto */}
               <button 
                 onClick={() => swiperInstance?.slideTo(0)} 
                 className="flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm transition-all"
               >
                 <RotateCcw size={18} /> Volver a la primera
               </button>
             </div>
           </motion.div>
        )}

        {/* PANTALLA 4: LA CARTA */}
        {step === 4 && (
          <motion.div key="screen4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: 50 }} className="flex flex-col items-center w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative">
            
            <button onClick={() => setStep(3)} className="absolute top-4 left-4 text-gray-400 hover:text-indigo-600 transition-colors">
              <ArrowLeft size={28} />
            </button>

            <h2 className="text-3xl font-bold text-indigo-600 mb-6 mt-4">Para mi amor...</h2>
            
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed mb-10 w-full font-serif italic text-justify">
              <p>Hola mi vida,</p>
              <p>Aquí escribirás todo lo que sientes. Este es un texto de prueba que puedes cambiar luego en el código. Dile lo mucho que la amas, lo orgulloso que estás de estos 4 años juntos, y todo lo que significa para ti.</p>
              <p>Cada recuerdo de esas fotos es un tesoro para mí. Eres el mejor fichaje que ha hecho el Bebo FC en su historia. ¡Te amo con todo mi corazón!</p>
              <p className="font-bold text-right mt-4">- Tu nombre aquí</p>
            </div>

            {/* Botón de Flores */}
            <button onClick={throwRoses} className="bg-pink-100 text-pink-600 border-2 border-pink-300 hover:bg-pink-200 px-6 py-3 rounded-full flex items-center gap-3 font-bold text-lg shadow-md hover:scale-105 transition-transform active:scale-95">
              <Flower2 size={24} /> ¡Toca para una sorpresa!
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NOTIFICACIÓN FLOTANTE (Aparece sobre la pantalla 3) */}
      <AnimatePresence>
        {showNotification && step === 3 && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="absolute top-8 bg-white p-4 rounded-xl shadow-2xl border border-indigo-100 flex items-center gap-4 z-50 w-11/12 max-w-sm"
          >
            <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 animate-pulse">
              <Bell size={24} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 text-lg">¡Tienes correo! 💌</h4>
              <p className="text-gray-600 text-sm">Te ha llegado una carta especial.</p>
            </div>
            <button 
              onClick={() => {
                setShowNotification(false);
                setStep(4);
              }}
              className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2"
            >
              Abrir
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}