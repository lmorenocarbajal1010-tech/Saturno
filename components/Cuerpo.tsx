import React from "react";
import Image from "next/image";

export default function Cuerpo() {
  return (
    <div className="min-h-screen w-full">

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-[#ededed] min-h-screen flex flex-col items-center justify-start pt-32 relative overflow-hidden">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />

  {/* TEXTO ARRIBA (no encima) */}
  <div className="z-20 mb-10 text-center">
    <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
      Todo lo que quieras al mejor precio
    </h1>
  </div>

  {/* IMAGEN DE SATURNO ABAJO */}
  <div className="flex justify-center relative z-10">
    <Image
      src="/Saturno.png"
      alt="Saturno"
      width={1200}
      height={1200}
      className="rounded-2xl drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
    />
  </div>

</section>


      {/* PRODUCTOS */}
      <section className="bg-[#131313] w-full py-16 px-6">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Productos Destacados
        </h2>

        <div className="flex justify-center">
          <div className="max-w-xs bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">

            {/* Imagen del producto */}
            <img
              src="/Playeras/playera1.jpg"
              alt="Playera"
              className="w-full h-64 object-cover"
            />

            {/* Info */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white text-center">
                Playera Cool
              </h3>

              <p className="text-md text-gray-300 text-center my-2">$19.99</p>

              <div className="flex justify-center mt-4">
                <button
                  className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
