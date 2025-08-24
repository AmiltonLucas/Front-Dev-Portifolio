import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHeadset,
  FaWhatsapp,
} from "react-icons/fa";
import { GrContact } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-10 shadow-lg" id="contato">
      <div className="container mx-auto px-8 grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo e redes sociais */}
        <div>
          <div className="font-bold text-xl text-blue-500 mb-4 flex items-center justify-center md:justify-start gap-2">
            <span>Front Dev Studio</span>
          </div>
          <div className="flex gap-4 justify-center md:justify-start mb-4">
            <a
              href="#"
              className="text-blue-500 hover:text-white hover:bg-blue-600 transition bg-gray-800 p-2 rounded-full"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-white transition hover:bg-pink-500 bg-gray-800 p-2 rounded-full"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-white transition  hover:bg-green-500 bg-gray-800 p-2 rounded-full"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
        {/* Links rápidos */}
        <div>
          <h4 className="text-blue-500 font-semibold mb-2">Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-blue-500 transition">
                Serviços
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-blue-500 transition">
                Projetos
              </a>
            </li>
            <li>
              <a href="#feedbacks" className="hover:text-blue-500 transition">
                Feedbacks
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-blue-500 transition">
                Contato
              </a>
            </li>
          </ul>
        </div>
        {/* Contato Dev */}
        <div>
          <h4 className="text-blue-500 font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
            <GrContact /> Contato
          </h4>
          <p className="text-gray-400 text-sm">
            Contate alguns de nossos devs chefes:
            <br />
            Dev: Amilton Lucas -{" "}
            <span className="text-blue-500">88 99968-4228</span>
            <br />
            Dev: Rafael Quintino -{" "}
            <span className="text-blue-500">88 99968-4228</span>
          </p>
        </div>
        {/* Funcionamento */}
        <div>
          <h4 className="text-blue-500 font-semibold mb-2 flex items-center justify-center md:justify-start gap-2">
            <FaHeadset /> Funcionamento
          </h4>
          <p className="text-gray-400 text-sm">
            Atendimento online, das 7h às 22h.
            <br />
            <span className="text-blue-500">contato@frontdevstudio.com</span>
            <br />
          </p>
        </div>
      </div>
      <div className="text-gray-500 text-xs text-center mt-8">
        &copy; {new Date().getFullYear()} Front Dev Studio. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
