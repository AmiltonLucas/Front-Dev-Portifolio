import React from 'react';
import { FaStar } from 'react-icons/fa';

const feedbacks = [
  {
    nome: "Ana Souza",
    cargo: "CEO - Empresa ABC",
    projeto: "Site Institucional",
    texto: "A Front Dev Studio superou nossas expectativas! O site ficou incrível e o atendimento foi excelente.",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nome: "Carlos Lima",
    cargo: "Gerente de Projetos - XYZ",
    projeto: "Landing Page Modern",
    texto: "Equipe muito profissional, entregaram nossa landing page antes do prazo e com ótima qualidade.",
    estrelas: 4,
    foto: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nome: "Juliana Martins",
    cargo: "CTO - Startup Tech",
    projeto: "Dashboard Interativo",
    texto: "O dashboard desenvolvido facilitou muito nossa gestão. Recomendo fortemente!",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

function Estrelas({ qtd }) {
  return (
    <div className="flex gap-1 justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < qtd ? "text-yellow-400" : "text-gray-500"} />
      ))}
    </div>
  );
}

export default function Feedbacks() {
  return (
    <section className="px-8 py-16 bg-[#0f0f0f]" id='feedbacks'>
      <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Nossos Feedbacks</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {feedbacks.map((fb, idx) => (
          <div key={idx} className="bg-[#181818] p-8 rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center">
            <img src={fb.foto} alt={fb.nome} className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500 object-cover shadow" />
            <Estrelas qtd={fb.estrelas} />
            <p className="text-gray-300 italic mb-4 text-center">"{fb.texto}"</p>
            <div className="text-blue-500 font-semibold">{fb.nome}</div>
            <div className="text-gray-400 text-sm">{fb.cargo}</div>
            <div className="text-gray-400 text-xs mt-2">Projeto: <span className="text-blue-500">{fb.projeto}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}