"use client"

import React from 'react'
import SellerProductForm from '../../components/SellerProductForm'

export default function DashboardPage() {
	return (
		<div className="min-h-screen flex flex-col items-center bg-[#0f0f0f] p-6">
			<div className="w-full max-w-4xl">
				<h1 className="text-2xl text-white font-bold mb-6">Panel de Vendedor</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<SellerProductForm />
					<div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 p-6 sm:p-8">
						<h3 className="text-lg font-semibold text-white mb-2">Tus productos</h3>
						<p className="text-sm text-gray-300">Aquí aparecerán los productos que publiques (implementa backend para listar).</p>
					</div>
				</div>
			</div>
		</div>
	)
}
