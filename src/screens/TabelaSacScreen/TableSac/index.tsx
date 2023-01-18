import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function SimpleTable({ valorInicial, valorEntrada, parcelaMes }: any) {
    const Amotização = (valorInicial - valorEntrada) / parcelaMes

    const [count, setCount] = React.useState(30);

    const numbers = Array.from(
        { length: 30 },
        (_, i) => count - (i - 1)
    );


    return (
        <Table sx={{ minWidth: 350 }} aria-label="customized  table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>N</StyledTableCell>
                    <StyledTableCell>Parcelas</StyledTableCell>
                    <StyledTableCell>Juros</StyledTableCell>
                    <StyledTableCell>Amortização</StyledTableCell>
                    <StyledTableCell>Amortização extra</StyledTableCell>
                    <StyledTableCell>Saldo</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {numbers.map((num, index) => (
                     <StyledTableRow key={num}>
                     <StyledTableCell component="th" scope="row">
                       {index + 1}
                     </StyledTableCell>
                     <StyledTableCell align="center">{num}</StyledTableCell>
                     <StyledTableCell align="center">R$ 50</StyledTableCell>
                     <StyledTableCell align="center">R$ {Amotização.toFixed(2)}</StyledTableCell>
                     <StyledTableCell align="center">R$ 200</StyledTableCell>
                     <StyledTableCell align="center">R$ 900</StyledTableCell>
                   </StyledTableRow>
                    // <TableRow key={num}>
                       
                    //     <TableCell>{index + 1}</TableCell>
                    //     <TableCell>{num}</TableCell>
                    //     <TableCell>R$ 50</TableCell>
                    //     <TableCell>R$ {Amotização.toFixed(2)}</TableCell>
                    //     <TableCell>R$ 20</TableCell>
                    //     <TableCell>R$ 900</TableCell>
                    // </TableRow>
                ))}


                {/* <TableRow>
                        <TableCell>10</TableCell>
                        <TableCell>5%</TableCell>
                        <TableCell>${Amotização.toFixed(2)}</TableCell>
                        <TableCell>$20</TableCell>
                        <TableCell>$900</TableCell>
                    </TableRow> */}

                <TableRow>



                </TableRow>
            </TableBody>
        </Table>
    );
}