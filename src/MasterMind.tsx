import React from 'react';
import {Paper, Typography} from "@mui/material";

const solution = "RGBY";
const MasterMind = () => {

    const calculateHits = (guess: string) => {
        const result = {hits: 0, pseudoHits: 0};
        for (let i = 0; i < 4; i++) {
            if(solution.charAt(i) === guess.charAt(i)){
                result.hits++;
            } else if (guess.includes(solution.charAt(i))){
                result.pseudoHits++;
            }
        }
        return `Hits: ${result.hits}\nPseudo-Hits: ${result.pseudoHits}`;
    }

    return <Paper sx={{m: '1rem', p: '1rem'}}>
        <Typography variant="h5" >Master Mind</Typography>
        <Typography variant="h6" gutterBottom>Solution: {solution}, Guess: GGRR</Typography>
        <Typography sx={{whiteSpace: "pre"}}>{calculateHits("GGRR")}</Typography>
    </Paper>
}

export default MasterMind;
