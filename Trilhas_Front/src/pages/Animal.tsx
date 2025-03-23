import { useParams } from "react-router-dom";

export default function Animal() {
  const { name } = useParams<{ name: string }>();

  return (
    <div className="container">
      <h1>Animal</h1>
      <p>O animal escolhido foi: <strong>{name}</strong></p>
    </div>
  );
}
