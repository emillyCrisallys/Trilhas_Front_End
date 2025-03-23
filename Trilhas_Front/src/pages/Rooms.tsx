import { Link } from "react-router-dom";

export default function Rooms() {
  const rooms = [
    { id: 1, name: "Quarto Luxo" },
    { id: 2, name: "Quarto Simples" },
    { id: 3, name: "Quarto Família" },
  ];

  return (
    <div className="container">
      <h1>Quartos Disponíveis</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
