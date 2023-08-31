import './index.css'

const TabItem = props => {
  const {tabsList, clickIcon, isActive} = props
  const {tabId, displayText} = tabsList

  const onClickIcon = () => {
    clickIcon(tabId)
  }

  const activeBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tabs-container">
      <button
        type="button"
        className={`tabs-item ${activeBtnClassName}`}
        onClick={onClickIcon}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
