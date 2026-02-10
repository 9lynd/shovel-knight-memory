import '../styles/ScoreBoard.css'

function ScoreBoard({ score, bestScore }) {
  return (
    <div className='scoreboard'>
      <div className='score-item'>
        <span className='score-label'>SCORE</span>
        <span className='score-value'>{score}</span>
      </div>
      <div className='score-item'>
        <span className='score-label'>BEST</span>
        <span className='score-value'>{bestScore}</span>
      </div>
    </div>
  );
}

export default ScoreBoard;