import "./Card.css";

interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
