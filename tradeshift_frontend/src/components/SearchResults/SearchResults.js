import React, {useState} from 'react';
import '../../App.css';

const SearchResults = (props) => {


  return (
    <div className="App">
        {props.resultData.map(element => (
            <p>{element.name}</p>
        ))}
    </div>
  );
}

export default SearchResults;
