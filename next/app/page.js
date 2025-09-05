import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-green-400 to-emerald-600 text-white">
        <h1 className="text-5xl font-extrabold mb-4">ChambaYa</h1>
        <p className="text-lg max-w-2xl mb-6">
          Conecta con trabajadores locales de confianza para tareas de hogar, mudanzas y más. 
          ¡Encuentra ayuda rápida, segura y cerca de ti en Perú!
        </p>
        <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition">
          Comenzar ahora
        </button>
      </section>

      {/* Servicios */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Servicios disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <Image src="/icons/cleaning.png" alt="Limpieza" width={60} height={60} className="mx-auto mb-4"/>
            <h3 className="font-semibold text-lg">Limpieza</h3>
            <p className="text-sm text-gray-500">Desde S/30 por hora</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <Image src="/icons/moving.png" alt="Mudanzas" width={60} height={60} className="mx-auto mb-4"/>
            <h3 className="font-semibold text-lg">Mudanzas</h3>
            <p className="text-sm text-gray-500">Mototaxi, camioneta o camión</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <Image src="/icons/tools.png" alt="Reparaciones" width={60} height={60} className="mx-auto mb-4"/>
            <h3 className="font-semibold text-lg">Reparaciones</h3>
            <p className="text-sm text-gray-500">Plomería, gasfitería, carpintería</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <Image src="/icons/shopping.png" alt="Compras" width={60} height={60} className="mx-auto mb-4"/>
            <h3 className="font-semibold text-lg">Compras</h3>
            <p className="text-sm text-gray-500">Trámites y encargos locales</p>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-5xl mx-auto">
          <div className="flex-1 text-center bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">1. Publica tu tarea</h3>
            <p className="text-sm text-gray-600">Describe lo que necesitas y elige tu presupuesto.</p>
          </div>
          <div className="flex-1 text-center bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">2. Conéctate con trabajadores</h3>
            <p className="text-sm text-gray-600">Recibe propuestas de personas cercanas verificadas.</p>
          </div>
          <div className="flex-1 text-center bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">3. Completa y paga</h3>
            <p className="text-sm text-gray-600">El trabajo se completa y pagas con tarjeta, Yape o Plin.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-emerald-600 text-white">
        <h2 className="text-4xl font-bold mb-6">¿Listo para tu primera chamba?</h2>
        <p className="mb-8">Miles de trabajadores locales están listos para ayudarte.</p>
        <button className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl shadow hover:bg-gray-200 transition">
          Únete ahora
        </button>
      </section>
    </main>
  )
}
