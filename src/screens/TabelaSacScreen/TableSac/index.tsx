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
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { Navigation } from '../../../components/navgation';
import { Botao } from './style';
import moment from 'moment';
import { Looping } from './functionLooping';
import { theme } from '../../../../styles/theme';



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
    backgroundColor: '#201E50',
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



export default function SimpleTable({ valorInicial, extra ,  error, data, valorEntrada, parcelaMes, taxaMesal }: any) {
  const Amotização = (valorInicial - valorEntrada) / parcelaMes
  const saldoDevedor = valorInicial - valorEntrada


  const [items, setItems] = React.useState([]);
 
  
  function handleClick() {
  
    Looping({ setItems }, saldoDevedor, taxaMesal, Amotização, data, extra)
  
    
   
  }

  
  function Click(id, newAmor) {
    const newArray = [...items];

    const itemToUpdate = newArray.find(item => item.N === id);
    itemToUpdate.amortizacao = newAmor;

    // const itemsToUpdate = newArray.slice(id);
    // const updatedItems = itemsToUpdate.map(item => ({...item, extra: newAmor}));
    // newArray.splice(id, updatedItems.length, ...updatedItems);
 
   ReCalc( newAmor)
  }


  
  function ReCalc( newAmor) {
    Looping({ setItems }, saldoDevedor, taxaMesal, Amotização, data, newAmor)
  }


  return (
    <>
      <Botao>
        <Button variant="contained" sx={{ textAlign: 'center', bgcolor: theme.colors.link }}  disabled={!valorInicial || !error || !valorEntrada || !parcelaMes || !taxaMesal ? true : false} onClick={handleClick}>Gerar tabela </Button>
        <Navigation href="#baixo"><InfoIcon color="info" /></Navigation>
    </Botao>
     
      <Box sx={{ overflowX: 'auto' }} height={700}>
        
     
      <Table sx={{minWidth: 350 }}  aria-label="customized   table">
        <TableHead >
            <TableRow sx={{bgcolor:'#201E50'}}>
            <StyledTableCell >N</StyledTableCell>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell>Parcelas</StyledTableCell>
            <StyledTableCell>Juros</StyledTableCell>
            <StyledTableCell>Amortização</StyledTableCell>
            <StyledTableCell>Amortização extra</StyledTableCell>
            <StyledTableCell>Saldo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {items.slice(0, 5).map((num, index) => (
            <StyledTableRow key={num.N} >
              
              <StyledTableCell component="th" scope="row">{num.N}</StyledTableCell>
              <StyledTableCell align="left"> {num.data}</StyledTableCell>
              <StyledTableCell align="left"> {num.parcelas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
              <StyledTableCell align="left">{ num.juros.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
              <StyledTableCell align="left">{num.amortizacao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
              <StyledTableCell align="left" >
                <Button onClick={() => Click(num.N, 200)} >{num.extra}</Button>
                {/* {num.extra} */}
              </StyledTableCell>
              <StyledTableCell align="left"> {num.saldoDevedor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
            </StyledTableRow>
          
          ))}
            
          { items.slice(-5).map((num, index) => (
            <StyledTableRow key={num}>
              <StyledTableCell component="th" scope="row">{num.N}</StyledTableCell>
              <StyledTableCell align="left"> {num.data}</StyledTableCell>
              <StyledTableCell align="left">{num.parcelas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
              <StyledTableCell align="left">{ num.juros.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
              <StyledTableCell align="left"> {num.amortizacao.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
              <StyledTableCell align="left">{num.extra }</StyledTableCell>
           
              <StyledTableCell align="left"> {num.saldoDevedor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</StyledTableCell>
            </StyledTableRow>
          
          ))}
         
          </TableBody>
          
        </Table>
        {items ? <Typography sx={{ textAlign:'center' , marginTop:'10em', } }>Tabela sem dados</Typography>: null}
        </Box>
      <div id='baixo'></div>
    </>
  );
}


