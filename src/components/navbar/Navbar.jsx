// REACT
import { useState } from "react";
import * as React from "react";

// MATERIAL UI
import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

// MENU COLAPSABLE
import { NavListDrawer } from "./NavListDrawer";

// ICONS
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// THEME
import { useTheme } from "@mui/material/styles";
import { customTheme } from "../../config/Config";
import { useThemeStore } from "../../store/Mode";

// COMPONENTS
import { NavLink } from "react-router-dom";

// CONFIGS
import { configNavbar } from "../../config/Config";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useThemeStore();
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          background: theme.palette.primary.background.default,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ display: { sx: "flex", sm: "none" } }}
            variant="contained"
            onClick={() => setOpen(true)}
          >
            <MenuIcon style={{ color: theme.palette.primary.contrastText }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>

          <Box sx={{ height: "100%", display: { xs: "none", sm: "flex" } }}>
            {configNavbar.map((item) => (
              <Button
                startIcon={item.icon}
                component={NavLink}
                to={item.path}
                key={item.title}
                style={{ color: theme.palette.primary.contrastText }}
              >
                <Typography variant="body">{item.title}</Typography>
              </Button>
            ))}
          </Box>
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? (
              <Brightness7Icon
                style={{ color: theme.palette.primary.contrastText }}
              />
            ) : (
              <Brightness4Icon
                style={{ color: theme.palette.primary.contrastText }}
              />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer
          setOpen={setOpen}
          configNavbar={configNavbar}
          NavLink={NavLink}
        />
      </Drawer>
    </>
  );
}
