import { useEffect } from 'react';


const useConsole = (value) => {
    return useEffect(() => {
        console.log(value);
    });
};

export default useConsole;
