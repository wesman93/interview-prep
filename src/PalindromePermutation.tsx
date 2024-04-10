import React from 'react';
import {Typography} from "@mui/material";

const PalindromePermutation = () => {

    const getCountMap = (arr: string[]) => {
        const map = new Map<string, number>();
        arr.forEach(e => {
            let count = (map.get(e) || 0);
            if(e.charCodeAt(0) >= 'a'.charCodeAt(0) && 'z'.charCodeAt(0)) {
                count++;
            } else {
                count--;
            }
            map.set(e, count);
        });
        return map;
    }
    const isPermutation = (s: string) => {
        const perm = Array.from(s.toLowerCase());
        const map = getCountMap(perm);
        let oddCount = 0;
        map.forEach((value, key) => {
            if(value%2 === 1){
                oddCount++;
            }
        })
        console.log('map', map);


        return oddCount%2 === 1;
    }

    return (
        <>
            <Typography>Palindrome Permutation?</Typography>
            <Typography>{isPermutation("Tact Coa") ? 'True' : 'False'}</Typography>
        </>
    );
}

export default PalindromePermutation;
