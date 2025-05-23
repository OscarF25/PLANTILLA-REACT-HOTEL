import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import LoginPass from './components/LoginPass';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RoomsPage from "./pages/RoomsPage";
import RoomDetailsPage from "./pages/RoomDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/LoginPass" element={<LoginPass />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Rooms" element={<RoomsPage />} />
      <Route path="/Room/:id" element={<RoomDetailsPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
