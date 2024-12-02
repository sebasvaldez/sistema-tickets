import { useState } from "react";
import {
  Typography,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material/";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="left">{row.description}</TableCell>
        <TableCell align="right">
          {row.status == "unrealized" ? "No realizado" : "En proceso"}
        </TableCell>
        <TableCell align="right">
          {row.userAsigned?.name && row.userAsigned?.lastname ? (
            `${row.userAsigned.name} ${row.userAsigned.lastname}`
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography>Asignar</Typography>
              <IconButton
                onClick={(e) => {
                  console.log(row._id)
                }}
              >
                <ModeEditOutlineIcon />
              </IconButton>
            </Box>
          )}{" "}
        </TableCell>
        <TableCell align="right">
          {new Date(row.date).toLocaleDateString("es-AR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Historial
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Modificado por: </TableCell>
                    <TableCell align="right">estado</TableCell>
                    <TableCell align="right">Descripción</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.length > 0 ? (
                    row.history.map((historyRow) => (
                      <TableRow key={historyRow?._id}>
                        <TableCell component="th" scope="row">
                          {new Date(historyRow.date).toLocaleDateString(
                            "es-AR",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )}
                        </TableCell>
                        <TableCell>{historyRow.updatedBy.name}</TableCell>
                        <TableCell align="right">
                          {historyRow?.changes.status == "unrealized"
                            ? "No realizado"
                            : historyRow?.changes.status == "in progress"
                              ? "En proceso"
                              : historyRow?.changes.status == "completed"
                                ? "Completado"
                                : "No realizado"}
                        </TableCell>
                        <TableCell align="right">
                          {historyRow?.changes.description ||
                            "No se agregó una descripción"}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        No hay historial
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export const TicketTable = (pendingTickets) => {
  const tickets = pendingTickets.tickets;

 // console.log(tickets);

  function createData(
    title,
    description,
    status,
    userAsigned,
    createdAt,
    date,
    history,
    _id
  ) {
    return {
      title,
      description,
      status,
      userAsigned,
      createdAt,
      date,
      history,
      _id
    };
  }

  const rows = [];
  tickets.forEach((ticket) => {
    rows.push(
      createData(
        ticket.title,
        ticket.description,
        ticket.status,
        ticket.userAsigned,
        ticket.createdAt,
        ticket.date,
        ticket.history,
        ticket._id
      )
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Título</TableCell>
            <TableCell align="left">Descripción</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Asignado a:</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
