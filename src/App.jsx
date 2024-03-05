// REACT
import { useState } from "react";

// ROUTER
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CONFIGS
import { publicRoutes } from "./config/Config";

// THEME
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { customTheme } from "./config/Config";
import { useThemeStore } from "./store/Mode";

function App() {
  const { darkMode } = useThemeStore();
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={customTheme(darkMode)}>
        <BrowserRouter>
          <Routes>
            {publicRoutes.map((route, index) => {
              return (
                <Route path={route.path} element={route.element} key={index} />
              );
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
