import React, {Component} from 'react'
import axios from 'axios'
import 'regenerator-runtime/runtime'
import './search.css'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      searchValue: '',
      searchResults: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

   async handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
    let searchQuery = event.target.value
    const {data} =  await axios.get('/api/search?value=' + searchQuery)
    if(data.length >= 51){
      this.setState({
        searchResults: [],
      })
    } else {
    this.setState({
      searchResults: data
    })}
  }

  onClick(state){
    this.setState({
      searchValue: state
    })
  }

  onSearch(state){
    let path = `https://www.vote.org/register-to-vote/${state.toLowerCase()}`
    window.open(path)
  }

  render() {
    return (
      <div>
        <div className='searchContainer'>
        <h1 className='title'>Register to Vote!</h1>
        <div className='barContainer'>
        <input
          onChange={this.handleChange}
          name='searchValue'
          value={this.state.searchValue}
          className='searchBar'>
        </input>
        <button
          type='submit'
          className='searchButton'
          onClick={() => this.onSearch(this.state.searchValue)}
          >
            Search
        </button>
        </div>
        <div className='dropdown'>
        {this.state.searchResults.length ?
          this.state.searchResults.map( (state, idx) => {
            return <div key ={idx} className='state'
            onClick={() => this.onClick(state)}>{state}
            </div>
          })
          : null
        }
        </div>
        </div>
      </div>
    )
  }
}

export default Search
