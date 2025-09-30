function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-white/90 backdrop-filter backdrop-blur shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Invitación</h1>
          <nav>
            <ul className="flex space-x-6 text-sm md:text-base">
              <li><a href="#detalles" className="hover:text-blue-600">Detalles</a></li>
              <li><a href="#mapa" className="hover:text-blue-600">Mapa</a></li>
              <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 md:py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¡Estás invitado!</h2>
          <p className="text-lg md:text-xl mb-2"><strong>Fecha:</strong> 10 de noviembre de 2025</p>
          <p className="text-lg md:text-xl mb-2"><strong>Hora:</strong> 8:30 a 11:00</p>
          <p className="text-lg md:text-xl mb-4"><strong>Lugar:</strong> Privada Vista Alegre 945, Colonia Lomas del Valle</p>

          {/* Dresscode */}
          <button
            onClick={() => (document.getElementById("dresscodeModal") as HTMLDialogElement).showModal()}
            className="inline-flex items-center gap-2 text-blue-950 bg-white/90 hover:bg-white font-semibold px-4 py-2 rounded-lg shadow transition"
          >
            Dresscode: Formal Elegante
          </button>

          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a
              href="https://forms.gle/XgGa39PUPz5mAXY37"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Confirmar asistencia
            </a>
            <a
              href="#mapa"
              className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition"
            >
              Ver mapa
            </a>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section id="mapa" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Cómo llegar</h3>
          <div className="overflow-hidden rounded-2xl shadow">
            <iframe
              title="Mapa - Privada Vista Alegre 945, Colonia Lomas del Valle"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=Privada%20Vista%20Alegre%20945%2C%20Lomas%20del%20Valle&output=embed"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Contacto</h3>
          <p className="text-lg mb-2"><strong>Nombre:</strong> Mateo Pérez de Andrade Sáenz</p>
          <p className="text-lg mb-2">
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+523327870971" className="text-blue-600 hover:underline">3327870971</a>
          </p>
          <p className="text-lg mb-6">
            <strong>Correo:</strong>{" "}
            <a href="mailto:0283778@up.edu.mx" className="text-blue-600 hover:underline">
              0283778@up.edu.mx
            </a>
          </p>
          <a
            href="https://forms.gle/XgGa39PUPz5mAXY37"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Responder encuesta
          </a>
        </div>
      </section>

      {/* Modal Dresscode */}
      <dialog id="dresscodeModal" className="rounded-2xl p-6 max-w-5xl w-full backdrop:bg-black/60">
  <h4 className="text-2xl font-semibold mb-4">Dresscode: Formal Elegante</h4>
  <p className="text-gray-600 mb-6">
    Ejemplos visuales para ayudarte a elegir tu atuendo.
  </p>

  <div className="grid sm:grid-cols-2 gap-6">
    {/* Hombre */}
    <div>
      <h5 className="font-semibold mb-2">Hombre</h5>
      <div className="overflow-hidden rounded-xl shadow">
        <img
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80"
          alt="Traje formal hombre"
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </div>
      <ul className="text-sm text-gray-600 mt-3 list-disc pl-5 space-y-1">
        <li>Traje oscuro, camisa lisa</li>
        <li>Corbata sobria y zapatos formales</li>
      </ul>
    </div>

    {/* Mujer */}
    <div>
      <h5 className="font-semibold mb-2">Mujer</h5>
      <div className="overflow-hidden rounded-xl shadow">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
          alt="Vestido formal mujer"
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </div>
      <ul className="text-sm text-gray-600 mt-3 list-disc pl-5 space-y-1">
        <li>Vestido cóctel / conjunto sastre</li>
        <li>Accesorios discretos, tacón medio/alto</li>
      </ul>
    </div>
  </div>

  <form method="dialog" className="mt-6 text-center">
    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
      Cerrar
    </button>
  </form>
</dialog>
  );
}

export default App;

