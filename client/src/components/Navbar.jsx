import React, { useContext, useEffect } from "react";
import { AppBar, Box, Button, IconButton, Toolbar, useMediaQuery, } from "@mui/material";
import { Link } from "react-router-dom";
import { } from "@mui/icons-material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from '../App';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { auth, setAuth } = useContext(AuthContext);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isNonMobileDevice = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("http://localhost:7000/api/user/auth", {
        method: "GET",
        headers: {
          token: localStorage.getItem("token")
        }
      })
      const data = await res.json()
      if (res.ok) {
        setAuth(data)
      }else{
        setAuth(null)
      }
    }
    fetchUser()
  }, [auth])


  return (
    <AppBar sx={{ p: "0 5%" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <h3>SolveSpot</h3>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {isNonMobileDevice ?
            <>
               {auth ?
                <>
                  <Button><Link style={{ color: "#fff", textDecoration: "none" }} to={"/"}>Home</Link></Button>
                  <Button><Link style={{ color: "#fff", textDecoration: "none" }} to={"/CreatePost"}>Create Blog</Link></Button>
                 
                </>
                :
                <>
                  <Button><Link style={{ color: "#fff", textDecoration: "none" }} to={"/Login"}>Login</Link></Button>
                  <Button><Link style={{ color: "#fff", textDecoration: "none" }} to={"/Register"}>Register</Link></Button>
                </>
              }
            </>
            :
            <>
              <IconButton
                sx={{ color: "#fff" }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}><Link style={{ color: "#333", textDecoration: "none" }} to={"/"}>Home</Link></MenuItem>,
                <MenuItem onClick={handleClose}><Link style={{ color: "#333", textDecoration: "none" }} to={"/CreatePost"}>Create Blog</Link></MenuItem>,
                <MenuItem onClick={handleClose}><Link style={{ color: "#333", textDecoration: "none" }} to={"/Login"}>Login</Link></MenuItem>,
                <MenuItem onClick={handleClose}><Link style={{ color: "#333", textDecoration: "none" }} to={"/Register"}>Register</Link></MenuItem>
              </Menu>
            </>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
