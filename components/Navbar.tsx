"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 px-4 flex items-center justify-between bg-black/70 backdrop-blur-md">

      {/* LOGO */}
      <div className="flex items-center gap-4">
        <Image
          src="/Saturno.png"
          alt="Mi logo"
          width={180}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
          height={180}
          className="rounded-xl"
        />
      </div>                                                                                                                    

      {/* BUSCADOR DESKTOP */}
      <div className="hidden md:flex flex-1 justify-center px-6">
        <input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          type="text"
          placeholder="Buscar productos..."
          className="w-96 px-4 py-2 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none"
        />
      </div>

      {/* BOTÓN HAMBURGUESA (solo móvil) */}
      <button
        className="md:hidden text-white p-2 border border-white/40 rounded-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
        </svg>
      </button>

      {/* MENÚ DESKTOP */}
      <ul className="hidden md:flex gap-4 text-white">
        <li className="relative group">
          <button className="px-4 py-2 rounded-lg border border-white/40 hover:bg-white/10 backdrop-blur-sm transition">
            Categorías
          </button>

          <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-black/60 backdrop-blur-md border border-white/20 rounded-lg p-2 w-40 shadow-lg">
            <li><a className="px-3 py-2 rounded-md hover:bg-white/10" href="#">Gym Rat</a></li>
            <li><a className="px-3 py-2 rounded-md hover:bg-white/10" href="#">Anime</a></li>
            <li><a className="px-3 py-2 rounded-md hover:bg-white/10" href="#">Niños</a></li>
            <li><a className="px-3 py-2 rounded-md hover:bg-white/10" href="#">Mascotas</a></li>
          </ul>
        </li>
      </ul>

      {/* LOG IN + CARRITO DESKTOP */}
      <div className="hidden md:flex items-center gap-4">

        <a
          href="#"
          className="px-6 py-2 rounded-lg border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition"
        >
          Log In
        </a>

        <button
          className="relative p-3 rounded-lg border border-white/40 hover:bg-white/10 backdrop-blur-sm transition"
        >
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={`${menuOpen ? "flex" : "hidden"} md:hidden flex-col gap-4 mt-4 text-white w-full absolute top-24 left-0 bg-black/70 px-4 py-4 backdrop-blur-md rounded-lg`}
      >

        {/* BUSCADOR MÓVIL */}
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full px-4 py-2 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none"
        />

        <details className="px-4 py-2 rounded-lg border border-white/40 backdrop-blur-sm">
          <summary className="cursor-pointer">Categorías</summary>
          <ul className="mt-2 flex flex-col gap-2">
            <li><a href="#" className="px-3 py-2 hover:bg-white/10 rounded-md">Gym Rat</a></li>
            <li><a href="#" className="px-3 py-2 hover:bg-white/10 rounded-md">Anime</a></li>
            <li><a href="#" className="px-3 py-2 hover:bg-white/10 rounded-md">Niños</a></li>
            <li><a href="#" className="px-3 py-2 hover:bg-white/10 rounded-md">Mascotas</a></li>
          </ul>
        </details>

        <a
          className="px-6 py-2 rounded-lg border border-white/40 hover:bg-white/10 backdrop-blur-sm transition"
          href="#"
        >Log In</a>

        <button
          className="p-3 rounded-lg border border-white/40 hover:bg-white/10 backdrop-blur-sm transition flex items-center w-fit"
        >
          <ShoppingCart className="w-6 h-6 mr-2" /> Carrito
        </button>

      </div>
    </nav>
  );
}
