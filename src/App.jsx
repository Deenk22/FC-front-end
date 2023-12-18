import Home from "./views/Home/Home";
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
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
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
