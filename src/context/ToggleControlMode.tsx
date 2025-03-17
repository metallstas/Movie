import { ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material"
import { createContext, useEffect, useState } from "react"

interface IContext {
    modeTheme: string,  
    toggleMode: () => void
}

export const ColorModeContext = createContext<IContext>({modeTheme: '', toggleMode: () => {}})

const ToggleColorMode = ({children}: any) => {
    const [modeTheme, setModeTheme] = useState<any>('dark')

    const theme = createTheme({
        palette: {
          mode: modeTheme,
        },
      });

    useEffect(() => {
        const modeFromLocal = localStorage.getItem('theme')

        if (modeFromLocal) {
            setModeTheme(modeFromLocal)
        } else {
            localStorage.setItem('theme', 'dark')
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', modeTheme)
    }, [modeTheme])

    const toggleMode: () => void = () => {
        setModeTheme((prev: string) => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ColorModeContext value={{modeTheme, toggleMode}}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext>
)
}

export default ToggleColorMode
