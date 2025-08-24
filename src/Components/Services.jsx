import React from 'react';
import { FaLaptopCode, FaHeadset } from 'react-icons/fa';
import { FaRobot } from "react-icons/fa6";

export default function Services() {
  return (
    <section className="px-8 py-16 bg-[#0f0f0f]" id='servicos'>
      <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#181818] p-8 rounded-xl shadow-lg transition flex flex-col items-center hover:shadow-[0_0_8px_2px_#3b82f6]">
          <FaLaptopCode className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-500">Desenvolvimento Web</h3>
          <p className="text-gray-300 text-center">
            Sites institucionais, landing pages e sistemas personalizados com as melhores tecnologias do mercado.
          </p>
        </div>
        <div className="bg-[#181818] p-8 rounded-xl shadow-lg transition flex flex-col items-center hover:shadow-[0_0_8px_2px_#3b82f6]">
          <FaRobot className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-500">Chats telegram & Bots</h3>
          <p className="text-gray-300 text-center">
            Criação de chatbots personalizados para automação de atendimento, vendas e suporte via Telegram.
          </p>
        </div>
        <div className="bg-[#181818] p-8 rounded-xl shadow-lg transition flex flex-col items-center hover:shadow-[0_0_8px_2px_#3b82f6]">
          <FaHeadset className="text-blue-500 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-blue-500">Automação & Suporte</h3>
          <p className="text-gray-300 text-center">
            Soluções de automação para otimizar processos empresariais e suporte técnico especializado.
          </p>
        </div>
      </div>
    </section>
  );
}