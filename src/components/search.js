import React from 'react';

const Search = ({handleSearch}) => {
    return(
        <div className='search'>
            <input 
            type="search" 
            placeholder='Digite um usuário'
            onKeyUp={handleSearch} />
        </div>
    )
}

export default Search;