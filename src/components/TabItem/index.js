import './index.css'

const TabItem = props => {
  const {tabsList, clickIcon} = props
  const {tabId, displayText} = tabsList

  const onClickIcon = () => {
    clickIcon(tabId)
  }

  return (
    <li className="tabs-container">
      <button type="button" className="tabs-item" onClick={onClickIcon}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
