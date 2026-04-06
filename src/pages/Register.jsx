import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const hasUppercase = /[A-Z]/;
const hasSymbol = /[^A-Za-z0-9]/;
const hasNumber = /[0-9]/;

const isPasswordValid = (password) => {
  return (
    hasUppercase.test(password) &&
    hasSymbol.test(password) &&
    hasNumber.test(password) &&
    password.length >= 8
  );
};

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isPasswordValid(formData.password)) {
      setError('Password must contain 1 uppercase letter, 1 symbol, 1 number, and be at least 8 characters long.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/register.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || 'Registration failed.');
        return;
      }

      setSuccess('Registration successful. You can now log in.');
      setFormData({ username: '', email: '', password: '' });
    } catch (err) {
      setError('Could not connect to server.');
    }
  };

  return (
    <main className="page page-center">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>

      {error && <p className="error">{error}</p>}
      {success && (
        <p className="success">
          {success} <Link to="/login">Go to Login</Link>
        </p>
      )}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </main>
  );
};

export default Register;
