import React, {useEffect, useState} from 'react';
import {Button, Paper, Typography} from "@mui/material";

const ContinuousMedian = () => {
    const [state, setState] = useState<number[]>([]);
    const [median, setMedian] = useState<number>();
    const sortedInsert = (num: number) => {
        if (state.length === 0) {
            setState([num]);
            return;
        }

        const originalSize = state.length;

        for (let i = 0; i < state.length; i++){
            if (num < state[i]) {
                state.splice(i,0,num);
                setState([...state])
                break;
            }
        }

        if(originalSize === state.length){
            setState([...state, num]);
        }
    };

    const updateMedian = () => {
        const maxIndex = state.length-1;

        if(state.length%2 === 0){
            setMedian((state[Math.floor(maxIndex/2)] + state[Math.ceil(maxIndex/2)])/2 )
        } else {
            setMedian(state[Math.floor(maxIndex/2)])
        }
    }

    useEffect(() => updateMedian(), [state]);

    return <Paper sx={{m: '1rem', p: '1rem'}}>
        <Typography variant="h5" gutterBottom>Continuous Median</Typography>
        <Typography>{state.join(', ')}</Typography>
        <Typography>Median: {median}</Typography>
        <Button variant="contained" onClick={() => sortedInsert(Math.floor(Math.random() * 100))
        }>Generate Random #</Button>
    </Paper>;
}

export default ContinuousMedian;
