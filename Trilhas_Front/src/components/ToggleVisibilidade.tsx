import { useState } from "react";
import "./ToggleVisibilidade.css";

interface ToggleVisibilidadeProps {
  texto: string;
}

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visivel, setVisivel] = useState(true);

  return (
    <div className="toggle-visibilidade">
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
};

export default ToggleVisibilidade;
