import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
  });

  // Manejar cambios en inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    // Aquí puedes hacer fetch/axios para enviar los datos al backend
    // fetch("http://localhost:8080/api/signup", { ... })
  };

  return (
    <div className="signup-container">
      <h2>Crear Una Cuenta</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Apellido"
          value={formData.company}
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
          placeholder="Password (hasta 10 caracteres)"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={10}
        />

        <button type="submit">Registro</button>
      </form>

      <p className="signin-link">
        Ya tienes una cuenta? <a href="/signin">Login</a>
      </p>
    </div>
  );
}

export default SignUp;
