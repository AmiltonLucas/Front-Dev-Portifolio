import React from "react";
import Projeto from "../assets/WilsonSite.png";
import Projeto2 from "../assets/Runaholic.png";
import Projeto3 from "../assets/CasaDoPet.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function ProjetoPage() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-center bg-[#0f0f0f] p-6">
        <div className="max-w-6xl w-full bg-[#0f0f0f] rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Coluna da Imagem */}
          <div className="p-4 flex items-center justify-center">
            <img
              src= {Projeto3}
              alt="Projeto"
              className="w-[70%] max-w-md rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Coluna de Texto */}
          <div className="flex flex-col justify-center p-6">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Nome do Projeto
            </h2>
            <p className="text-gray-100 mb-4">
              Aqui vai a descrição do projeto. Explique brevemente qual foi o
              objetivo, principais funcionalidades e resultado alcançado.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                Linguagens / Tecnologias:
              </h3>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  TailwindCSS
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                  JavaScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
