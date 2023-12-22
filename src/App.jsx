import Home from "./views/Home/Home";
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import {ThemeProvider, createTheme} from "@mui/material";
import {colourPalette} from "./const/colourPalette";
import {font} from "./const/font";
import {Toaster} from "react-hot-toast";
import "./App.css";
import Login from "./views/Login/Login";
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/useAuth";

const themes = createTheme({
  ...colourPalette,
  ...font,
});

function App() {
  const {user, setUser} = useAuth();

  return (
    <>
      <AuthContext.Provider value={{user, setUser}}>
        <ThemeProvider theme={themes}>
          <Toaster />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={<Layout />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
