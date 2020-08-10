import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import'./Main.scss';


//Components
import SearchForm from '../SearchForm/SearchForm';
import NavBar from '../NavBar/NavBar';


function Main() {
  return (
    <div className="App" >
        <NavBar />
        <div className="mainContainer">
            <div className="headerStyles">
                <h1> Tradeshift Global Search </h1>
                <br />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <SearchForm />
        </div>


    </div>
  );
}

export default Main;
