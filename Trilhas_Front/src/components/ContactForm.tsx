import "./ContactForm.css";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}
