//  REACT
import React from "react";

// THEME
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";

// COLORS
import { grey } from "@mui/material/colors";

// ICONS
import { HomeOutlined } from "@mui/icons-material";
import { AddOutlined } from "@mui/icons-material";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { RestoreOutlined } from "@mui/icons-material";

// YUP
import * as yup from "yup";

// PAGES
import Create from "../pages/Create";
import Administrate from "../pages/Administrate";
import Home from "../pages/Home";
import Historial from "../pages/Historial";
import NotFound from "../pages/NotFound";

// CONFIGS
export const configNavbar = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Crear Contrato",
    path: "/create",
    icon: <AddOutlined />,
  },
  {
    title: "Administrar Contrato",
    path: "/administrate",
    icon: <ManageHistoryIcon />,
  },
  {
    title: "Historial",
    path: "/historial",
    icon: <RestoreOutlined />,
  },
];

export const drawerLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Crear Contrato",
    path: "/create",
    icon: <AddOutlined />,
  },
  {
    title: "Administrar Contrato",
    path: "/administrate",
    icon: <ManageHistoryIcon />,
  },
  {
    title: "Historial",
    path: "/historial",
    icon: <RestoreOutlined />,
  },
];

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/administrate",
    element: <Administrate />,
  },
  {
    path: "/historial",
    element: <Historial />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

// CUSTOM THEME
export const customTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      primary: {
        main: "#3f51b5",
        contrastText: mode ? "#FFF" : "#000",
        background: {
          default: mode ? "#0D0D0D" : "#FFFFFF",
        },
      },
      secondary: {
        main: "#0D0D0D",
      },
    },
  });

// ------------------------- STEP FORM ------------------------- //

// CLAUSULA SEGUNDA
export const selectCSData = [
  { value: "Móvil Avanzado (SMA)", label: "Móvil Avanzado (SMA)" },
  {
    value: "Móvil Avanzado a través de Operador Móvil Virtual (OMV)",
    label: "Móvil Avanzado a través de Operador Móvil Virtual (OMV)",
  },
  { value: "Telefonía Fija", label: "Telefonía Fija" },
  {
    value: "Telecomunicaciones por Satélite",
    label: "Telecomunicaciones por Satélite",
  },
  { value: "Valor Agregado", label: "Valor Agregado" },
  { value: "Acceso a internet", label: "Acceso a internet" },
  { value: "Troncalizados", label: "Troncalizados" },
  { value: "Comunales", label: "Comunales" },
  {
    value: "Audio y video por suscripción",
    label: "Audio y video por suscripción",
  },
  { value: "Portador", label: "Portador" },
];

// ANEXO1
export const redAcceso = [
  {
    value: "plan de cobre",
    label: "Plan de cobre",
  },
  {
    value: "coaxial",
    label: "Coaxial",
  },
  {
    value: "fibra  óptica",
    label: "Fibra  óptica",
  },
  {
    value: "inalambrica",
    label: "Inalámbrica",
  },
  {
    value: "otros",
    label: "Otros",
  },
];

export const tipoCuenta = [
  {
    value: "residencial",
    label: "Residencial",
  },
  {
    value: "cibercafe",
    label: "Cibercafé",
  },
  {
    value: "corporativo",
    label: "Corporativo",
  },
  {
    value: "otros tipos",
    label: "Otros tipos",
  },
];

export const velocidad = [
  {
    value: "comercial de bajada",
    label: "Comercial de bajada",
  },
  {
    value: "minima efectiva de bajada",
    label: "Minima efectiva de bajada",
  },
  {
    value: "comercial de subida",
    label: "Comercial de subida",
  },
  {
    value: "minima efectiva subida",
    label: "Minima efectiva subida",
  },
];

export const nivelComparticion = [
  {
    value: "1:1",
    label: "1:1",
  },
  {
    value: "2:1",
    label: "2:1",
  },
  {
    value: "4:1",
    label: "4:1",
  },
  {
    value: "8:4",
    label: "8:4",
  },
];

// ANEXO 2
export const tableHeadData = [
  {
    title: "Cantidad",
  },
  {
    title: "Precio Unitario",
  },
  {
    title: "Marca",
  },
  {
    title: "Modelo",
  },
  {
    title: "Serial",
  },
  {
    title: "Nuevo/Usado",
  },
];

/// VALIDATIONS SCHEMA
// CLIENTE
export const clientValidationSchema = yup.object({
  nombre: yup.string().required("Name is required."),
  cedula: yup.string().required("DNI is required.").max(10),
  email: yup.string().email().required("Email is required."),
  provincia: yup.string().required("Province is required."),
  canton: yup.string().required("Canton is required."),
  ciudad: yup.string().required("City is required."),
  direccion: yup.string().required("Direction is required."),
  telefono: yup.string().required("Movil is required.").max(10),
});

// PERMANENCIA MINIMA
export const permanenciaMinimaValidation = yup.object({
  permanencia_minima: yup.string().required("This field is required."),
});

// PLAZO INSTALACION
export const plazoInstalacionValidation = yup.object({
  plazo_instalacion: yup.string().required("This field is required "),
  tiempo: yup.string().required("Time is required"),
  beneficios_permanencia: yup.string().required("This field is required"),
});

// TARIFAS
export const tarifasSchemaValidation = yup.object({
  valor_instalacion: yup.string().required("This field is required"),
  valor_mensual: yup.string().required("This field is required"),
  valores_otros_servicios: yup.string().required("This field is required"),
  valor_total: yup.string().required("This field is required"),
});
