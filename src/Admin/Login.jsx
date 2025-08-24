import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Exemplo de validação simples
    if (email === "admin@frontdev.com" && senha === "123456") {
      setErro("");
      navigate("/painel-admin");
    } else {
      setErro("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#181818] to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="bg-[#181818] p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-blue-500 text-center mb-2">Login Admin</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded bg-[#0f0f0f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-3 rounded bg-[#0f0f0f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {erro && <div className="text-red-500 text-sm text-center">{erro}</div>}
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-700 transition shadow-[0_0_6px_2px_#3b82f6]"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}