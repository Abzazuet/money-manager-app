import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { createTheme, Typography } from "@mui/material";

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
  });
  function handleLogin(){

  }
  function handleCreateAccount(){

  }
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h3"
        sx={{
          color: "white",
          minHeight: "10vh",
          margin: "auto auto auto 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Money Manager Application
      </Typography>
      <Routes>
        <Route exact path="/" element={<Login onLogin={handleLogin} onCreateAccount={handleCreateAccount}/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
