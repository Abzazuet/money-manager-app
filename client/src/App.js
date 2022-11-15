import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { createTheme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // Get cookie for user
    fetch("/me").then((response) => {
      if (response.ok) {
        response
          .json()
          .then((user) => dispatch({ type: "user/login", user: user }));
        navigate("/home");
      }
    });
  }, [dispatch, navigate]);
  function handleLogin(event, logData) {
    event.preventDefault();
    // Check if user exists in DB
    fetch("/login", {
      method: "POST",
      body: JSON.stringify(logData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user);
          dispatch({ type: "user/login", user: user });
        });
        window.alert("Logged in with success");
        navigate("/home");
      } else {
        window.alert("Something went wrong");
        r.json().then((err) => console.log(err.errors));
      }
    });
  }
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      dispatch({ type: "user/logout", user: {} });
      navigate("/");
    });
  }
  function handleCreateAccount(data) {
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        window.alert("Account created with success");
        navigate("/");
      } else {
        window.alert("Something went wrong");
        r.json().then((err) => console.log(err.errors));
      }
    });
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
        <Route
          exact
          path="/"
          element={<Login handleLogin={handleLogin} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup handleCreateAccount={handleCreateAccount} />}
        ></Route>
        <Route
          path="/home"
          element={<Home handleLogout={handleLogout} />}
        ></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
