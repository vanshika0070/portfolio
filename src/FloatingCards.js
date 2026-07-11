import "./Banner.css";
import "./Style.css";

const cards = [
  "⚡ Fast Performance",
  "📱 Responsive Design",
  "🎨 Modern UI/UX",
];

export default function FloatingCards() {
  return (
    <div className="floating-cards">
      {cards.map((card, index) => (
        <div className={`floating-card card-${index + 1}`} key={index}>
          {card}
        </div>
      ))}
    </div>
  );
}