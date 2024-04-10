import React from 'react';
import './App.css';
import AppHeader from "./AppHeader";
import PalindromePermutation from "./PalindromePermutation";
import OneAway from "./OneAway";
import StringCompression from "./StringCompression";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <PalindromePermutation/>
            <OneAway/>
            <StringCompression/>
        </div>
    );
}

export default App;
