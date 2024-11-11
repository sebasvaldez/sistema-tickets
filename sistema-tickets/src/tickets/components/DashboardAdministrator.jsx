import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material/";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import { Register } from "../../auth/components/Register";
import { CreatingTicket } from "./CreatingTicket";
import { DailyTickets } from "./DailyTickets";
import { FinalizedTickets } from "./FinalizedTickets";
import { PendingTickets } from "./PendingTickets";
import { TechnicalList } from "./TechnicalList";
import { NoTechnicalList } from "./NoTechnicalList";

const drawerWidth = 240;

export const DashboardAdministrator = () => {
  const { logOut, userData } = useAuth();

  const { name, lastname } = userData;

  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [title, setTitle] = useState("Tickets del día");

  const renderComponet = () => {
    switch (selectedOption) {
      case "Tickets del dia":
        return <DailyTickets />;
      case "Crear ticket":
        return <CreatingTicket />;
      case "Pendientes":
        return <PendingTickets />;
      case "Finalizados":
        return <FinalizedTickets />;
      case "Técnicos":
        return <h1>Técnicos</h1>;
      case "Nuevo usuario":
        return <Register />;
      case "Tecnicos":
        return <TechnicalList />;
      case "No tecnicos":
        return <NoTechnicalList />;
      default:
        return <DailyTickets />;
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLogout = () => {
    logOut();
    navigate("/auth/login");
  };

  useEffect(() => {
    switch (selectedOption) {
      case "Tickets del dia":
        setTitle("Tickets del día");
        break;
      case "Crear ticket":
        setTitle("Crear ticket");
        break;
      case "Pendientes":
        setTitle("Pendientes");
        break;
      case "Finalizados":
        setTitle("Finalizados");
        break;
      case "Técnicos":
        setTitle("Técnicos");
        break;
      case "Nuevo usuario":
        setTitle("Nuevo usuario");
        break;
      case "Tecnicos":
        setTitle("Lista de Técnicos");
        break;
      case "No tecnicos":
        setTitle("Lista de No Técnicos");
        break;
      default:
        setTitle("Tickets del día");
        break;
    }
  }, [selectedOption]);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedOption("Tickets del dia")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Tickets del día" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedOption("Crear ticket")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Crear ticket" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedOption("Pendientes")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Pendientes" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedOption("Finalizados")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Finalizados" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedOption("Nuevo usuario")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Nuevo usuario" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedOption("Tecnicos")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Técnicos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setSelectedOption("No tecnicos")}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="No técnicos" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Bienvenido {name} {lastname}
          </Typography>
          <Button
            onClick={handleLogout}
            variant="outlined"
            sx={{ color: "white", marginLeft: "auto" }}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: { sm: 3 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {title}
        {renderComponet()}
      </Box>
    </Box>
  );
};
