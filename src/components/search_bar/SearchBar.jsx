import React from 'react'
import './search_bar.css'

const SearchBar = (props) => {
  return (
    <input
      type='search'
      className='search-bar'
      placeholder='Search by user name...'
      onChange={props.handleChange}
    />
  )
}

export default SearchBar