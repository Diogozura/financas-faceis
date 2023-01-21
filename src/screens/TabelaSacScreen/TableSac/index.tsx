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
import { Button } from '@mui/material';
import Link from 'next/link';
import { Navigation } from '../../../components/navgation';



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

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



export default function SimpleTable({ valorInicial, error , valorEntrada, parcelaMes, taxaMesal }: any) {
  const Amotização = (valorInicial - valorEntrada) / parcelaMes
  const saldoDevedor = valorInicial - valorEntrada

  function CalculoJuros(saldoDevedor, taxaMesal) {
    const juros = saldoDevedor * taxaMesal
    return juros
  }

  const [items, setItems] = React.useState([]);

  function handleClick() {

    var resultado = '';
    var i = 0;
    var saldoDevedorAtual = saldoDevedor
    var array = []

      do {
        i += 1;

        if (i == 1) {
          const obj = {
          N: 0,
          juros : 0,
          
          parcelas : 0,
          amortizacao : 0,
          saldoDevedor : 0
          };
          obj.N = i
          obj.juros = 0;
          obj.parcelas = 0;
          obj.amortizacao = 0;
          obj.saldoDevedor = saldoDevedor
          array.push(obj)
        } else {
          var devedorAnterior = array[i - 2].saldoDevedor
          const temp = {
            N: 0,
            juros : 0,
            parcelas : 0,
            amortizacao : 0,
            saldoDevedor : 0
          }
          temp.N = i;
          temp.juros =Math.round( CalculoJuros(devedorAnterior, taxaMesal));
          temp.amortizacao = Amotização;
          temp.parcelas = temp.juros + temp.amortizacao;
          temp.saldoDevedor = (devedorAnterior - Amotização);
          array.push(temp)
          saldoDevedorAtual = temp.saldoDevedor
        }

        resultado += i + ' ';

        
      } while (Amotização < saldoDevedorAtual);
     
      
      setItems(array)
    
   return array
  }

console.log('tem erro?', error)

  return (
    <>

      <Button disabled={!valorInicial || !error || !valorEntrada || !parcelaMes || !taxaMesal ? true : false}  onClick={handleClick}>Rodaaa </Button>
      <Navigation href="#baixo"><InfoIcon color="info" /></Navigation>
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
          
          {items.slice(0, 5).map((num, index) => (
            <StyledTableRow key={num}>
              <StyledTableCell component="th" scope="row">
                {num.N}
              </StyledTableCell>
              <StyledTableCell align="left">R$ {num.parcelas.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ { num.juros.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ {num.amortizacao.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ 200</StyledTableCell>
              <StyledTableCell align="left">R$ {num.saldoDevedor.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          
          ))}
          {items.slice(-5).map((num, index) => (
            <StyledTableRow key={num}>
              <StyledTableCell component="th" scope="row">
                {num.N}
              </StyledTableCell>
              <StyledTableCell align="left">R$ {num.parcelas.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ { num.juros.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ {num.amortizacao.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ 200</StyledTableCell>
              <StyledTableCell align="left">R$ {num.saldoDevedor.toFixed(2)}</StyledTableCell>
            </StyledTableRow>
          
          ))}
          <TableRow>



          </TableRow>
        </TableBody>
      </Table>
      <div id='baixo'></div>
    </>
  );
}