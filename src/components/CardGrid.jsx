import Card from "./Card";
import '../styles/CardGrid.css';

function CardGrid({ characters, onCardClick }) {
  return (
    <div className="card-grid">
      {
        characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            onCardClick={onCardClick}
          />
        ))
      }
    </div>
  );
}

export default CardGrid;