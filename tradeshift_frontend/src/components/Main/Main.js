import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

//Components
import SearchForm from '../SearchForm/SearchForm';
import NavBar from '../NavBar/NavBar';

function Main() {
  return (
    <div className="App">
        <NavBar />
        <SearchForm />


    </div>
  );
}

export default Main;
