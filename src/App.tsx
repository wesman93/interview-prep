import React from 'react';
import './App.css';
import AppHeader from "./AppHeader";
import PalindromePermutation from "./PalindromePermutation";
import OneAway from "./OneAway";
import StringCompression from "./StringCompression";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Paper} from "@mui/material";
import MasterMind from "./MasterMind";
import ContinuousMedian from "./ContinuousMedian";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Paper className="App">
                <AppHeader/>
                <PalindromePermutation/>
                <OneAway/>
                <StringCompression/>
                <MasterMind/>
                <ContinuousMedian/>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
