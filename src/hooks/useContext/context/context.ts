import { createContext } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => { console.log('default theme') }
})

export { ThemeContext }
