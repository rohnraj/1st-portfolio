import React, { useContext, useEffect, useState, createContext } from 'react';
import App from '../../src/App'
const ThemeContext = createContext(); //creating context

export const useTheme = () => useContext(ThemeContext); //changing hook name 

function ThemeProvider() {
    const [theme, setTheme] = useState(localStorage.getItem('t') || 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme); // Fixing the attribute name to 'data-theme'
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => { // Declare toggleTheme function properly
        // console.log('theme changed');
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Corrected 'Provider' to 'provider' */}
            <App/>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
