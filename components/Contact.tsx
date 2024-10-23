// pages/contact.js
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">Contactez-nous</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Section gauche - informations */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Vous recherchez une <a href="#" className="text-blue-600 hover:underline">agence digitale</a> qui
              construit avec vous votre projet et qui s'adapte à tous les supports de communication ?
            </p>
            <p className="text-lg text-gray-600">Nous sommes à votre écoute !</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Adresse</h3>
                <p className="text-gray-600">Osmova</p>
                <p className="text-gray-600">10 Parc club du millénaire</p>
                <p className="text-gray-600">1025 Rue Henri Becquerel Box 95</p>
                <p className="text-gray-600">34 000 Montpellier</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Téléphone</h3>
                <p className="text-gray-600">07 67 66 29 76</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">contact@osmova.com</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10.02 0 4.42 3.64 8.07 8.4 9.02v-6.38h-2.54v-2.5h2.54v-1.9c0-2.53 1.51-3.92 3.79-3.92 1.1 0 2.24.18 2.24.18v2.47h-1.26c-1.24 0-1.62.77-1.62 1.57v1.6h2.8l-.45 2.5h-2.35v6.38c4.76-.95 8.4-4.6 8.4-9.02 0-5.54-4.48-10.02-10-10.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10.02 0 4.42 3.64 8.07 8.4 9.02v-6.38h-2.54v-2.5h2.54v-1.9c0-2.53 1.51-3.92 3.79-3.92 1.1 0 2.24.18 2.24.18v2.47h-1.26c-1.24 0-1.62.77-1.62 1.57v1.6h2.8l-.45 2.5h-2.35v6.38c4.76-.95 8.4-4.6 8.4-9.02 0-5.54-4.48-10.02-10-10.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10.02 0 4.42 3.64 8.07 8.4 9.02v-6.38h-2.54v-2.5h2.54v-1.9c0-2.53 1.51-3.92 3.79-3.92 1.1 0 2.24.18 2.24.18v2.47h-1.26c-1.24 0-1.62.77-1.62 1.57v1.6h2.8l-.45 2.5h-2.35v6.38c4.76-.95 8.4-4.6 8.4-9.02 0-5.54-4.48-10.02-10-10.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Section droite - formulaire */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 text-sm">Nom*</label>
                  <input type="text" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm">Email*</label>
                  <input type="email" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm">Téléphone*</label>
                  <input type="text" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm">Nom de la société</label>
                  <input type="text" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-600 text-sm">Sujet</label>
                <select className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Demande d'informations</option>
                  <option>Support</option>
                  <option>Collaboration</option>
                </select>
              </div>
              <div className="mt-6">
                <label className="block text-gray-600 text-sm">Votre message</label>
                <textarea className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700 transition duration-300">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
