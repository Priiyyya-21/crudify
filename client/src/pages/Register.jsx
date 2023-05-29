import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Register = () => {
  return (
    <Card
      sx={{
        p: 4,
        py: 5,
        maxWidth: "550px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: "15px",
      }}
      elevation={10}
    >
      <CardContent sx={{ m: 0 }}>
        <Typography gutterBottom variant="h4" component="div" sx={{ m: 0 }}>
          Register Here!
        </Typography>
      </CardContent>
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        type={"text"}
        name={"name"}
      />
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        type={"email"}
        name={"email"}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type={"password"}
        name={"password"}
      />
      <Button variant="contained">Register</Button>
    </Card>
  );
};

export default Register;
