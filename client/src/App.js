import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import CreatePost from "./pages/CreatePost";

export const AuthContext = createContext();


const App = () => {
  const [refresh,setRefresh]= useState(false);
  const [auth, setAuth] = useState(null);


  return (
    <AuthContext.Provider value={{auth,setAuth,refresh,setRefresh}}>
      <BrowserRouter>
        <Navbar />

        <Container sx={{ p: 1, mt: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreatePost" element={<CreatePost />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Container>
      </BrowserRouter>
      </AuthContext.Provider>
  );
};

export default App;
