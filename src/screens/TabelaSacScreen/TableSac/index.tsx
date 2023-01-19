import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';
import { Amortizacao } from '../Amortizacao';
import { Button } from '@mui/material';

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

export default function SimpleTable({ valorInicial, valorEntrada, parcelaMes, taxaMesal }: any) {
  const Amotização = (valorInicial - valorEntrada) / parcelaMes
  const saldoDevedor = valorInicial - valorEntrada

  function CalculoJuros(saldoDevedor, taxaMesal) {
    const juros = saldoDevedor * taxaMesal
    return juros
  }


  const [count, setCount] = React.useState(30);

  const numbers = Array.from(
    { length: 30 },
    (_, i) => count - (i - 1)
  );
  const [items, setItems] = React.useState([]);

  function handleClick() {

    console.log('funciona')
    var resultado = '';
    var i = 0;
    var saldoDevedorAtual = saldoDevedor
    var array = []

      do {
        i += 1;

        if (i == 1) {
          const obj = {};
          obj.N = i
          obj.juros = 0;
          obj.parcelas = 0;
          obj.amortizacao = 0;
          obj.saldoDevedor = saldoDevedor
          array.push(obj)
        } else {
          var devedorAnterior = array[i - 2].saldoDevedor
          const temp = {}
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
     
      console.log('array', array)
      setItems(array)
    
   return array
  }
console.log(items)


  return (
    <>

      <Button  onClick={handleClick}>Rodaaa </Button>
      {/* <ul>
        {items.map((item, index) => (
          <li key={index}>{item.juros}</li>
        ))}
      </ul> */}
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
          
          {items.map((num, index) => (
            <StyledTableRow key={num}>
              <StyledTableCell component="th" scope="row">
                {num.N}
              </StyledTableCell>
              <StyledTableCell align="left">R$ {num.parcelas.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ { num.juros.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ {Amotização.toFixed(2)}</StyledTableCell>
              <StyledTableCell align="left">R$ 200</StyledTableCell>
              <StyledTableCell align="left">R$ {num.saldoDevedor.toFixed(2)}</StyledTableCell>
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
    </>
  );
}