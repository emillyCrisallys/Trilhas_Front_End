import axios from "axios";
import "./BuscarUsuario.css";
import React, { useState } from "react";

const BuscarUsuario: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [error, setError] = useState<string>("");

  const buscarUsuario = async () => {
    setError("");
    setUser(null);

    if (!userId.trim()) {
      setError("Insira um ID ae");
      return;
    }

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUser({
        name: response.data.name,
        email: response.data.email,
      });
    } catch {
      setError("Foi encontrado não pÔ");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Buscar Usuário</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Digite o ID do usuário"
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={buscarUsuario} style={{ padding: "8px 16px" }}>
        Buscar
      </button>

      {user && (
        <div style={{ marginTop: "20px" }}>
          <h3>Dados do Usuário:</h3>
          <p>
            <strong>Nome:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarUsuario;