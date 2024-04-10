import React from 'react';
import {Paper, Typography} from "@mui/material";

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

    return <Paper sx={{m: '1rem', p: '1rem'}}>
        <Typography variant="h5" gutterBottom>String Compression</Typography>
        <Typography>{compressString('aabcccccaaa')}</Typography>
        <Typography>{compressString('abcccccaaa')}</Typography>
        <Typography>{compressString('aabcccddccaaa')}</Typography>
        <Typography>{compressString('aazzbcceeecccaaa')}</Typography>
    </Paper>;
}

export default StringCompression;
