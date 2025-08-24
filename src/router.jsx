import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Admin/Login';
import AdminPainel from './Admin/HomeAdmin';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/painel-admin" element={<AdminPainel/>} />
      </Routes>
    </BrowserRouter>
  );
}