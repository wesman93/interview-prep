import React from 'react';
import {Typography} from "@mui/material";

const StringCompression = () => {

    const compressString = (s: string) => {
        let char = s.charAt(0);
        let count = 1;
        let result = "";

        for (let i = 1; i < s.length; i++) {
            if(s.charAt(i) === char){
                count++
            } else {
                result += char + count;
                char = s.charAt(i);
                count = 1;
            }
        }
        result += char + count;

        return result;
    };

    return <>
        <Typography>String Compression</Typography>
        <Typography>{compressString('aabcccccaaa')}</Typography>
        <Typography>{compressString('abcccccaaa')}</Typography>
        <Typography>{compressString('aabcccddccaaa')}</Typography>
        <Typography>{compressString('aazzbcceeecccaaa')}</Typography>
    </>;
}

export default StringCompression;
