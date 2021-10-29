import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        spacing: (number: number) => number
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        spacing?: number,
        contrastThreshold?: number,
        tonalOffset?: number,
        palete?: {
            primary?: {
                main?: string
            },
            secondary?: {
                main?: string
            },
        }
    }
}
 
const theme = createTheme({
    spacing: 4,
    palette: {
        primary: {
            main: 'rgba(206, 17, 38, 0.05)',
            light: 'rgba(206, 17, 39, 0.116)'
        },
        secondary: {
            main: 'rgba(0, 0, 0, 0.87)'
        }
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
}); 

export default theme;