import React, {PropTypes} from 'react'

const Search = ({handleSearch}) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.prototype ={
  handleSearch: PropTypes.func.isRequired
}

export default Search
