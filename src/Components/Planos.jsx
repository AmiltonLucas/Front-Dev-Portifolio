import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const planosFront = [
  {
    nome: "Landing Page",
    preco: "R$ 300 a 1.000",
    descricao: "Ideal para lançamentos e campanhas de pequeno porte.",
    itens: [
      "Design moderno",
      "Responsivo",
      "SEO básico",
      "Entrega rápida",
      "Suporte vitalício",
    ]
  },
  {
    nome: "Web site",
    preco: "R$ 2.000 a 4.000",
    descricao: "Perfeito para empresas que querem presença digital.",
    itens: [
      "Até 15 páginas",
      "Painel administrativo",
      "SEO avançado",
      "Banco de dados SQL",
      "Suporte e manutenção vitalícia",
    ]
  },
  {
    nome: "Web site + Web App + Dashboard",
    preco: "A partir de R$ 4.100",
    descricao: "Perfeito para projetos de grande porte que querem presença digital.",
    itens: [
      "Sem limites de páginas",
      "Integração de APIs e AI",
      "Paínel administrativo completo",
      "Segurança blindada e certificada",   
      "Suporte e manutenção vitalícia",
    ]
  }
];

const planosBack = [
  {
    nome: "Bots telegram",
    preco: "A partir de R$ 4.000",
    descricao: "Soluções personalizadas para gestão e automação.",
    itens: [
      "Integração com APIs",
      "Painel customizado",
      "Segurança avançada",
      "Treinamento incluso"
    ]
  },
  {
    nome: "API & Backend",
    preco: "A partir de R$ 2.800",
    descricao: "Estruture seu negócio com automação e dados.",
    itens: [
      "Node.js ou Python",
      "Banco de dados",
      "Documentação",
      "Suporte técnico"
    ]
  },
  {
    nome: "API & Backend",
    preco: "A partir de R$ 2.800",
    descricao: "Estruture seu negócio com automação e dados.",
    itens: [
      "Node.js ou Python",
      "Banco de dados",
      "Documentação",
      "Suporte técnico"
    ]
  }
];

export default function Planos() {
  const [categoria, setCategoria] = useState("front");
  const planos = categoria === "front" ? planosFront : planosBack;

  return (
    <section className="px-8 py-16 bg-[#0f0f0f]" id="precos">
      <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center neon-text">Nossos Planos</h2>
      <div className="flex justify-center gap-6 mb-10">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition shadow ${categoria === 'front' ? 'bg-blue-500 text-white' : 'bg-[#181818] text-blue-500 hover:bg-blue-500 hover:text-white'}`}
          onClick={() => setCategoria('front')}
        >
          Front-end
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition shadow ${categoria === 'back' ? 'bg-blue-500 text-white' : 'bg-[#181818] text-blue-500 hover:bg-blue-500 hover:text-white'}`}
          onClick={() => setCategoria('back')}
        >
          Back-end
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {planos.map((plano, idx) => (
          <div key={idx} className="bg-[#181818] p-8 rounded-xl shadow-lg neon flex flex-col items-center hover:shadow-[0_0_8px_2px_#3b82f6] transition">
            <h3 className="text-xl font-bold text-blue-500 mb-2">{plano.nome}</h3>
            <div className="text-3xl font-extrabold text-blue-500 mb-2">{plano.preco}</div>
            <p className="text-gray-300 mb-4 text-center">{plano.descricao}</p>
            <ul className="mb-4 w-full">
              {plano.itens.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200 mb-2">
                  <FaCheckCircle className="text-blue-500" /> {item}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
              Solicitar orçamento
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}