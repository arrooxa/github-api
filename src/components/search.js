import React from 'react';
import PropTypes from 'prop-types';

const Search = ({handleSearch, isDisabled}) => {
    return(
        <div className='search'>
            <input 
            type="search" 
            placeholder='Digite um usuário'
            disabled={isDisabled}
            onKeyUp={handleSearch} />
        </div>
    )
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search;