import { createContext, useContext } from "react";
import { createTheme } from '@mui/material/styles';

export const ColorsContext = createContext();

export const ColorsProvider = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#4CAF50",
                light: "#A5D6A7",
                dark: "#1B5E20",

            },
            primaryLight: {
                main: "#A5D6A7",
            },
            secondary: {
                main: "#ffffff",
                light: "#ffffff",
                dark: "#ffffff",
            },
            error: {
                main: "#F44336",
                light: "#F6685E",
                dark: "#AA2E25",
            },
            warning: {
                main: "#FFA726",
                light: "#FFB851",
                dark: "#B2741A",
            },
            warningLight: {
                main: "#FFB851"
            },
            info: {
                main: "#26C6DA",
                light: "#51D1E1",
                dark: "#1A8A98",
            },
            sucess: {
                main: "#2E7D32",
                light: "#ffffff",
                dark: "#205723",
            },
            grey: {
                main: "#BDBDBD",
                light: "#E0E0E0",
                dark: "#212121",
            }
        },
    });
    return (
        <ColorsContext.Provider
            value={{
                theme
            }}
        >
            {children}
        </ColorsContext.Provider>
    );
};
export const useColors = () => useContext(ColorsContext);
