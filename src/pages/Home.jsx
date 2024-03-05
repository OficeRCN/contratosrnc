// LAYOUT
import DefaultLayout from "../layout/Default";

// THEME
import { useTheme } from "@mui/material/styles";

// MATERIAL UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// ROUTER
import { useNavigate } from "react-router-dom";

// WRITER
import TextTyper from "../components/TextTyper";

export default function Home() {
  const theme = useTheme();
  const navigation = useNavigate();
  return (
    <>
      <DefaultLayout>
        <Box
          width="100%"
          minHeight="calc(100vh - 60px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stack direction="column" spacing={5} alignItems="center">
            <Typography
              style={{
                color: theme.palette.primary.contrastText,
              }}
            >
              <TextTyper devMode="true" message="Bienvenido" />
            </Typography>
            <Button onClick={() => navigation("/create")}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "1.5rem",
                    lg: "1.5rem",
                  },
                  color: theme.palette.primary.contrastText,
                }}
              >
                Empezar a crear contratos 💪💪🤓
              </Typography>
            </Button>
          </Stack>
        </Box>
      </DefaultLayout>
    </>
  );
}
