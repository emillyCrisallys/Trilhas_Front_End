import { Link } from "react-router-dom";

export default function Rooms() {
  const rooms = [
    { id: 1, name: "Quarto Luxo", description: "Um quarto espaçoso com vista para o mar.", price: "$200" },
    { id: 2, name: "Quarto Simples", description: "Um quarto aconchegante e econômico.", price: "$100" },
    { id: 3, name: "Quarto Família", description: "Um quarto grande para toda a família.", price: "$300" },
  ];

  return (
    <div className="container">
      <h1>Quartos Disponíveis</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>
              {room.name}
              <br />
              {room.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}