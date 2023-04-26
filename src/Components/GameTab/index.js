import './index.css'

const GameTab = props => {
  const {tabDetails, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabId = () => {
    const {setActiveTabId} = props
    setActiveTabId(tabId)
  }
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tabItem">
      <button className={tabBtnClassName} type="button" onClick={onClickTabId}>
        {displayText}
      </button>
    </li>
  )
}
export default GameTab
