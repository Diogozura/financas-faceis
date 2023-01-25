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
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { Navigation } from '../../../components/navgation';
import { Botao } from './style';
import moment from 'moment';



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



export default function SimpleTable({ valorInicial, extra ,  error, data, valorEntrada, parcelaMes, taxaMesal }: any) {
  const Amotização = (valorInicial - valorEntrada) / parcelaMes
  const saldoDevedor = valorInicial - valorEntrada


  function CalculoJuros(saldoDevedor: number, taxaMesal: number) : number {
    const juros = saldoDevedor * taxaMesal;
    return juros;
  }
  const [items, setItems] = React.useState([]);
 
  
  function handleClick() {

    var resultado = '';
    var i = 0;
    var saldoDevedorAtual = saldoDevedor
    var array = [] 
    console.log('rodou')
    var vai = true
      do {
        i += 1;
        if ((Amotização + extra) < saldoDevedorAtual) {
          vai = true
          console.log('saldo devedor atual ', saldoDevedorAtual)


           if (i == 1) {
          const obj = {
          N: 0,
          juros : 0,
          parcelas : 0,
          data: data.format("MMM / YY"),
          extra: 0,
          amortizacao : 0,
          saldoDevedor : 0,
          };
          obj.N = i
          obj.juros = 0;
          obj.parcelas = 0;
          obj.amortizacao = 0;
          obj.extra = 0;
          obj.saldoDevedor = saldoDevedor;
          array.push(obj)
        } else {
          var devedorAnterior = array[array.length - 1].saldoDevedor
          const newDate = moment( array[array.length - 1].data, 'MMMM YYYY').add(1, 'months');
          const temp = {
            N: 0,
            juros: 0,
            data: newDate.format('MMMM YYYY'),
            parcelas : 0,
            amortizacao: 0,
            extra: extra,
            saldoDevedor : 0
          }
          temp.N = i;
          temp.juros = Math.round( CalculoJuros(devedorAnterior, taxaMesal));
          temp.amortizacao = Amotização;
          temp.parcelas = temp.juros + temp.amortizacao + temp.extra;
          temp.saldoDevedor = (devedorAnterior - Amotização - temp.extra);
          array.push(temp)
          saldoDevedorAtual = temp.saldoDevedor
        }
        } else {
          vai = false
        }
       

        // resultado += i + ' ';
        
     
    } while (vai);
    
    // i += 1
    // if (saldoDevedorAtual === (Amotização + extra)) {
    //   var devedorAnterior = array[i - 2].saldoDevedor
    //   const newDate = moment( array[i - 2].data, 'MMMM YYYY').add(1, 'months');
    //   const temp = {
    //     N: 0,
    //     juros: 0,
    //     data: newDate.format('MMMM YYYY'),
    //     parcelas : 0,
    //     amortizacao: 0,
    //     extra: extra,
    //     saldoDevedor : 0
    //   }
    //   temp.N = i;
    //   temp.juros = Math.round( CalculoJuros(devedorAnterior, taxaMesal));
    //   temp.amortizacao = Amotização;
    //   temp.parcelas = temp.juros + temp.amortizacao + temp.extra;
    //   temp.saldoDevedor = (devedorAnterior - Amotização - temp.extra);
    //   array.push(temp)
    //   saldoDevedorAtual = temp.saldoDevedor
    // } else {
    //   var devedorAnterior = array[i - 2].saldoDevedor
    //   const newDate = moment( array[i - 2].data, 'MMMM YYYY').add(1, 'months');
    //   const temp = {
    //     N: 0,
    //     juros: 0,
    //     data: newDate.format('MMMM YYYY'),
    //     parcelas : 0,
    //     amortizacao: 0,
    //     extra: extra,
    //     saldoDevedor : 0
    //   }
   
      
    //   temp.N = i;
    //   if (extra >= saldoDevedorAtual ) {
    //     temp.extra = 0
    //   } else {
    //     temp.extra = 0
    //     temp.amortizacao = saldoDevedorAtual - extra
    //   }
     
    //   temp.juros = Math.round( CalculoJuros(devedorAnterior, taxaMesal));
      
    //   temp.parcelas = temp.juros + temp.amortizacao + temp.extra;
    //   temp.saldoDevedor = (devedorAnterior - temp.amortizacao - temp.extra);
    //   array.push(temp)
    //   saldoDevedorAtual = temp.saldoDevedor
    //   }
      console.log("array temporario", array[2].extra)
      setItems(array)
    console.log()
   return array
  }

  
  // function Click(id, newAmor) {
  //   const newArray = [...items];

  //   const itemToUpdate = newArray.find(item => item.N === id);
  //   itemToUpdate.amortizacao = newAmor;

  //   // const itemsToUpdate = newArray.slice(id);
  //   // const updatedItems = itemsToUpdate.map(item => ({...item, extra: newAmor}));
  //   // newArray.splice(id, updatedItems.length, ...updatedItems);
  //   ReCalc(id)
  //   setItems(newArray);
   
  // }

  function analisa() {
    
  }
  
  function ReCalc(id) {
  console.log(id)
    
    // var saldoDevedorAtual = saldoDevedor
    // var resultado = '';
    // var i = 0;
    // var newList = []
    
    // do {
    //   i += 1;
    //   if (i < id) {
    //     const newArray = [...items];
    //     const itemToUpdate = newArray.find(item => item.N === id);
    //     saldoDevedorAtual = itemToUpdate.saldoDevedor 
        
    //     newList.push(itemToUpdate)
    //   } else {
    //     console.log("lista 2",newList[i - 2 ])
    //     console.log("lista 1", newList[i - 1 ])
    //     var devedorAnterior = newList[i - 2].saldoDevedor
    //     const newDate = moment( newList[i - 2].data, 'MMMM YYYY').add(1, 'months');
    //     const temp = {
    //       N: 0,
    //       juros: 0,
    //       data: newDate.format('MMMM YYYY'),
    //       parcelas : 0,
    //       amortizacao: 0,
    //       extra: 0,
    //       saldoDevedor : 0
    //     }
    //     temp.N = i;
    //     temp.juros = Math.round( CalculoJuros(devedorAnterior, taxaMesal));
    //     temp.amortizacao = Amotização;
    //     temp.extra = extra;
    //     temp.parcelas = temp.juros + temp.amortizacao + extra;
    //     temp.saldoDevedor = (devedorAnterior - Amotização - extra);
    //     newList.push(temp)
    //     saldoDevedorAtual = temp.saldoDevedor
    //   }

    //   resultado += i + ' ';

      
    // } while (Amotização < saldoDevedorAtual);
    // setItems(newList)
    // return newList
  }

console.log("ultimo item", items.slice(-1))
  return (
    <>
      <Botao>
        <Button variant="contained" sx={{ textAlign: 'center' }} color="success" disabled={!valorInicial || !error || !valorEntrada || !parcelaMes || !taxaMesal ? true : false} onClick={handleClick}>Rodaaa </Button>
        <Navigation href="#baixo"><InfoIcon color="info" /></Navigation>
    </Botao>
     
      <Box sx={{overflowX:'auto'}}>
        
     
      <Table sx={{minWidth: 350}}  aria-label="customized   table">
        <TableHead>
            <TableRow>
              <StyledTableCell>N</StyledTableCell>
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
              <StyledTableCell align="left" ><Button onClick={() => ReCalc(num.N)} >{num.extra }</Button></StyledTableCell>
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
          <TableRow>



          </TableRow>
        </TableBody>
        </Table>
        </Box>
      <div id='baixo'></div>
    </>
  );
}


