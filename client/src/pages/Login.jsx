import React, { useState } from "react";
import "../styles/Login.css";
import { useInputValidation } from "6pp";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponent";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  return (
    <>
      <section>
        {Array.from({ length: 150 }).map((_, index) => (
          <span key={index}></span>
        ))}
        <Container
          className="login"
          component={"main"}
          maxWidth="xs"
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 4,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgb(52 52 52)",
            }}
          >
            {isLogin ? (
              <>
                <Typography
                  variant="h4"
                  sx={{
                    color: "darkgreen",
                  }}
                >
                  Login
                </Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                >
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                  />

                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                  />

                  <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-green-50  overflow-hidden h-14 w-64 rounded-md bg-green-200 p-2 flex justify-center items-center font-extrabold mt-4 ml-8 ">
                    <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-green-900"></div>
                    <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-green-800"></div>
                    <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-green-700"></div>
                    <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-green-600"></div>
                    <p className="z-10">Login</p>
                  </button>

                  <Typography textAlign={"center"} m={"1rem"}>
                    OR
                  </Typography>

                  <Button
                    className=" bg-green-400"
                    fullWidth
                    variant="text"
                    onClick={toggleLogin}
                    sx={{ color: "white" }}
                  >
                    Sign Up Instead
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Typography variant="h5">Sign Up</Typography>
                <form
                  style={{
                    width: "100%",
                    marginTop: "1rem",
                  }}
                >
                  <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                    <Avatar
                      sx={{
                        width: "10rem",
                        height: "10rem",
                        objectFit: "contain",
                      }}
                    />

                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        color: "white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        ":hover": {
                          bgcolor: "rgba(0,0,0,0.7)",
                        },
                      }}
                      component="label"
                    >
                      <>
                        <CameraAltIcon />
                        <VisuallyHiddenInput type="file" />
                      </>
                    </IconButton>
                  </Stack>

                  <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    variant="caption"
                  ></Typography>

                  <TextField
                    required
                    fullWidth
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    value={name.value}
                    onChange={name.changeHandler}
                  />

                  <TextField
                    required
                    fullWidth
                    label="Bio"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                  />

                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                  />

                  <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-green-50  overflow-hidden h-14 w-64 rounded-md bg-green-200 p-2 flex justify-center items-center font-extrabold mt-4 ml-8 ">
                    <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-green-900"></div>
                    <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-green-800"></div>
                    <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-green-700"></div>
                    <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-green-600"></div>
                    <p className="z-10">Sign up</p>
                  </button>

                  <Typography textAlign={"center"} m={"1rem"}>
                    OR
                  </Typography>

                  <Button fullWidth variant="text" onClick={toggleLogin}>
                    Login Instead
                  </Button>
                </form>
              </>
            )}
          </Paper>
        </Container>
      </section>
    </>
  );
};
export default Login;
