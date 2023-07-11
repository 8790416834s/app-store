import './index.css'

const AppItem = props => {
  const {searchValueList} = props
  const {appName, imageUrl} = searchValueList

  return (
    <div>
      <li className="icon-container">
        <img src={imageUrl} alt={appName} className="icon-img" />
        <p className="icon-name">{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
