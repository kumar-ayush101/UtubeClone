import React from "react";
import './App.css'
import { useState } from "react";

const SearchBar=({onFormSubmit}) => {
  const[term,setTerm] = useState('');

  const onInputChange=(event) =>{
    setTerm(event.target.value)
  }

  const onSubmit=(event)=>{
       event.preventDefault();
       onFormSubmit(term);

  }

  return(
    <div className="search-bar">
      <form onSubmit={onSubmit} className="search-bar-form">
        <input type="text" value={term} onChange={onInputChange} className="search-input" />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  )
}

export default SearchBar;