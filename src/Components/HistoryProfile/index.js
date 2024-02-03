import './index.css'

const HistoryProfile = props => {
  const {userDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDeleteUser = () => {
    onDelete(id)
  }

  return (
    <li className="userCardContainer">
      <p>{timeAccessed}</p>

      <img src={logoUrl} className="profile" alt="domain logo" />
      <div className="userDetailsContainer">
        <p className="user-name">{title}</p>
        <p className="user-designation">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="butt"
        data-testid="delete"
        onClick={onDeleteUser}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

export default HistoryProfile
