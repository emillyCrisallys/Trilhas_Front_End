import React, { useState } from "react";
import axios from "axios";

const CriarUsuario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrarUsuario = async () => {
    setMensagem("");

    if (!nome.trim() || !email.trim()) {
      setMensagem("Preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        name: nome,
        email: email,
      });

      if (response.status === 201) {
        setMensagem("Usuário cadastrado com sucesso!");
        setNome("");
        setEmail("");
      } else {
        setMensagem("Erro ao cadastrar o usuário.");
      }
    } catch {
      setMensagem("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", marginTop: "40px" }}>
      <h2>Criar Novo Usuário</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do usuário"
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email do usuário"
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={cadastrarUsuario} style={{ padding: "8px 16px" }}>
        Cadastrar
      </button>

      {mensagem && (
        <p style={{ marginTop: "20px", color: mensagem.includes("sucesso") ? "green" : "red" }}>
          {mensagem}
        </p>
      )}
    </div>
  );
};

export default CriarUsuario;
