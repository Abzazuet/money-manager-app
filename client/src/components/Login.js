import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";
function Login({onSubmit, onCreateAccount}) {
  const [data, setDataChange] = useState({
    username: "",
    password: "",
  })
  function handleSubmit(){
    onSubmit();
  }
  function handleCreateAccount(){
    onCreateAccount();
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        backgroundColor: "#1C538E",
        color: "white",
        borderRadius: "5px",
        maxWidth: "50vw",
        margin: "0 auto",
      }}
    >
      <Grid container align="center" justifyContent="center" spacing={4}>
        <Typography variant="h2">Login</Typography>
        <Grid container item spacing={4}>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel
                htmlFor="username"
                sx={{
                  color: "white",
                }}
              >
                Enter Username
              </InputLabel>
              <Input
                id="username"
                sx={{
                  color: "white",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle
                      sx={{
                        color: "white",
                      }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel
                htmlFor="password"
                sx={{
                  color: "white",
                }}
              >
                Enter Password
              </InputLabel>
              <Input
                id="password"
                type="password"
                sx={{
                  color: "white",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <KeyIcon
                      sx={{
                        color: "white",
                      }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Button fullWidth variant="contained" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Link onClick={onCreateAccount}>
            <Typography variant="h6" sx={{color: "white", '&:hover': {
              backgroundColor: "primary.main",
            },
            border: '1px dashed grey',
            }}>
              Create an account
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Login;
