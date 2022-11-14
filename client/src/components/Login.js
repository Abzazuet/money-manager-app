import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  colors,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        backgroundColor: "#1C538E",
        margin: "0 5rem",
        color: "white",
        borderRadius: "5px",
      }}
    >
      <Grid container align="center" justifyContent="center" spacing={4}>
        <h2>Login</h2>
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
        <Grid item>
          <Button fullWidth variant="contained" type="submit" >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Login;
