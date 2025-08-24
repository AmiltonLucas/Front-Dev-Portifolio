import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaServicestack, FaProjectDiagram, FaComments, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0f0f0f] text-white shadow-lg" id='home'>
      {/* Esquerda: Nome da empresa */}
      <div className="font-bold text-xl text-blue-500 flex items-center gap-2">
        <span>Front Dev Studio</span>
      </div>
      {/* Direita: Links funcionais com ícones */}
      <div className="flex gap-6 hidden md:flex">
        <Link to="/" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition">
          <FaHome className="text-blue-500" /> Home
        </Link>
        <a href="#servicos" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition">
          <FaServicestack className="text-blue-500" /> Serviços
        </a>
        <a href="#projetos" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition">
          <FaProjectDiagram className="text-blue-500" /> Projetos
        </a>
        <a href="#feedbacks" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition">
          <FaComments className="text-blue-500" /> Feedbacks
        </a>
        <a href="#contato" className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition">
          <FaEnvelope className="text-blue-500" /> Contato
        </a>
      </div>
    </nav>
  );
}