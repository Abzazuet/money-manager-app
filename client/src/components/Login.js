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
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      ml={2}
      mr={2}
    >
      <Grid
        container
        align="center"
        justifyContent="center"
        style={{ backgroundColor: "grey" }}
      >
        <h2>Login Form</h2>
        <Grid container item align="center" justifyContent="center" spacing={5}>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="username">Enter Username</InputLabel>
              <Input
                id="username"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="password">Enter Password</InputLabel>
              <Input
                id="password"
                startAdornment={
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Login;
