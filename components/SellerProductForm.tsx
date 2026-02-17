"use client"

import React, { useState } from 'react'

export default function SellerProductForm() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('M')
  const [type, setType] = useState('Playera')
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setImage(file)
    if (file) setPreview(URL.createObjectURL(file))
    else setPreview(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name || !price) {
      setError('Nombre y precio son obligatorios')
      return
    }

    const numericPrice = parseFloat(price.replace(',', '.'))
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError('Ingresa un precio válido')
      return
    }

    setIsLoading(true)
    try {
      const payload = {
        name,
        price: numericPrice,
        size,
        type,
      }

      console.log('Crear producto:', payload, 'Imagen:', image)

      // Si quieres subir la imagen a un backend, usa FormData:
      // const form = new FormData()
      // form.append('name', name)
      // form.append('price', String(numericPrice))
      // form.append('size', size)
      // form.append('type', type)
      // if (image) form.append('image', image)
      // await fetch('/api/products', { method: 'POST', body: form })

      // Limpieza al crear exitosamente
      setName('')
      setPrice('')
      setSize('M')
      setType('Playera')
      setImage(null)
      setPreview(null)
    } catch (err) {
      setError('Error al crear el producto. Intenta de nuevo.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-white mb-4">Agregar producto</h2>

      {error && <div className="text-sm text-red-300 mb-3">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-200 mb-1">Nombre del producto</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Precio (USD)</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            inputMode="decimal"
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-200 mb-1">Talla</label>
            <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none">
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-1">Tipo</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none">
              <option>Playera</option>
              <option>Sudadera</option>
              <option>Accesorio</option>
              <option>Otro</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Imagen del producto</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="text-sm text-gray-300" />
          {preview && (
            <img src={preview} alt="preview" className="mt-3 w-32 h-32 object-cover rounded-md border border-white/10" />
          )}
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" disabled={isLoading} className="py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium disabled:opacity-50">
            {isLoading ? 'Guardando...' : 'Guardar producto'}
          </button>
        </div>
      </form>
    </div>
  )
}
