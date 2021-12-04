import './index.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem'

const {initialHistoryList} = this.props

class BrowserHistory extends Component {
    const {initialHistoryList} = this.props

  state = {
    inputSearch: '',
    initialHistoryList: initialHistoryList,
  }

  getFiltered = list => {
    const {inputSearch} = this.state
    const newList = list.filter(each =>
      each.title.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    return newList
  }

  updateInput = event => {
    this.setState({inputSearch: event.target.value})
  }

  deleteItem=(id)=>{
      const {initialHistoryList}=this.state
      const newList=initialHistoryList.filter(each=>(each.id!==id))
      this.setState({initialHistoryList:newList})
  }

  render() {
    const {inputSearch, initialHistoryList} = this.state
    const filteredHistory = getFiltered(initialHistoryList)

    return (
      <div className="bg-container">
        <div className="top-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="hist-img"
            alt="app logo"
          />
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </div>
          <div className="search-field">
            <input
              type="search"
              placeholder="Search history"
              value={this.inputSearch}
              onChange={this.updateInput}
            />
          </div>
        </div>
        <div className="history-items-container">
          <ul>
            filteredHistory.map(each=>(
            <HistoryItem key={each.id} details={each} deleteItem={this.deleteItem}/>)
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
