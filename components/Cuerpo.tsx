"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Cuerpo() {
  const urlBase = "http://localhost:8080/saturno-app/productos";

  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const response = await axios.get(urlBase);
      setProductos(response.data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  return (
    <div className="min-h-screen w-full">

      {/* HERO */}
    <section className="bg-[#0a0a0a] text-[#ededed] min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />

        <div className="z-20 mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            
          </h1>
        </div>

        <div className="w-full flex justify-center items-center relative z-0">
          <Image
            src="/Saturno.png"
            alt="Saturno"
            width={3000}
            height={3000}
            className="w-full max-w-5xl rounded-2xl drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"

          />
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="bg-[#131313] w-full py-16 px-6">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Productos Destacados
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="max-w-xs bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={producto.urlImagen}
                alt={producto.nombre}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white text-center">
                  {producto.nombre}
                </h3>

                {producto.talla && (
                  <p className="text-sm text-gray-300 text-center font-medium">
                    Talla: {producto.talla}
                  </p>
                )}

                <p className="text-md text-gray-300 text-center my-2">
                  ${producto.precio}
                </p>

                <p className="text-sm text-gray-400 text-center mb-4">
                  {producto.descripcion}
                </p>

                <div className="flex justify-center">
                  <button className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-200">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

