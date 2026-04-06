import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <main className="page page-center">
      <h1>Home Page</h1>

      <p> logged in as: <strong>{localStorage.getItem('user')}</strong></p>

      <p>Gawa ng BSCS3b for activity kay  sir Neo</p>
      <div className="names-list">
        <p>Navarro, Carl Nicolas</p>
        <p>Casaul, Dench Gregory Zhylle </p>
        <p>Inocencio, Robert</p>
      </div>

      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </main>
  );
};

export default Home;
