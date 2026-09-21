"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Bell, ArrowLeft, Flower2, RotateCcw, Mail, Heart } from "lucide-react"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

// --------------------------------------------------------
// DATOS DE TUS FOTOS (Tus 24 fotos originales)
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
  { id: 24, src: "/foto24.jpg", text: "Prontooooo, con 2 piñola coladaaaa con pilaaaa de lechaaa hahahahah" }
];

function PolaroidCard({ memory }: { memory: { src: string; text: string } }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-72 h-[400px] cursor-pointer" style={{ perspective: 1200 }} onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }} animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}>
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
// COMPONENTE: BOUQUET DE GIRASOLES VECTORIAL (CODEADO)
// --------------------------------------------------------
// --------------------------------------------------------
// COMPONENTE: BOUQUET DE GIRASOLES (IMAGEN ANIMADA)
// --------------------------------------------------------
function SunflowerBouquet() {
  return (
    <motion.div 
      initial={{ scale: 0, y: 100, opacity: 0 }} 
      animate={{ scale: 1, y: 0, opacity: 1 }} 
      transition={{ type: "spring", damping: 12, duration: 1.2 }}
      className="relative w-80 h-96 flex flex-col items-center justify-center mb-6"
    >
      {/* Animación continua de flotación suave */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative w-full h-full"
      >
        {/* Un pequeño resplandor detrás del ramo */}
        <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full scale-75 -z-10" />
        
        {/* Tu imagen 3D sin fondo */}
        <Image 
          src="/bouquet.png" 
          alt="Ramo de girasoles" 
          fill 
          className="object-contain drop-shadow-2xl" 
        />
      </motion.div>
    </motion.div>
  );
}

// --------------------------------------------------------
// APLICACIÓN PRINCIPAL
// --------------------------------------------------------
export default function AnniversaryApp() {
  const [step, setStep] = useState(0); 
  const [showError, setShowError] = useState(false);
  const [isSure, setIsSure] = useState(false);
  
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => setShowNotification(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

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

  const throwRoses = () => {
    const scalar = 3;
    const rose = confetti.shapeFromText({ text: '🌹', scalar });
    const end = Date.now() + 3000;
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff0000'], shapes: [rose], scalar: 2 });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff0000'], shapes: [rose], scalar: 2 });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  const bgClass = step >= 10 
    ? "bg-gradient-to-br from-[#fff3b0] to-[#fce043]" 
    : "bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc]";

  return (
    <main className={`min-h-screen ${step === 0 ? 'bg-gray-900' : bgClass} flex flex-col items-center justify-center p-6 font-sans text-gray-900 overflow-hidden relative transition-colors duration-1000`}>
      <AnimatePresence mode="wait">

        {/* PANTALLA 0: SPLIT SCREEN (INICIO) */}
        {step === 0 && (
          <motion.div key="screen0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col md:flex-row w-full h-full m-0 p-0">
            
            {/* Mitad Flores Amarillas */}
            <motion.div 
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => {
                setStep(10);
                confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 }, colors: ['#FACC15', '#FEF08A', '#CA8A04'] });
              }}
              className="flex-1 bg-gradient-to-br from-[#fff3b0] to-[#fce043] flex flex-col items-center justify-center cursor-pointer md:border-r-4 border-b-4 md:border-b-0 border-white/30 transition-transform shadow-2xl relative overflow-hidden group"
            >
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                <Flower2 size={80} className="text-yellow-600 mb-6 drop-shadow-md group-hover:scale-110 transition-transform" />
              </motion.div>
              <h2 className="text-4xl font-extrabold text-yellow-800 drop-shadow-sm text-center px-4">Flores Amarillas</h2>
            </motion.div>

            {/* Mitad Renovar Contrato */}
            <motion.div 
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => setStep(1)}
              className="flex-1 bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] flex flex-col items-center justify-center cursor-pointer transition-transform shadow-2xl relative overflow-hidden group"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 overflow-hidden relative border-4 border-white group-hover:scale-110 transition-transform">
                <Image src="/logo.jpg" alt="Bebo FC Logo" fill className="object-cover" />
              </div>
              <h2 className="text-4xl font-extrabold text-white drop-shadow-md text-center px-4">Renovar Contrato</h2>
            </motion.div>

          </motion.div>
        )}

        {/* =========================================
            RUTA: FLORES AMARILLAS 
           ========================================= */}
        
        {/* PANTALLA 10: BOUQUET DE GIRASOLES + BOTONES */}
        {step === 10 && (
          <motion.div key="screen10" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -50 }} className="flex flex-col items-center w-full max-w-md p-6 relative z-10 text-center">
            
            <h1 className="text-3xl font-extrabold mb-2 text-yellow-900 drop-shadow-sm">Para ti, mi amor 🌻</h1>
            
            {/* El ramo codeado de girasoles */}
            <SunflowerBouquet />

            <div className="flex flex-col gap-4 w-full mt-2">
              <button 
                onClick={() => setStep(12)} 
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95"
              >
                <Mail size={22} /> Abrir nota
              </button>

              <button 
                onClick={() => setStep(0)} 
                className="bg-white/80 hover:bg-white text-yellow-800 font-bold py-3 px-6 rounded-full shadow-md transition-all"
              >
                Volver al inicio
              </button>
            </div>
          </motion.div>
        )}

        {/* PANTALLA 12: NOTA DE FLORES AMARILLAS */}
        {step === 12 && (
          <motion.div key="screen12" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: 50 }} className="flex flex-col items-center w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative z-10">
            <button onClick={() => setStep(10)} className="absolute top-4 left-4 text-gray-400 hover:text-yellow-600 transition-colors">
              <ArrowLeft size={28} />
            </button>

            <h2 className="text-3xl font-bold text-yellow-700 mb-6 mt-4">Una pequeña nota 💛</h2>
            
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed mb-8 w-full font-serif italic text-justify">
              <p>Mi amor,</p>
              <p>Dicen que regalar flores amarillas significa querer compartir la vida entera con alguien. No hay nadie en este mundo con quien prefiera caminar de la mano, reír y construir momentos que contigo.</p>
              <p>Gracias por iluminar mis días con tu sonrisa. ¡Te amo muchísimo!</p>
              <p className="font-bold text-right mt-4">- Diego</p>
            </div>

            <div className="flex gap-4 w-full">
              <button onClick={() => setStep(10)} className="flex-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 font-bold py-3 rounded-full transition-colors">
                Ver Bouquet
              </button>
              <button onClick={() => setStep(0)} className="flex-1 bg-yellow-600 text-white hover:bg-yellow-700 font-bold py-3 rounded-full transition-colors shadow-md">
                Inicio
              </button>
            </div>
          </motion.div>
        )}


        {/* =========================================
            RUTA: BEBO FC (Renovar Contrato) 
           ========================================= */}
        
        {step === 1 && (
          <motion.div key="screen1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center max-w-md w-full relative z-10">
            <button onClick={() => setStep(0)} className="absolute -top-6 left-0 text-white/70 hover:text-white bg-black/10 p-2 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </button>
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl mb-8 overflow-hidden relative border-4 border-white">
               <Image src="/logo.jpg" alt="Bebo FC Logo" fill className="object-cover" />
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

        {step === 3 && (
           <motion.div key="screen3" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.8 }} className="flex flex-col items-center w-full max-w-sm relative">
             <h2 className="text-3xl font-extrabold mb-8 text-white drop-shadow-md text-center">Nuestro Recorrido ❤️</h2>
             
             <div className="w-72 relative">
               <Swiper
                 effect={"cards"}
                 grabCursor={true}
                 modules={[EffectCards]}
                 className="w-full"
                 onSwiper={setSwiperInstance}
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
               
               <button 
                 onClick={() => swiperInstance?.slideTo(0)} 
                 className="flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm transition-all"
               >
                 <RotateCcw size={18} /> Volver a la primera
               </button>
             </div>
           </motion.div>
        )}

        {step === 4 && (
          <motion.div key="screen4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: 50 }} className="flex flex-col items-center w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative overflow-y-auto max-h-[90vh]">
            <button onClick={() => setStep(3)} className="absolute top-4 left-4 text-gray-400 hover:text-indigo-600 transition-colors">
              <ArrowLeft size={28} />
            </button>

            <h2 className="text-3xl font-bold text-indigo-600 mb-6 mt-4">Para mi amor...</h2>
            
            <div className="text-gray-700 space-y-4 text-lg leading-relaxed mb-10 w-full font-serif italic text-justify">
              <p>Hola mi vida,</p>
              <p>Lamento no haber podido estar justo a tu lado para este momento y poder celebrar juntos nuestro cuarto aniversario, pero desarrollé esto esperando subirte los ánimos, mi amorcito lindo.</p>
              <p>Si llegaste hasta este punto, significa que firmaste por 4 añitos más con el Bebo Fútbol Club. Espero que estés emocionada por esta nueva travesía en el equipo. Tu primer contrato de parte de la administración fue un rotundo éxito. Estoy muuuyy emocionado en esta nueva etapa, amor. Tiene sus retos, claro que sí, empezando con el rumbo de nuestras vidas, especialmente de la nueva licenciada en mercadotecnia. Pero créeme, esto no es na', vamos a buscarle la vuelta, echar pa' lante y llegar muchoooo más lejos de lo que hemos llegado hasta ahora. Mirando atrás, había una chica que dudaba de este momento, si acaso se iba a graduar, y mira ahora. Cada cosa tiene sus dificultades y complicaciones sin excepciones. Ya verás que echaremos pa' lante, bb.</p>
              <p>Espero que te haya gustado mucho tu regalito, amor. Así mismo lo hice, lleno de emoción, viendo las fotos y mirando atrás me dio mucha nostalgia, y escribirte esta carta también me llena el corazón. Yo personalmente me comprometo a mejorar cada día como tu amigo, novio, futuro esposo y pareja de vida. Trabajaré en convertirme en esa persona que tanto te mereces porque, aunque no lo creas, lo que soy hoy en día no es ni la mitad de la pareja que tú te mereces.</p>
              <p>Con mucho y todo el amooooorrrr del mundo te dedico esto. Te amo bebita!</p>
              <p className="font-bold text-right mt-4">Bebo</p>
              <p className="font-bold text-right mt-4">Diego Abreu</p>
            </div>

            <button onClick={throwRoses} className="bg-pink-100 text-pink-600 border-2 border-pink-300 hover:bg-pink-200 px-6 py-3 rounded-full flex items-center gap-3 font-bold text-lg shadow-md hover:scale-105 transition-transform active:scale-95">
              <Flower2 size={24} /> ¡Toca para una sorpresa!
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNotification && step === 3 && (
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50, scale: 0.8 }} className="absolute top-8 bg-white p-4 rounded-xl shadow-2xl border border-indigo-100 flex items-center gap-4 z-50 w-11/12 max-w-sm">
            <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 animate-pulse"><Bell size={24} /></div>
            <div className="flex-1"><h4 className="font-bold text-gray-800 text-lg">¡Tienes correo! 💌</h4><p className="text-gray-600 text-sm">Te ha llegado una carta especial.</p></div>
            <button onClick={() => { setShowNotification(false); setStep(4); }} className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2">Abrir</button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}