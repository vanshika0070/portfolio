import { useState, useEffect, useRef, useCallback } from "react";
import "./Style.css";
import "./Menu.css";

const dishes = [
  { tag: "Chef's Signature", name: "Chicken Biryani",      desc: "Slow-cooked basmati · saffron · dum cooked",  img: "/images/chicken biryani.webp"          },
  { tag: "House Specialty",  name: "Chicken Teriyaki",     desc: "Glazed perfection · sesame · ginger",         img: "/images/chicken teriyaki.webp"         },
  { tag: "Chef's Signature", name: "Lobster Thermidor",    desc: "Butter-poached lobster · Gruyère crust",      img: "/images/Lobster Thermidor.webp"        },
  { tag: "Chef's Signature", name: "Tikka Masala & Naan",  desc: "Clay oven tikka · velvety masala",            img: "/images/chicken tikka masala & naan.webp"},
  { tag: "Premium Selection",name: "Sushi",                desc: "Premium cuts · wasabi · pickled ginger",      img: "/images/sushi.webp"                    },
  { tag: "Italian Classic",  name: "Truffle Risotto",      desc: "Black truffle · parmesan · creamy rice",      img: "/images/Truffle Mushroom Risotto.webp" },
];

const mod = (n, m) => ((n % m) + m) % m;

function DishCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const touchX   = useRef(null);
  const total = dishes.length;

  const goTo = useCallback((idx) => {
    setActive(mod(idx, total));
  }, [total]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(a => mod(a + 1, total)), 5000);
  }, [total]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const navigate = (dir) => { goTo(active + dir); resetTimer(); };

  const getPos = (i) => {
    let p = i - active;
    if (p > total / 2)  p -= total;
    if (p < -total / 2) p += total;
    return Math.max(-2, Math.min(2, p));
  };

  return (
    <div className="carousel-root"
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="dish-track">
        {dishes.map((dish, i) => {
          const pos = getPos(i);
          return (
            <div
              key={dish.name}
              className={`dish-slide pos-${pos}`}
              aria-hidden={pos !== 0}
              onClick={() => {
                if (pos ===  1) navigate(1);
                if (pos === -1) navigate(-1);
              }}
            >
              <div className="plate-wrap">
                <img src={dish.img} alt={dish.name} loading={i === 0 ? "eager" : "lazy"} />
              </div>
              <span className="dish-tag">{dish.tag}</span>
              <p className="dish-name">{dish.name}</p>
              <span className="dish-desc">{dish.desc}</span>
            </div>
          );
        })}
      </div>

      {/* Prev / Next */}
      <div className="carousel-btns">
        <button className="nav-btn" onClick={() => navigate(-1)} aria-label="Previous dish">&#8249;</button>
        <button className="nav-btn" onClick={() => navigate(1)}  aria-label="Next dish">&#8250;</button>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {dishes.map((_, i) => (
          <button
            key={i}
            className={`dot${i === active ? " active" : ""}`}
            onClick={() => { goTo(i); resetTimer(); }}
            aria-label={`Go to dish ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Specials() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Authentic Flavours Since 2009</p>
        <h1 className="hero-title">A Feast for<br />the Senses</h1>
        <a href="/reservation" className="btn">BOOK AN EXPERIENCE</a>
      </div>
      <DishCarousel />
    </section>
  );
}

export default Specials;