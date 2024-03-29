import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useState,useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../../../Redux/AuthSlice/AuthSlice";
import { reset_redirectToUpdate } from "../../../Redux/AuthSlice/AuthSlice";

export default function Login() {
 const [username, setusername] = useState('');
 const[password,setPassword] = useState('');

 const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
   

  const { status } = useSelector((s) => s?.Auth);
  const { redirect } = useSelector((state) => state.Auth);

 const dispatch = useDispatch();
 const navigate =useNavigate();

     const  submitData=(e)=>{
         e.preventDefault();
       const formData = new FormData();
       formData.append("username",username);
       formData.append("password",password);
        // dispatch(login(formData));
       dispatch(login({username,password}))
     };


  

  useEffect(() => {
    dispatch(reset_redirectToUpdate(null));
  }, [dispatch]);

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    if (token !== null && token !== undefined && token !== "") {
      isInLoginPage && navigate("/");
      // navigate("/");
    }
  };
  useEffect(() => {
    RedirectUser();
  }, [redirect]);


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
        <Typography component="h1" variant="h5">
          Sign In Page 
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username Address"
            name="username"
            value={username}



            onChange={(e)=>setusername(e.target.value)}


            autoComplete="username"
            autoFocus
          />


<TextField
      label="Password"
      id="password"
      name="password"
      margin="normal"
            required
            fullWidth
            value={password}


       onChange={(e)=>setPassword(e.target.value)}


      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />



          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

            onClick={submitData}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
