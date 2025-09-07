import React, { useState } from "react";
import Projeto from "../assets/WilsonSite.png";
import Projeto2 from "../assets/Runaholic.png";
import Projeto3 from "../assets/CasaDoPet.png";
import Projeto4 from "../assets/CarServices.png";

const projetosSites = [
  {
    nome: "Web site Melhor Opção",
    descricao: "Página de vendas de cesta básica do nosso cliente Wilson.",
    imagem: Projeto,
    tecnologias: "React, TailwindCSS, Backend em Django/Python",
    link: "/projeto", // 🔗 link do projeto
  },
  {
    nome: "Site Runaholic",
    descricao: "Site de venda de produtos esportivos do nosso cliente Jonas.",
    imagem: Projeto2,
    tecnologias: "React, TailwindCSS, Backend em Django/Python",
    link: "/projeto",
  },
  {
    nome: "Landing Page Pet Shop",
    descricao: "Landing page para pet shop com design moderno.",
    imagem: Projeto3,
    tecnologias: "HTML, CSS, JavaScript",
    link: "/projeto",
  },
  {
    nome: "Site Car Services",
    descricao: "Site para serviços automotivos com agendamento online.",
    imagem: Projeto4,
    tecnologias: "HTML, CSS, JavaScript",
    link: "/projeto",
  },
];

const projetosBots = [
  {
    nome: "API de Produtos",
    descricao: "API RESTful para gerenciamento de produtos.",
    imagem:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    tecnologias: "Node.js, Express, MongoDB",
    link: "/projeto",
  },
  {
    nome: "Sistema de Autenticação",
    descricao: "Backend seguro para autenticação de usuários.",
    imagem:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    tecnologias: "NestJS, JWT",
    link: "/projeto",
  },
  {
    nome: "Bot Telegram Financeiro",
    descricao: "Bot para controle de finanças pessoais com integração em APIs.",
    imagem:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    tecnologias: "Python, Telebot, PostgreSQL",
    link: "/projeto",
  },
];

const projetosSistemas = [
  {
    nome: "Sistema de Gestão",
    descricao: "Plataforma completa para gerenciamento empresarial.",
    imagem:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=400&q=80",
    tecnologias: "React, Node.js, MySQL",
    link: "/projeto",
  },
  {
    nome: "ERP Personalizado",
    descricao: "ERP sob medida para pequenas e médias empresas.",
    imagem:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80",
    tecnologias: "Vue, Laravel, PostgreSQL",
    link: "/projeto",
  },
  {
    nome: "Dashboard Analytics",
    descricao: "Painel de BI para monitorar métricas em tempo real.",
    imagem:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80",
    tecnologias: "Next.js, TailwindCSS, MongoDB",
    link: "/projeto",
  },
];

function CardFlip({ projeto }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <a
      href={projeto.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-72 h-96 perspective cursor-pointer block"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-full h-full duration-500`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Frente */}
        <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg bg-[#181818] flex flex-col items-center justify-center overflow-hidden">
          <img
            src={projeto.imagem}
            alt={projeto.nome}
            className="w-full h-full object-cover rounded-xl border-2 border-gray-200"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#181818]/80 to-transparent p-4">
            <h3 className="text-xl font-semibold text-white text-center">
              {projeto.nome}
            </h3>
          </div>
        </div>
        {/* Verso */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl shadow-lg bg-[#181818] flex flex-col items-center justify-center px-4"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-500">
            {projeto.nome}
          </h3>
          <p className="text-gray-300 text-center mb-4">{projeto.descricao}</p>
          <span className="text-blue-500 font-semibold">
            {projeto.tecnologias}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const [categoria, setCategoria] = useState("sites");

  const projetos =
    categoria === "sites"
      ? projetosSites
      : categoria === "bots"
      ? projetosBots
      : projetosSistemas;

  return (
    <section className="px-8 py-16 bg-[#0f0f0f] min-h-[60vh]" id="projetos">
      <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">
        Nossos Projetos
      </h2>

      {/* Botões de categorias */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition shadow ${
            categoria === "sites"
              ? "bg-blue-500 text-white"
              : "bg-[#181818] text-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
          onClick={() => setCategoria("sites")}
        >
          Sites
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition shadow ${
            categoria === "bots"
              ? "bg-blue-500 text-white"
              : "bg-[#181818] text-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
          onClick={() => setCategoria("bots")}
        >
          Bots
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition shadow ${
            categoria === "sistemas"
              ? "bg-blue-500 text-white"
              : "bg-[#181818] text-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
          onClick={() => setCategoria("sistemas")}
        >
          Sistemas
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {projetos.map((projeto, idx) => (
          <CardFlip projeto={projeto} key={idx} />
        ))}
      </div>
    </section>
  );
}

/* Tailwind custom classes:
.perspective { perspective: 1200px; }
.backface-hidden { backface-visibility: hidden; }
*/
