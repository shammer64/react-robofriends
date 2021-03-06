import React from 'react';

const SearchBox = ({searchField, searchChangeHandler}) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='Search robots'
        onChange={searchChangeHandler} />
    </div>
  )
}

export default SearchBox;