import { useParams, useNavigate } from "react-router-dom";

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Detalhes do Quarto {id}</h1>
      <p>Este é um ótimo quarto para sua estadia!</p>
      <button onClick={() => navigate("/booking-success")}>Reservar Agora</button>
    </div>
  );
}
