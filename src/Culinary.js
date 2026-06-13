import "./Style.css";
import "./Menu.css";

export default function CulinaryExcellence() {
  return (
    <section className="culinary-excellence">

      <span className="cell-eyebrow">From the Kitchen</span>

      <h3 className="mt-4">The Art Of Dining</h3>

      <p className="hcard-text">
        "Each dish is prepared <em>fresh</em>, exclusively for dining guests —
        a curated expression of flavour, crafted with intention every evening."
      </p>

      <p className="note-attr">— Head Chef, Lazeez</p>

      <div className="excellence-grid">

        <div className="excellence-card">
          <span>01</span>
          <h3>Freshly Prepared</h3>
          <p>
            Every plate is crafted to order, ensuring quality, freshness, and attention to detail.
          </p>
        </div>

        <div className="excellence-card">
          <span>02</span>
          <h3>Exceptional Ingredients</h3>
          <p>
            Carefully selected ingredients chosen for their flavour, quality, and character.
          </p>
        </div>

        <div className="excellence-card">
          <span>03</span>
          <h3>Global Inspiration</h3>
          <p>
            A thoughtful blend of culinary influences from renowned food traditions around the world.
          </p>
        </div>

        <div className="excellence-card">
          <span>04</span>
          <h3>Crafted with Precision</h3>
          <p>
            From preparation to presentation, every detail is refined to elevate the dining experience.
          </p>
        </div>

      </div>

    </section>
  );
}