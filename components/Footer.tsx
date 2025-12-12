"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-200 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Saturno Studio</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Somos una boutique creativa especializada en diseño web y experiencias visuales inspiradas en el cosmos. 
            Creamos productos con atención al detalle y enfoque en usabilidad.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {/* Social icons - coloca los SVG/PNG en /public/icons/ */}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Image src="/icons/twitter.svg" alt="Twitter" width={28} height={28} />
            </a>

            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="Instagram" width={28} height={28} />
            </a>

            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/icons/facebook.svg" alt="Facebook" width={28} height={28} />
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={28} height={28} />
            </a>

          </div>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contacto</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <span className="block text-gray-400">Email</span>
              <a href="mailto:contacto@saturno.studio" className="break-all">contacto@saturno.studio</a>
            </li>
            <li>
              <span className="block text-gray-400">Teléfono</span>
              <a href="tel:+5215512345678">+52 1 55 1234 5678</a>
            </li>
            <li>
              <span className="block text-gray-400">Dirección</span>
              <span>Agropecuaria 123, Iztacalco, CDMX</span>
            </li>
          </ul>

          <div className="mt-6">
            <h5 className="text-sm text-gray-400 mb-2">Horario</h5>
            <p className="text-sm">Lun - Vie: 09:00 - 18:00</p>
          </div>
        </div>

        {/* Newsletter / Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Sobre la empresa</h4>
          <p className="text-sm text-gray-400 mb-4">
            Saturno Studio nace de la pasión por el diseño espacial y la tecnología. Ofrecemos desarrollo web, branding y animaciones 3D.
          </p>

          <nav className="flex flex-col gap-2 text-sm">
            <a href="#servicios" className="text-gray-300 hover:underline">Servicios</a>
            <a href="#proyectos" className="text-gray-300 hover:underline">Proyectos</a>
            <a href="#equipo" className="text-gray-300 hover:underline">Equipo</a>
            <a href="#contacto" className="text-gray-300 hover:underline">Contacto</a>
          </nav>

          <div className="mt-6">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex gap-2">
              <input
                id="email"
                type="email"
                placeholder="Tu mejor correo"
                className="w-full px-3 py-2 rounded-md bg-white/5 placeholder:text-gray-400 text-sm focus:outline-none"
              />
              <button className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium">Suscribir</button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Saturno Studio. Todos los derechos reservados.</p>
          <div className="mt-3 md:mt-0 flex items-center gap-4">
            <a href="/aviso-privacidad" className="hover:underline">Aviso de privacidad</a>
            <a href="/terminos" className="hover:underline">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
