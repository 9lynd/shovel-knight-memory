import { useState } from 'react';
import CardGrid from './components/CardGrid';
import ScoreBoard from './components/ScoreBoard';
import './styles/App.css';

import shovelKnight from './assets/images/Shovel_Knight.gif'
import blackKnight from './assets/images/Sprite_BlackKnight.gif'
import plagueKnight from './assets/images/Plague_Knight.gif'
import specterKnight from './assets/images/Specter_Knight.gif'
import kingKnight from './assets/images/King_Knight.gif'
import moleKnight from './assets/images/Mole_Knight.gif'
import drillKnight from './assets/images/Drill_Knight.gif'
import propellerKnight from './assets/images/Propeller_Knight.gif'
import tinkerknight from './assets/images/Tinker_Knight.gif'
import polarKnight from './assets/images/Polar_Knight.gif'
import enchantress from './assets/images/Enchantress.gif'
import shieldKnight from './assets/images/Shield_Knight.gif'
import prismKnight from './assets/images/Prism_Knight.gif'
import treasureKnight from './assets/images/Treasure_Knight_BSwap.gif'
import scrapKnight from './assets/images/SScrap_Knight.gif'


const ALL_CHARACTERS = [
  { id: 1, name: 'Shovel Knight', img: shovelKnight },
  { id: 2, name: 'Black Knight', img: blackKnight },
  { id: 3, name: 'Plague Knight', img: plagueKnight },
  { id: 4, name: 'Specter Knight', img: specterKnight },
  { id: 5, name: 'King Knight', img: kingKnight },
  { id: 6, name: 'Mole Knight', img: moleKnight },
  { id: 7, name: 'Drill Knight', img: drillKnight },
  { id: 8, name: 'Propeller Knight', img: propellerKnight },
  { id: 9, name: 'Tinker Knight', img: tinkerknight },
  { id: 10, name: 'Polar Knight', img: polarKnight },
  { id: 11, name: 'Enchantress', img: enchantress },
  { id: 12, name: 'Shield Knight', img: shieldKnight },
  { id: 13, name: 'Prism Knight', img: prismKnight },
  { id: 14, name: 'Treasure Knight', img: treasureKnight },
  { id: 15, name: 'Scrap Knight', img: scrapKnight },
];

function shuffle(array) {
  const arr = [...array]; // never mutate the original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickTwelve() {
  return shuffle(ALL_CHARACTERS).slice(0, 12);
}

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [characters, setCharacters] = useState(pickTwelve);

  function handleCardClick(id) {
    if (clickedIds.includes(id)) {
      if (score > bestScore) setBestScore(score);
      setScore(0);
      setClickedIds([]);
      setCharacters(pickTwelve());
      return;
    }

    const newScore = score + 1;
    setScore(newScore);
    if (newScore > bestScore) setBestScore(newScore);
    setClickedIds([...clickedIds, id]);

    setCharacters(pickTwelve());
  }

  return (
    <div className="app">
      <div>
        <h1 className="app-title">SHOVEL KNIGHT MEMORY</h1>
        <p className="app-subtitle">
          Click each knight only once per round.<br />
          Don't get tricked!
        </p>
      </div>
      <ScoreBoard score={score} bestScore={bestScore} />
      <CardGrid characters={characters} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;