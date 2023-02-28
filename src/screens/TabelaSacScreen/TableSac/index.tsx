import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box, Button, Typography, Hidden } from '@mui/material';
import Link from 'next/link';
import { Navigation } from '../../../components/navgation';
import { Looping } from './Calculo_sac';
import { theme } from '../../../../styles/theme';



const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.colors.AzulEscuro,
    color: '#FFFF',
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



export default function SimpleTable({ valorInicial, extra, error, data, valorEntrada, parcelaMes, taxaMesal }: any) {
  const Amotização = (valorInicial - valorEntrada) / parcelaMes
  const saldoDevedor = valorInicial - valorEntrada


  const [items, setItems] = React.useState([]);




  function handleClick() {
    Looping({ setItems }, saldoDevedor, taxaMesal, Amotização, data, extra)

  }





  return (
    <>
      <Box display={'flex'} justifyContent={'center'} mb={2}>
        <Button variant="contained" sx={{ textAlign: 'center', bgcolor: theme.colors.link }} disabled={!valorInicial || !error || !parcelaMes || !taxaMesal ? true : false} onClick={handleClick}>Gerar tabela </Button>
        <Navigation href="#baixo"><InfoIcon color="info" /></Navigation>
      </Box>

      <Box sx={{ overflowX: 'auto', width: '100%', m: 0, padding: 0 }} height={700}>

        <Table sx={{ minWidth: 300 }} stickyHeader aria-label="customized   table">
          <TableHead >
            <TableRow sx={{ bgcolor: '#201E50' }}>
              <StyledTableCell >N</StyledTableCell>
              <StyledTableCell>Data</StyledTableCell>
              <StyledTableCell>Parcelas</StyledTableCell>
              <Hidden mdDown>
                <StyledTableCell>Juros</StyledTableCell>
              </Hidden>
              <Hidden mdDown>
                <StyledTableCell>Amortização</StyledTableCell>
              </Hidden>
              <Hidden mdDown>
                <StyledTableCell>Amortização extra</StyledTableCell>
              </Hidden>
              <StyledTableCell>Saldo</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.slice(0, 5).map((num, index) => (
              <StyledTableRow key={num.N} >
                <StyledTableCell component="th" scope="row">{num.N}</StyledTableCell>
                <StyledTableCell align="left"> {num.data}</StyledTableCell>
                <StyledTableCell align="left"> {num.parcelas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</StyledTableCell>
                <Hidden mdDown>
                  <StyledTableCell align="left">{num.juros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</StyledTableCell>
                </Hidden>
                <Hidden mdDown>
                  <StyledTableCell align="left">{num.amortizacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</StyledTableCell>
                </Hidden>
                <Hidden mdDown>
                  <StyledTableCell align="left" > {num.extra}</StyledTableCell>
                </Hidden>
                <StyledTableCell align="left"> {num.saldoDevedor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</StyledTableCell>
              </StyledTableRow>

            ))}

            {items.slice(-5).map((num, index) => (
              <StyledTableRow key={num.N}>
                <StyledTableCell component="th" scope="row">{num.N}</StyledTableCell>
                <StyledTableCell align="left"> {num.data}</StyledTableCell>
                <StyledTableCell align="left">{num.parcelas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</StyledTableCell>
                <Hidden mdDown>
                  <StyledTableCell align="left">{num.juros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</StyledTableCell>
                </Hidden>
                <Hidden mdDown>
                  <StyledTableCell align="left">{num.amortizacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</StyledTableCell>
                </Hidden>
                <Hidden mdDown>
                  <StyledTableCell align="left" > {num.extra}</StyledTableCell>
                </Hidden>
                <StyledTableCell align="left"> {num.saldoDevedor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</StyledTableCell>
              </StyledTableRow>

            ))}

          </TableBody>

        </Table>
        {/* {items ? <Typography sx={{ textAlign:'center' , marginTop:'10em', } }>Tabela sem dados</Typography>: null} */}
      </Box>
      <div id='baixo'></div>

    </>
  );
}


