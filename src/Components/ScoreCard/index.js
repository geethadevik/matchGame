import './index.css'

const ScoreCard = props => {
  const {totalPoints, onClickPlayAgain} = props
  const imgUrl =
    'https://assets.ccbp.in/frontend/react-js/match-game-trophy.png'
  return (
    <div className="card-container">
      <img src={imgUrl} alt="trophy" className="trophy-image" />
      <p className="score-text">YOUR SCORE</p>
      <p className="score">{totalPoints}</p>
      <button
        className="play-again-btn"
        type="button"
        onClick={onClickPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="reset-image"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default ScoreCard
