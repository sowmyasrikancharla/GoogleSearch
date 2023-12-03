// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, searchUser} = props
  const {id, suggestion, uniqueNo} = suggestionsList
  const onSearch = () => {
    searchUser(uniqueNo, suggestion)
  }

  return (
    <div className="s-con">
      <li className="no-dot">
        <p className="text">{suggestionsList.suggestion}</p>
        <img
          onClick={onSearch}
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="logo"
        />
      </li>
    </div>
  )
}

export default SuggestionItem
