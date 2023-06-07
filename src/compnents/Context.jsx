import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [dataCep, setDataCep] = useState('');

    useEffect(() => {

        const url = 'https://viacep.com.br/ws/58051025/json/';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDataCep(data)
            })
    }, [])




    return <ThemeContext.Provider value={{dataCep}}>{children}</ThemeContext.Provider>
}

