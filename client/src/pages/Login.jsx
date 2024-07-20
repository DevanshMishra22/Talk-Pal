import React, { useState } from "react";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
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
import "../styles/Login.css";
import { usernameValidation } from "../utils/Validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidation);
  const password = useStrongPassword();

  const avatar = useFileHandler("single");

  const handleLogIn = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

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
                  className="font-bold"
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
                  onSubmit={handleLogIn}
                >
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}
                    InputProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                  />

                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
                    InputProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
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
                    className=" bg-green-400 hover:text-green-800"
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
                <div className="register">
                  <Typography
                    className="flex justify-center text-green-800 font-bold"
                    variant="h5"
                  >
                    Sign Up
                  </Typography>
                  <form
                    style={{
                      width: "100%",
                      marginTop: "1rem",
                    }}
                    onSubmit={handleSignUp}
                  >
                    <Stack
                      position={"relative"}
                      width={"10rem"}
                      margin={"auto"}
                    >
                      <Avatar
                        sx={{
                          width: "10rem",
                          height: "10rem",
                          objectFit: "contain",
                        }}
                        src={avatar.preview}
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
                          <VisuallyHiddenInput
                            type="file"
                            onChange={avatar.changeHandler}
                          />
                        </>
                      </IconButton>
                    </Stack>

                    {avatar.error && (
                      <Typography
                        m={"1rem auto"}
                        display={"block"}
                        color="error"
                        variant="caption"
                      >
                        {avatar.error}
                      </Typography>
                    )}

                    <TextField
                      required
                      fullWidth
                      label="Name"
                      margin="normal"
                      variant="outlined"
                      value={name.value}
                      onChange={name.changeHandler}
                      InputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />

                    <TextField
                      required
                      fullWidth
                      label="Bio"
                      margin="normal"
                      variant="outlined"
                      value={bio.value}
                      onChange={bio.changeHandler}
                      InputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />

                    <TextField
                      required
                      fullWidth
                      label="Username"
                      margin="normal"
                      variant="outlined"
                      value={username.value}
                      onChange={username.changeHandler}
                      InputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />

                    {username.error && (
                      <Typography color="error" variant="caption">
                        {username.error}
                      </Typography>
                    )}

                    <TextField
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      margin="normal"
                      variant="outlined"
                      value={password.value}
                      onChange={password.changeHandler}
                      InputProps={{
                        style: {
                          color: "white",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "white",
                        },
                      }}
                    />

                    {password.error && (
                      <Typography
                        sx={{
                          width: "100%",
                        }}
                        color="error"
                        variant="caption"
                      >
                        {password.error}
                      </Typography>
                    )}

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

                    <Button
                      className=" bg-green-400 hover:text-green-800"
                      fullWidth
                      variant="text"
                      onClick={toggleLogin}
                      sx={{ color: "white" }}
                    >
                      Login Instead
                    </Button>
                  </form>
                </div>
              </>
            )}
          </Paper>
        </Container>
      </section>
    </>
  );
};
export default Login;
