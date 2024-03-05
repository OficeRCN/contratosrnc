// REACT
import React from "react";
import { useState } from "react";

// MATERIAL UI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { MenuItem } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

// ICONS
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// THEME
import { useTheme } from "@mui/material/styles";

// LAYOUT
import DefaultLayout from "../layout/Default";

// FORMIK
import { Formik, Form, Field } from "formik";
import InputField from "../components/InputField";

// STEPPER
import MultiStepForm from "../components/MultiStepForm";
import { FormStep } from "../components/MultiStepForm";

// CONFIG
import {
  clientValidationSchema,
  selectCSData,
  permanenciaMinimaValidation,
  redAcceso,
  tipoCuenta,
  velocidad,
  nivelComparticion,
  plazoInstalacionValidation,
  tarifasSchemaValidation,
  tableHeadData,
} from "../config/Config";

export default function Create() {
  const [tableData, setTableData] = useState([]);
  const theme = useTheme();

  const addRow = () => {
    const newRow = {
      id: tableData.length + 1,
      cantidad: "",
      precio_unitario: "",
      marca: "",
      modelo: "",
      serial: "",
      nuevo_usado: "",
    };
    setTableData([...tableData, newRow]);
  };

  return (
    <>
      <DefaultLayout>
        <Box
          mt="60px"
          minHeight="calc(100vh - 100px)"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MultiStepForm
            initialValues={{
              nombre: "",
              email: "",
              cedula: "",
              provincia: "",
              canton: "",
              ciudad: "",
              direccion: "",
              telefono: "",
              servicio: "",
              ct_bool: "",
              cs_bool: "",
              permanencia_minima: "",
              pago_directo_bool: "",
              debito_automatico_bool: "",
              pago_ventanilla_bool: "",
              debito_tarjeta_bool: "",
              transferencia_electronica_bool: "",
              cds_bool: "",
              incluye_empaquetamiento_bool: "",
              especificar_servicios: "",
              cdq_date_1: "",
              cdq_date_2: "",
              anexo_date: "",
              nombre_plan: "",
              red_acceso: "",
              tipo_cuenta: "",
              velocidad: "",
              nivel_comparticion: "",
              permanencia_minima_bool: "",
              plazo_instalacion: "",
              tiempo: "",
              beneficios_permanencia: "",
              valor_instalacion: "",
              valor_mensual: "",
              valores_otros_servicios: "",
              valor_total: "",
              // ANEXO 2
              id: "",
              cantida: "",
              precio_unitario: "",
              marca: "",
              modelo: "",
              serial: "",
              nuevo_usado: "",
              // ___________
              cc_equipos_credito_bool: "",
              ca_equipos_bool: "",
              cc_equipos_contado_bool: "",
              //_____________
              vm_arrendamiento: "",
              vm_compra_credito: "",
              cm_cobrar: "",
              // ANEXO 3
              fecha_instalacion: "",
              lugar_instalacion: "",
              ip_asignada: "",
              ancho_banda_instalado_bool: "",
              cractaristicas_computadora: "",
              puesta_tierra_bool: "",
              bloqueo_pagina_bool: "",
              bloqueo_pagina_detalle: "",
              bloqueo_servicios_bool: "",
              bloqueo_servicios_detalle: "",
              bloqueo_puertos_bool: "",
              bloqueo_puertos_detalle: "",
              material_instalacion_detalle: "",
              // ANEXO 4
              pago_directo_oficina_bool: "",
              deposito_transferencia_bool: "",
              debito_automatico_bancario_bool: "",
              debito_automatico_credito_bool: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <FormStep
              stepName="Cliente"
              onSubmit={() => console.log("Step1 submit")}
              validationSchema={clientValidationSchema}
            >
              <InputField
                label="Nombre"
                height="2rem"
                name="nombre"
                id="nombre"
              />
              <InputField label="Email" height="2rem" name="email" id="email" />
              <InputField
                label="Cédula"
                height="2rem"
                name="cedula"
                id="cedula"
              />
              <InputField
                label="Provincia"
                height="2rem"
                name="provincia"
                id="provincia"
              />
              <InputField
                label="Cantón"
                height="2rem"
                name="canton"
                id="canton"
              />
              <InputField
                label="Ciudad"
                height="2rem"
                name="ciudad"
                id="ciudad"
              />
              <InputField
                label="Dirección"
                height="2rem"
                name="direccion"
                id="direccion"
              />
              <InputField
                label="Teléfono"
                height="2rem"
                name="telefono"
                id="telefono"
              />
            </FormStep>

            <FormStep
              stepName="Clausula Segunda"
              onSubmit={() => console.log("Step2 submit")}
            >
              <InputField
                label="Seleccionar servicio"
                id="servicio"
                name="servicio"
                select
                defaulValue="Acceso a internet"
              >
                {selectCSData.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      <ArrowRightIcon /> {item.label}
                    </MenuItem>
                  );
                })}
              </InputField>
            </FormStep>

            <FormStep
              stepName="Clausula Tercera"
              onSubmit={() => console.log("Step3 submit")}
            >
              <FormGroup style={{ width: "100%" }}>
                <FormControl>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    spacing={2}
                  >
                    <label
                      style={{ color: theme.palette.primary.contrastText }}
                      htmlFor="ct_true"
                    >
                      Sí
                    </label>
                    <Field
                      type="radio"
                      id="ct_true"
                      name="ct_bool"
                      value="true"
                    />
                    <label
                      style={{ color: theme.palette.primary.contrastText }}
                      htmlFor="abi_false"
                    >
                      No
                    </label>
                    <Field
                      type="radio"
                      id="ct_false"
                      name="ct_bool"
                      value="false"
                    />
                  </Stack>
                </FormControl>
              </FormGroup>
            </FormStep>

            <FormStep
              stepName="Clausula Sexta"
              validationSchema={permanenciaMinimaValidation}
            >
              <FormControl>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  spacing={2}
                >
                  <label
                    style={{ color: theme.palette.primary.contrastText }}
                    htmlFor="ct_true"
                  >
                    Sí
                  </label>
                  <Field
                    type="radio"
                    id="cs_true"
                    name="cs_bool"
                    value="true"
                  />
                  <label
                    style={{ color: theme.palette.primary.contrastText }}
                    htmlFor="ct_false"
                  >
                    No
                  </label>
                  <Field
                    type="radio"
                    id="cs_false"
                    name="cs_bool"
                    value="false"
                  />
                </Stack>
              </FormControl>
              <InputField
                label="Beneficios Permanencia Mínima"
                name="permanencia_minima"
                id="permanencia_minima"
              />
            </FormStep>

            <FormStep stepName="Clausula Séptima">
              <Stack direction="column" spacing={2}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Pago directo en cajas del prestador del servicio.
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label htmlFor="pd_true">Sí</label>
                      <Field
                        type="radio"
                        id="pd_true"
                        name="pago_directo_bool"
                        value="true"
                      />
                      <label htmlFor="pd_false">No</label>
                      <Field
                        type="radio"
                        id="pd_false"
                        name="pago_directo_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Débito automático cuenta de ahorro o corriente.
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label htmlFor="da_true">Sí</label>
                      <Field
                        type="radio"
                        id="da_true"
                        name="debito_automatico_bool"
                        value="true"
                      />
                      <label htmlFor="da_false">No</label>
                      <Field
                        type="radio"
                        id="da_false"
                        name="debito_automatico_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Pago en ventanilla de locales autorizados.
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label htmlFor="pv_true">Sí</label>
                      <Field
                        type="radio"
                        id="pv_true"
                        name="pago_ventanilla_bool"
                        value="true"
                      />
                      <label htmlFor="pv_false">No</label>
                      <Field
                        type="radio"
                        id="pv_false"
                        name="pago_ventanilla_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Débito con tarjeta de crédito.
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label htmlFor="dt_true">Sí</label>
                      <Field
                        type="radio"
                        id="dt_true"
                        name="debito_tarjeta_bool"
                        value="true"
                      />
                      <label htmlFor="dt_false">No</label>
                      <Field
                        type="radio"
                        id="dt_false"
                        name="debito_tarjeta_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Transferencia vía medios electrónicos.
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label htmlFor="te_true">Sí</label>
                      <Field
                        type="radio"
                        id="te_true"
                        name="transferencia_electronica_bool"
                        value="true"
                      />
                      <label htmlFor="te_false">No</label>
                      <Field
                        type="radio"
                        id="te_false"
                        name="transferencia_electronica_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
              </Stack>
            </FormStep>

            <FormStep stepName="Clausula Décima Segunda">
              <FormControl>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  spacing={2}
                >
                  <label
                    style={{ color: theme.palette.primary.contrastText }}
                    htmlFor="cds_true"
                  >
                    Sí
                  </label>
                  <Field
                    type="radio"
                    id="cds_true"
                    name="cds_bool"
                    value="true"
                  />
                  <label
                    style={{ color: theme.palette.primary.contrastText }}
                    htmlFor="cds_false"
                  >
                    No
                  </label>
                  <Field
                    type="radio"
                    id="cds_false"
                    name="cds_bool"
                    value="false"
                  />
                </Stack>
              </FormControl>
            </FormStep>

            <FormStep stepName="Claúsula Décima Quinta">
              <FormControl>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  spacing={2}
                >
                  <label
                    style={{ color: theme.palette.primary.contrastText }}
                    htmlFor="ie_true"
                  >
                    Sí
                  </label>
                  <Field
                    type="radio"
                    id="ie_true"
                    name="incluye_empaquetamiento_bool"
                    value="true"
                  />
                  <label
                    style={{ color: theme.palette.primary.contrastText }}
                    htmlFor="ie_false"
                  >
                    No
                  </label>
                  <Field
                    type="radio"
                    id="ie_false"
                    name="incluye_empaquetamiento_bool"
                    value="false"
                  />
                </Stack>
              </FormControl>
              <InputField
                label="Especificar Servicios"
                name="especificar_servicios"
              />
              <InputField
                style={{ color: theme.palette.primary.contrastText }}
                type="date"
                name="cdq_date_1"
              />
              <InputField
                style={{ color: theme.palette.primary.contrastText }}
                type="date"
                name="cdq_date_2"
              />
            </FormStep>

            <FormStep stepName="Anexo 1">
              <InputField type="date" name="anexo_date" />
              <InputField name="nombre_plan" />
              <InputField
                label="Seleccionar red de acceso"
                id="red_acceso"
                name="red_acceso"
                select
              >
                {redAcceso.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      <ArrowRightIcon /> {item.label}
                    </MenuItem>
                  );
                })}
              </InputField>
              <InputField
                label="Seleccionar tipo de cuenta"
                id="tipo_cuenta"
                name="tipo_cuenta"
                select
              >
                {tipoCuenta.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      <ArrowRightIcon /> {item.label}
                    </MenuItem>
                  );
                })}
              </InputField>
              <InputField
                label="Seleccionar tipo de velocidad"
                id="velocidad"
                name="velocidad"
                select
              >
                {velocidad.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      <ArrowRightIcon /> {item.label}
                    </MenuItem>
                  );
                })}
              </InputField>

              <InputField
                label="Seleccionar el nivel de comparticion"
                id="nivel_comparticion"
                name="nivel_comparticion"
                select
              >
                {nivelComparticion.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      <ArrowRightIcon /> {item.label}
                    </MenuItem>
                  );
                })}
              </InputField>
            </FormStep>

            <FormStep stepName="Permanencia Mínima">
              <Typography color={theme.palette.primary.contrastText}>
                ¿El contrato incluye permanencia mínima?
              </Typography>
              <FormControl>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  spacing={2}
                >
                  <label
                    style={{ color: theme.palette.primary.contrastText }}
                    htmlFor="pm_true"
                  >
                    Sí
                  </label>
                  <Field
                    type="radio"
                    id="pm_true"
                    name="permanencia_minima_bool"
                    value="true"
                  />
                  <label
                    style={{ color: theme.palette.primary.contrastText }}
                    htmlFor="pm_false"
                  >
                    No
                  </label>
                  <Field
                    type="radio"
                    id="pm_false"
                    name="permanencia_minima_bool"
                    value="false"
                  />
                </Stack>
              </FormControl>
              <InputField
                label="Tiempo "
                height="2rem"
                name="tiempo"
                id="tiempo"
              />
              <InputField
                label="Beneficios permanencia "
                height="2rem"
                name="beneficios_permanecia"
                id="beneficios_permanecia"
              />
              <InputField
                label="Plazo instalacion "
                height="2rem"
                name="plazo_instalacion"
                id="plazo_instalacion"
              />
            </FormStep>

            <FormStep
              stepName="Tarifas"
              validationSchema={tarifasSchemaValidation}
            >
              <InputField
                label="Valor instalación "
                height="2rem"
                name="valor_instalacion"
                id="valor_instalacion"
              />
              <InputField
                label="Valor mensual "
                height="2rem"
                name="valor_mensual"
                id="valor_mensual"
              />
              <InputField
                label="Valores otros servicios "
                height="2rem"
                name="valores_otros_servicios"
                id="valores_otros_servicios"
              />
              <InputField
                label="Valor total "
                height="2rem"
                name="valor_total"
                id="valor_total"
              />
            </FormStep>
            <FormStep stepName="Anexo 2">
              {/* TABLA DINAMICA */}
              <Stack direction="column" spacing={3}>
                <Button variant="outlined" onClick={addRow}>
                  Add row
                </Button>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow>
                        {tableHeadData.map((value, index) => (
                          <TableCell key={index}>{value.title}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody style={{ overflowX: "scroll" }}>
                      {tableData.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>
                            <InputField
                              name={`cantidad_${row.id}`}
                              id={`cantidad_${row.id}`}
                            />
                          </TableCell>
                          <TableCell>
                            <InputField
                              name={`precio_unitario_${row.id}`}
                              id={`precio_unitario_${row.id}`}
                            />
                          </TableCell>
                          <TableCell>
                            <InputField
                              name={`marca_${row.id}`}
                              id={`marca_${row.id}`}
                            />
                          </TableCell>
                          <TableCell>
                            <InputField
                              name={`modelo_${row.id}`}
                              id={`modelo_${row.id}`}
                            />
                          </TableCell>
                          <TableCell>
                            <InputField
                              name={`serial_${row.id}`}
                              id={`serial_${row.id}`}
                            />
                          </TableCell>
                          <TableCell>
                            <InputField
                              name={`nuevo_usado${row.id}`}
                              id={`nuevo_usado${row.id}`}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
            </FormStep>

            <FormStep stepName="Detalles equipo">
              <Stack direction="column" spacing={3}>
                {/* MULTI CHECKBOX */}
                <Stack direction="row" spacing={3}>
                  <Typography color={theme.palette.primary.contrastText}>
                    Cliente nos compra equipos a crédito
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="ccec_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="ccec_true"
                        name="cc_equipos_credito_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="ccec_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="ccec_false"
                        name="cc_equipos_credito_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Typography color={theme.palette.primary.contrastText}>
                    Cliente nos arrienda equipos
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="cae_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="cae_true"
                        name="ca_equipos_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="cae_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="cae_false"
                        name="ca_equipos_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Typography color={theme.palette.primary.contrastText}>
                    Cliente nos arrienda equipos
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="cec_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="cec_true"
                        name="cc_equipos_contado_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="cec_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="cec_false"
                        name="cc_equipos_contado_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                {/* VALORES */}
                <InputField
                  label="Valor mensual arrendamiento"
                  name="vm_arrendamiento"
                  id="vm_arrendamiento"
                />
                <InputField
                  label="Valor mensual compra credito"
                  name="vm_compra_credito"
                  id="vm_compra_credito"
                />
                <InputField
                  label="Cantidad de meses por cobrar"
                  name="cm_cobrar"
                  id="cm_cobrar"
                />
              </Stack>
            </FormStep>

            <FormStep stepName="Anexo 3">
              <Stack direction="column" spacing={3}>
                <InputField
                  name="fecha_instalacion"
                  id="fecha_instalacion"
                  type="date"
                />
                <InputField
                  label="Lugar instalación"
                  name="lugar_instalacion"
                  id="lugar_instalacion"
                />

                <InputField
                  label="Ip asignada"
                  name="ip_asignada"
                  id="ip_asignada"
                />

                <Stack direction="row" spacing={2}>
                  <Typography>
                    Cliente verificó ancho de banda instalado
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="abi_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="abi_true"
                        name="ancho_banda_instalado_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="abi_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="abi_false"
                        name="ancho_banda_instalado_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>

                <InputField
                  label="Características computadora"
                  name="cractaristicas_computadora"
                  id="cractaristicas_computadora"
                />

                <Stack direction="row" spacing={2}>
                  <Typography>Cliente tiene puesta a tierra</Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="pat_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="pat_true"
                        name="puesta_tierra_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="pat_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="pat_false"
                        name="puesta_tierra_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>

                <Stack>
                  {/* PRIMERO */}
                  <Stack spacing={3}>
                    {/* CHECKBOX */}
                    <Stack direction="row" spacing={3}>
                      <Typography>
                        Cliente pide bloqueo de páginas web
                      </Typography>
                      <FormControl>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          spacing={2}
                        >
                          <label
                            style={{
                              color: theme.palette.primary.contrastText,
                            }}
                            htmlFor="bpb_true"
                          >
                            Sí
                          </label>
                          <Field
                            type="radio"
                            id="bpb_true"
                            name="bloqueo_pagina_bool"
                            value="true"
                          />
                          <label
                            style={{
                              color: theme.palette.primary.contrastText,
                            }}
                            htmlFor="bpb_false"
                          >
                            No
                          </label>
                          <Field
                            type="radio"
                            id="bpb_false"
                            name="bloqueo_pagina_bool"
                            value="false"
                          />
                        </Stack>
                      </FormControl>
                    </Stack>
                    {/* CAMPO DE DETALLE */}
                    <InputField
                      label="Bloqueo Página Detalle"
                      name="bloqueo_pagina_detalle"
                      id="bloqueo_pagina_detalle"
                    />
                  </Stack>
                  {/* SEGUNDO */}
                  <Stack spacing={3}>
                    {/* CHECKBOX */}
                    <Stack direction="row" spacing={3}>
                      <Typography>Cliente pide bloqueo de servicios</Typography>
                      <FormControl>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          spacing={2}
                        >
                          <label
                            style={{
                              color: theme.palette.primary.contrastText,
                            }}
                            htmlFor="bsb_true"
                          >
                            Sí
                          </label>
                          <Field
                            type="radio"
                            id="bsb_true"
                            name="bloqueo_servicios_bool"
                            value="true"
                          />
                          <label
                            style={{
                              color: theme.palette.primary.contrastText,
                            }}
                            htmlFor="bsb_false"
                          >
                            No
                          </label>
                          <Field
                            type="radio"
                            id="bsb_false"
                            name="bloqueo_servicios_bool"
                            value="false"
                          />
                        </Stack>
                      </FormControl>
                    </Stack>
                    {/* CAMPO DE DETALLE */}
                    <InputField
                      label="Bloqueo Servicios Detalle"
                      name="bloqueo_servicios_detalle"
                      id="bloqueo_servicios_detalle"
                    />
                  </Stack>
                  {/* TERCERO */}
                  <Stack spacing={3}>
                    {/* CHECKBOX */}
                    <Stack direction="row" spacing={3}>
                      <Typography>Cliente pide bloqueo de puertos</Typography>
                      <FormControl>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          spacing={2}
                        >
                          <label
                            style={{
                              color: theme.palette.primary.contrastText,
                            }}
                            htmlFor="bpb_true"
                          >
                            Sí
                          </label>
                          <Field
                            type="radio"
                            id="bpb_true"
                            name="bloqueo_puertos_bool"
                            value="true"
                          />
                          <label
                            style={{
                              color: theme.palette.primary.contrastText,
                            }}
                            htmlFor="bpb_false"
                          >
                            No
                          </label>
                          <Field
                            type="radio"
                            id="bpb_false"
                            name="bloqueo_puertos_bool"
                            value="false"
                          />
                        </Stack>
                      </FormControl>
                    </Stack>
                    {/* CAMPO DE DETALLE */}
                    <InputField
                      label="Bloqueo Servicios Detalle"
                      name="bloqueo_puertos_detalle"
                      id="bloqueo_puertos_detalle"
                    />
                  </Stack>
                </Stack>
                <InputField
                  label="Material Instalación Detalle"
                  name="material_instalacion_detalle"
                  id="material_instalacion_detalle"
                />
              </Stack>
            </FormStep>

            <FormStep stepName="Anexo 4">
              <Stack
                direction="column"
                spacing={3}
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
              >
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Pago directo en oficina de Prestador
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="pdo_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="pdo_true"
                        name="pago_directo_oficina_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="pdo_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="pdo_false"
                        name="pago_directo_oficina_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Deposito o transferencia a la cuenta bancaria del Prestador
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="dtc_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="dtc_true"
                        name="deposito_transferencia_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="dtc_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="dtc_false"
                        name="deposito_transferencia_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Débito automático a la cuenta bancaria del Abonado
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="dbc_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="dbc_true"
                        name="debito_automatico_bancario_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="dbc_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="dbc_false"
                        name="debito_automatico_bancario_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  <NavigateNextIcon />
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body2"
                  >
                    Débito automático a la tarjeta de crédito del Abonado
                  </Typography>
                  <FormControl>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="100%"
                      spacing={2}
                    >
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="dat_true"
                      >
                        Sí
                      </label>
                      <Field
                        type="radio"
                        id="dat_true"
                        name="debito_automatico_credito_bool"
                        value="true"
                      />
                      <label
                        style={{ color: theme.palette.primary.contrastText }}
                        htmlFor="dat_false"
                      >
                        No
                      </label>
                      <Field
                        type="radio"
                        id="dat_false"
                        name="debito_automatico_credito_bool"
                        value="false"
                      />
                    </Stack>
                  </FormControl>
                </Stack>
              </Stack>
            </FormStep>
          </MultiStepForm>
        </Box>
      </DefaultLayout>
    </>
  );
}
