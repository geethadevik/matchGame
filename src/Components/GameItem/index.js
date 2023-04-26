import './index.css'

const GameItem = props => {
  const {gameDetails, setActiveImageId} = props
  const {thumbnailUrl, imageUrl} = gameDetails

  const onClickGameId = () => {
    setActiveImageId(imageUrl)
  }

  return (
    <li className="game-item">
      <button className="game-button" type="button" onClick={onClickGameId}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default GameItem
