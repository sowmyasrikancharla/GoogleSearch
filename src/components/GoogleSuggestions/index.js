// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchUser = (uniqueNo, suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(user =>
      user.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="con">
        <img
          className="img-set"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="f-con">
          <div className="sub-con">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="inp"
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <div>
            <ul>
              {searchResults.map(each => (
                <SuggestionItem
                  suggestionsList={each}
                  key={each.uniqueNo}
                  searchUser={this.searchUser}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
