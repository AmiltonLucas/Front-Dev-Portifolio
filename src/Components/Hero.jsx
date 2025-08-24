import React from 'react';
import logo from '../assets/logo.png';

export default function Hero() {
  // Função para rolar suavemente até a seção de serviços
  const scrollToServices = () => {
    const section = document.getElementById('servicos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gradient-to-r from-[#0f0f0f] via-[#181818] to-[#0f0f0f] h-[100%] relative overflow-hidden">
      {/* Informações da dev à esquerda */}
      <div className="md:w-1/2 mb-12 md:mb-0 z-10">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-500 drop-shadow-lg">
          Front Dev Studio
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-lg">
          Criando soluções digitais inovadoras e impactantes para transformar ideias em realidade.
        </p>
        <button
          className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition text-lg cursor-pointer"
          onClick={scrollToServices}
        >
          Conheça nossos serviços
        </button>
        <div className="flex gap-6 mt-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-500">+30</span>
            <span className="text-gray-400 text-sm">Projetos entregues</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-500">100%</span>
            <span className="text-gray-400 text-sm">Satisfação dos clientes</span>
          </div>
        </div>
      </div>
      {/* Foto à direita */}
      <div className="md:w-1/2 flex justify-center z-10">
        <div className="relative w-80 h-80">
          <img
            src={logo}
            alt="Equipe Front Dev Studio"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Efeito decorativo */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-500 opacity-10 blur-2xl pointer-events-none" />
    </section>
  );
}