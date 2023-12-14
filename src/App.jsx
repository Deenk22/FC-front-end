import Home from "./views/Home/Home";
import {ThemeProvider, createTheme} from "@mui/material";
import {colourPalette} from "./const/colourPalette";
import {font} from "./const/font";
import "./App.css";

const themes = createTheme({
  ...colourPalette,
  ...font,
});

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
