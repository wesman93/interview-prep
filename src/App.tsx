import React from 'react';
import './App.css';
import AppHeader from "./AppHeader";
import PalindromePermutation from "./PalindromePermutation";
import OneAway from "./OneAway";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <PalindromePermutation/>
            <OneAway/>
        </div>
    );
}

export default App;
