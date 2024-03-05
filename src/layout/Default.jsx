// MATERIAL UI
import Box from "@mui/material/Box";

// THEME
import { useTheme, ThemeProvider } from "@mui/material/styles";
import { useThemeStore } from "../store/Mode";

// COMPONENTS
import { Navbar } from "../components/navbar/Navbar";

export default function DefaultLayout({ children }) {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box
          mt="60px"
          minHeight="100vh"
          width="100%"
          bgcolor={theme.palette.primary.background.default}
          sx={{ margin: 0 }}
          // style={{
          //   backgroundImage: "url('/img/img-1.svg')",
          // }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </>
  );
}
