import React, { useContext, useEffect, useState, createContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext); //custom hook

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme); // Fixing the attribute name to 'data-theme'
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => { // Declare toggleTheme function properly
        console.log('theme changed');
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Corrected 'Provider' to 'provider' */}
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
