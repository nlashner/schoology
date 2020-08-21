import React, {Component} from 'react'
import axios from 'axios'
import 'regenerator-runtime/runtime'
import './search.css'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      searchResults: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

   async handleChange(event){
    let searchQuery = event.target.value
    const {data} =  await axios.get('/api/search?value=' + searchQuery)
    if(data.length >= 51){
      this.setState({
        searchResults: []
      })
    } else {
    this.setState({
      searchResults: data
    })}
  }

  render() {
    return (
      <div>
        <div className='searchContainer'>
        <h1 className='title'>Search for a State!</h1>
        <input onChange={this.handleChange} className='searchBar'></input>
        <div className='dropdown'>
        {this.state.searchResults.length ?
          this.state.searchResults.map( (state, idx) => {
            return <div key ={idx} className='state'>{state}</div>
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
