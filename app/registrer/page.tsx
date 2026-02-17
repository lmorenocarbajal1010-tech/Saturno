"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import AuthFooter from '../../components/AuthFooter'

export default function PageRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor completa todos los campos')
      return
    }

    if (!email.includes('@')) {
      setError('Por favor ingresa un email válido')
      return
    }

    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: name,      // 👈 usa el mismo nombre que tu DTO en Spring
          email: email,
          password: password
        }),
      })

      const data = await response.text()

      if (!response.ok) {
        throw new Error(data || 'Error al registrar usuario')
      }

      setSuccess('Cuenta creada correctamente 🎉')

      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')

      setTimeout(() => {
        window.location.href = '/login'
      }, 1500)

    } catch (err: any) {
      setError(err.message || 'Error al crear la cuenta')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a]">

      <main className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 p-8 sm:p-10">

            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Crea tu cuenta
              </h1>
              <p className="text-gray-300 text-sm sm:text-base">
                Regístrate para empezar a usar la plataforma
              </p>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg text-sm mb-4">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? 'Ocultar' : 'Ver'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Confirmar contraseña
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repite tu contraseña"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition disabled:opacity-50"
              >
                {isLoading ? 'Creando cuenta...' : 'Crear Cuenta'}
              </button>

            </form>

            <AuthFooter
              question="¿Ya tienes cuenta?"
              href="/login"
              linkText="Inicia sesión"
            />

          </div>
        </div>
      </main>
    </div>
  )
}
