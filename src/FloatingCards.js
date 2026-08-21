import "./Banner.css";
import "./Style.css";

const cards = [
  "⚡ Strategy-led Design",
  "📱 Responsive Development",
  "🎨 Built to Convert",
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