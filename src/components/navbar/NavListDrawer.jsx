import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemButton,
} from "@mui/material";

import { useTheme, ThemeProvider } from "@mui/material/styles";

import { ListItemComponent } from "../ItemNavbar";

export function NavListDrawer({ configNavbar, NavLink, setOpen }) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100%",
          width: "250px",
          bgcolor: "white",
          color: theme.palette.primary.contrastText,
        }}
        style={{ background: theme.palette.primary.background.default }}
      >
        <nav>
          <List
            style={{ background: theme.palette.primary.background.default }}
          >
            {configNavbar.map((item, index) => (
              <ListItemComponent
                key={index}
                NavLink={NavLink}
                text={item.title}
                icon={item.icon}
                pathApp={item.path}
                setOpen={setOpen}
              />
            ))}
          </List>
        </nav>
      </Box>
    </ThemeProvider>
  );
}
