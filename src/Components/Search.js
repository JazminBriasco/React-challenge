import React from 'react';
import {searchHero} from '../Application/Api.js';

const Search = () =>{
    searchHero('Abomination');
    return(
        <>
            <h1>This is a Search</h1>
            
        </>
    );
}

export default Search;