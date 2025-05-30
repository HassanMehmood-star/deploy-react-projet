import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import HeroSection from "./components/HeroSection"
import "./App.css"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff6b35",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#000000",
      paper: "#111111",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />
    </ThemeProvider>
  )
}

export default App
