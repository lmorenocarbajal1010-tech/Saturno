'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import AuthFooter from '../../components/AuthFooter'
import Navbar from '@/components/Navbar'

export default function PageLogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!email || !password) {
            setError('Por favor completa todos los campos')
            return
        }

        if (!email.includes('@')) {
            setError('Por favor ingresa un email válido')
            return
        }

        setIsLoading(true)
        try {
            console.log('Login attempt:', { email, password })
            // await loginUser(email, password)
        } catch (err) {
            setError('Error al iniciar sesión. Intenta de nuevo.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a]">
            {/* Header */}
            
            
            {/* Contenido principal */}
            <main className="flex-1 flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 z-10">
                <div className="relative w-full max-w-md">
                    {/* Card */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 p-8 sm:p-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Bienvenido</h1>
                            <p className="text-gray-300 text-sm sm:text-base">Inicia sesión en tu cuenta</p>
                        </div>

                        {/* Formulario */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {error && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm flex items-start gap-3">
                                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </div>
                            )}

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Correo Electrónico</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">Contraseña</label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember me & Forgot password */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white transition-colors">
                                    <input type="checkbox" className="w-4 h-4 bg-white/10 border border-white/20 rounded cursor-pointer" />
                                    Recuérdame
                                </label>
                                <Link href="/forgot-password" className="text-purple-400 hover:text-purple-300 transition-colors">¿Olvidaste tu contraseña?</Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-6 flex items-center gap-3">
                            <div className="flex-1 h-px bg-white/10"></div>
                            <span className="text-gray-400 text-xs uppercase tracking-wide">O continúa con</span>
                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button className="py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200">
                                {/* Google Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.889-2.126 5.413-5.033 5.413-1.33 0-2.575-.356-3.556-.985-2.821 1.917-5.799 2.354-7.978 1.196.974-1.422 1.624-3.236 1.624-5.074 0-2.313-1.17-4.357-2.946-5.658 2.679-.423 4.893.626 7.095 2.127.715-.504 1.635-.903 2.614-.903 2.907 0 5.033 2.524 5.033 5.413z" />
                                </svg>
                                Google
                            </button>
                            <button className="py-2.5 px-4 bg-white/5 hover:bg-blue-600 border border-white/10 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200">
                                {/* Facebook Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.09 5.66 21.25 10.44 22v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.9h-2.3V22C18.34 21.25 22 17.09 22 12.07z" />
                                </svg>
                                Facebook
                            </button>
                        </div>

                        {/* Footer */}
                        <AuthFooter question="¿No tienes cuenta?" href="/registrer" linkText="Regístrate" />
                    </div>
                </div>
            </main>
        </div>
    )
}
