import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main className="page page-center">
      <h1>Landing Page</h1>
      <p>Welcome. Choose where to go:</p>
      <div className="actions">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </main>
  );
};

export default Landing;
