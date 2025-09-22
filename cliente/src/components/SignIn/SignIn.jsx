import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", formData);
    // Aquí haces el fetch/axios al backend para login
  };

  return (
    <div className="signin-container">
      <h2>Bienvenido de nuevo</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="email"
          name="email"
          placeholder="Ingrese su email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Ingrese su password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p className="signup-link">
        No tienes una cuenta? <a href="/signup">Registrate</a>
      </p>
    </div>
  );
}

export default SignIn;
