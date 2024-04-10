import React from 'react';
import {Typography} from "@mui/material";

const OneAway = () => {

    const isOneAway = (a: string, b: string) => {
        if(Math.abs(a.length - b.length) > 1){
            return false;
        }

        const s1 = a.length < b.length ? Array.from(a) : Array.from(b);
        const s2 = a.length < b.length ? Array.from(b) : Array.from(a);

        let differences = 0;
        let j = 0;

        for (let i = 0; i < s1.length; i++) {
            if(s1[i] !== s2[j]){
                differences++
                if(s1.length < s2.length){
                    j++;
                }
            }
            j++;
        }

        console.log('mapA', s1);
        console.log('mapB', s2);
        console.log('differences', differences);

        return differences <= 1;
    }

    return <>
        <Typography>One Away</Typography>
        <Typography>{isOneAway('pale', 'ple') ? 'True' : 'False'}</Typography>
        <Typography>{isOneAway('pales', 'pale') ? 'True' : 'False'}</Typography>
        <Typography>{isOneAway('pale', 'bale') ? 'True' : 'False'}</Typography>
        <Typography>{isOneAway('pale', 'bake') ? 'True' : 'False'}</Typography>
    </>
};

export default OneAway;
