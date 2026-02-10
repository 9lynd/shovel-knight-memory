import '../styles/Card.css'

function Card({ character, onCardClick }) {
  return (
    <div className='card' onClick={() => onCardClick(character.id)}>
      <img src={character.img} alt={character.name} />
      <span className='card-name'>{character.name}</span>
    </div>
  );
}

export default Card;