import './App.css';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#3952D4",
      },
      secondary: {
        main: "#F45858",
      },
    },
  })
  return (
      <ThemeProvider theme={theme}>
        <h1>
          Money Manager Application
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </h1>
      </ThemeProvider>
  );
}

export default App;
