import Home from "./views/Home/Home";
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import {ThemeProvider, createTheme} from "@mui/material";
import {colourPalette} from "./const/colourPalette";
import {font} from "./const/font";
import {Toaster} from "react-hot-toast";
import "./App.css";

const themes = createTheme({
  ...colourPalette,
  ...font,
});

function App() {
  return (
    <>
      <ThemeProvider theme={themes}>
        <Toaster />
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
