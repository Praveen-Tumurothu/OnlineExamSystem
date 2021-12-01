import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdminPanelSettingsSharpIcon from "@mui/icons-material/AdminPanelSettingsSharp";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const settings = ["Dashboard", "Logout"];

const AdminAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const history = useHistory();

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <AdminPanelSettingsSharpIcon />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="ADMIN PAGE" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">ADMIN PAGE</Typography>
              </MenuItem>

              <MenuItem key="Add Course" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Add Course</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <AdminPanelSettingsSharpIcon />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="ADMIN PAGE"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              ADMIN PAGE
            </Button>
          </Box>
          {props.auth && (
            <Box sx={{ flexGrow: 60, display: { xs: "none", md: "flex" } }}>
              <Link to="/admin/addNewCourse" style={{ textDecoration: "none" }}>
                <Button
                  key="Add Course"
                  //onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Add Course
                </Button>
              </Link>
            </Box>
          )}

          {props.prop === "tq" ? (
            <Box sx={{ flexGrow: 60, display: { xs: "none", md: "flex" } }}>
              <Link
                to="/admin/addNewTestQuestion"
                style={{ textDecoration: "none" }}
              >
                <Button
                  key="Add Test Question"
                  //onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Add Test Question
                </Button>
              </Link>
            </Box>
          ) : (
            ""
          )}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Admin"
                  src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-admin-computer-and-laptop-itim2101-lineal-color-itim2101-1.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  {setting === settings[0] && (
                    <Button
                      onClick={() =>
                        history.push({
                          pathname: "/controls",
                          state: {
                            response: "true",
                          },
                        })
                      }
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </Button>
                  )}
                  {setting === settings[1] && (
                    <Button
                      onClick={() => {
                        axios
                          .get("http://localhost:8080/admin/logout")
                          .then((res) =>
                            history.push({
                              pathname: "/",
                            })
                          );
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </Button>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AdminAppBar;
