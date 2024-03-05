import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useTheme, ThemeProvider } from "@mui/material/styles";

export function ListItemComponent({ icon, text, NavLink, pathApp, setOpen }) {
  const theme = useTheme();
  return (
    <ListItem
      disablePadding
      style={{ background: theme.palette.primary.background.default }}
    >
      <ListItemButton
        component={NavLink}
        to={pathApp}
        onClick={() => setOpen(false)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          color={theme.palette.primary.contrastText}
          primary={text}
        />
      </ListItemButton>
    </ListItem>
  );
}
