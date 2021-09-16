import { createContext, ReactNode } from "react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextData = {
    theme: string;
    buttonTheme: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
    children: ReactNode
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>('light');
    const [buttonTheme, setButtonTheme] = useState(false)

    function getTheme() {

        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }

        setButtonTheme(theme === 'light' ? false : true);
        document.querySelector('body').setAttribute('data-theme', theme);

        // Styles 
        const themes = {
            dark: {
                '--primaryColor': '#191622',
                '--secondaryColor': '#44475a',
                '--font1': '#fff',
                '--boxShadow': 'none',
                '--linear': 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                '--transparent': '#44475a7b',
                '--dark': '#62657a',
                '--input': '#fff',
                '--textarea': '#44475a6c',
                '--placeholder' : '#a4b9d8',
                '--welcomeFontColor' : '#fff',
                '--addMedicineFont' : '#fff'

            },

            light: {
                '--primaryColor': '#e1e1e6',
                '--secondaryColor': '#D6D5E8',
                '--font1': '#6b42e1',
                '--boxShadow': '#6b42e1',
                '--linear': 'linear-gradient(180deg, #6b42e1 0%, rgba(59, 31, 141, 0.22) 100%)',
                '--transparent': '#6a42e1a1',
                '--dark': '#3b1f8d',
                '--input': '#000',
                '--textarea': '#d6d5e84e',
                '--placeholder' : '#6b42e1',
                '--welcomeFontColor' : '#3b1f8d',
                '--addMedicineFont' : '#3b1f8d'

            },
        }

        // Active theme in page
        function activateTheme(theme) {
            for (let prop in theme) {
                document.querySelector<HTMLElement>(':root').style.setProperty(prop, theme[prop]);
            }
        }

        // Switch to the dark theme:
        activateTheme(theme === 'light' ? themes.light : themes.dark);
    }

    // Get theme when refresh page
    useEffect(() => {
        getTheme();
    })

    // Button toogle theme
    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem('theme', theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                buttonTheme, 
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
