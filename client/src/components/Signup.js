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
import { useNavigate } from "react-router";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
function Signup({ handleCreateAccount }) {
  const navigate = useNavigate();

  const [data, setDataChange] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });
  function handleChange(e) {
    setDataChange({
      ...data,
      [e.target.id]: e.target.value,
    });
  }
  function handleSubmit() {
    handleCreateAccount(data);
    console.log("a");
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        backgroundColor: "#1C538E",
        color: "white",
        borderRadius: "5px",
        maxWidth: "50vw",
        margin: "0 auto",
      }}
    >
      <Grid
        container
        align="center"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={11}>
          <Link to="/">
            <Typography
              variant="h6"
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
                border: "1px dashed grey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Go back
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h2" xs={2}>
            Signup
          </Typography>
        </Grid>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
          <Grid item xs={12}>
            <FormControl>
              <InputLabel
                htmlFor="name"
                sx={{
                  color: "white",
                }}
              >
                Enter Name
              </InputLabel>
              <Input
                id="name"
                type="text"
                sx={{
                  color: "white",
                }}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <DriveFileRenameOutlineIcon
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
                htmlFor="email"
                sx={{
                  color: "white",
                }}
              >
                Enter Email
              </InputLabel>
              <Input
                id="email"
                type="mail"
                sx={{
                  color: "white",
                }}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <MailIcon
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
          <Button
            fullWidth
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Signup;
