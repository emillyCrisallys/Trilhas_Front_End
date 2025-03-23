import { useState } from "react";
import "./ListaTarefas.css";

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

export default function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const excluirTarefa = (index: number) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== index);
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div className="lista-tarefas">
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button className="excluir" onClick={() => excluirTarefa(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
