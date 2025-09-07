import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Admin/Login';
import AdminPainel from './Admin/HomeAdmin';
import ProjetoPage from './Pages/ProjetoPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto" element={<ProjetoPage />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/painel-admin" element={<AdminPainel/>} />
      </Routes>
    </BrowserRouter>
  );
}