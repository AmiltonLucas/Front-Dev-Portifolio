import React, { useState } from "react";

export default function AdminPainel() {
  const [projetos, setProjetos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    imagem: "",
    tecnologias: "",
    categoria: "front"
  });
  const [removerNome, setRemoverNome] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProjeto = (e) => {
    e.preventDefault();
    setProjetos([...projetos, form]);
    setForm({
      nome: "",
      descricao: "",
      imagem: "",
      tecnologias: "",
      categoria: "front"
    });
  };

  const handleRemoveProjeto = (idx) => {
    setProjetos(projetos.filter((_, i) => i !== idx));
  };

  const handleRemoveByName = (e) => {
    e.preventDefault();
    setProjetos(projetos.filter((proj) => proj.nome !== removerNome));
    setRemoverNome("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#181818] to-blue-500 flex flex-col items-center py-12">
      <h2 className="text-3xl font-bold text-blue-500 mb-8 neon-text">Painel Admin</h2>
      <form
        onSubmit={handleAddProjeto}
        className="bg-[#181818] p-8 rounded-xl shadow-lg w-full max-w-lg flex flex-col gap-6 mb-12 neon"
      >
        <h3 className="text-xl font-semibold text-blue-500 mb-2">Adicionar Novo Projeto</h3>
        <input
          type="text"
          name="nome"
          placeholder="Nome do projeto"
          value={form.nome}
          onChange={handleChange}
          className="p-3 rounded bg-[#0f0f0f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          className="p-3 rounded bg-[#0f0f0f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem"
          value={form.imagem}
          onChange={handleChange}
          className="p-3 rounded bg-[#0f0f0f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="tecnologias"
          placeholder="Tecnologias usadas"
          value={form.tecnologias}
          onChange={handleChange}
          className="p-3 rounded bg-[#0f0f0f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          className="p-3 rounded bg-[#0f0f0f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="front">Sites</option>
          <option value="back">Bots</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-700 transition shadow-[0_0_6px_2px_#3b82f6]"
        >
          Adicionar Projeto
        </button>
      </form>

      {/* Formulário para remover projeto por nome */}
      <form
        onSubmit={handleRemoveByName}
        className="bg-[#181818] p-8 rounded-xl shadow-lg w-full max-w-lg flex flex-col gap-6 mb-12 neon"
      >
        <h3 className="text-xl font-semibold text-blue-500 mb-2">Remover Projeto</h3>
        <input
          type="text"
          placeholder="Nome do projeto para remover"
          value={removerNome}
          onChange={(e) => setRemoverNome(e.target.value)}
          className="p-3 rounded bg-[#0f0f0f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-red-500 text-white py-3 rounded font-semibold hover:bg-red-700 transition shadow-[0_0_6px_2px_#3b82f6]"
        >
          Remover Projeto
        </button>
      </form>

      <div className="w-full max-w-3xl">
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Projetos Adicionados</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projetos.map((proj, idx) => (
            <div key={idx} className="bg-[#181818] p-6 rounded-xl shadow-lg neon flex flex-col items-center relative">
              <img src={proj.imagem} alt={proj.nome} className="w-full h-40 object-cover rounded mb-4" />
              <h4 className="text-lg font-bold text-blue-500">{proj.nome}</h4>
              <p className="text-gray-300 text-center mb-2">{proj.descricao}</p>
              <span className="text-blue-500 font-semibold">{proj.tecnologias}</span>
              <span className="text-xs text-gray-400 mt-2">{proj.categoria === "front" ? "Front-end" : "Back-end"}</span>
              <button
                onClick={() => handleRemoveProjeto(idx)}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition text-xs font-bold shadow"
                title="Remover projeto"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}