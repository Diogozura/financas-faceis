import { TextField } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { InputAttributes } from 'react-number-format';
import NumberFormat from 'react-number-format';
import { NumberFormatCustom } from '../src/components/number'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'

const Title = styled.h1`
  color:${theme.colors.AzulEscuro};
`
type Item = {
  amortizacao: number,
  valorInicial: number,
  entrada: number,
  porMes: number,
  porAno: number,
  parecelaMes: number,
  parecelaAno: number,
};


export default function Home() {
  const [values, setValues] = React.useState<Item>({
    // Valor inicial a pagar 
    valorInicial: 0,

    // Número de parcelas  
    parecelaMes: 0,
    parecelaAno: 0,

    // Porcentagem por mes ou ano 
    porMes: 0,
    porAno: 0,

    // Valor entrada 
    entrada: 0,
    // amortização 
    amortizacao: 0,
  })
  const valores= [{
    simble: '$',
    name: 'valorInicial',
    value: values.valorInicial,
    label: 'valor Inicial',
  },{
    simble: '$',
    name: 'parecelaMes',
    value: values.parecelaMes,
    label: 'parecelaMes'
  }]

  const handlenChange = (event: { target: { value: any; name: any } }) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;



    setValues((currenetValues) => {
      return {
        ...currenetValues,
        [fieldName]: fieldValue
      }
    })

  }
  function submit(e: { preventDefault: () => void }) {
    e.preventDefault()
    console.log('Valor inicial', values.valorInicial)
    console.log('parcela mes', values.parecelaMes)
  }

  // console.log("valor inicial", values.valorInicial)


  return (
    <>
      <Head>
        <title>Calculo Tabela SAC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>
        oii
      </Title>

      <form>
        <FormControl variant="filled"  >
          {valores.map((item) => (
            <>
              <InputLabel htmlFor="outlined-adornment-amount">{item.label}</InputLabel>
              <FilledInput
               value={item.value}
               name={item.name}
               onChange={handlenChange}
               id="filled-adornment-amount"
               startAdornment={<InputAdornment position="start">{item.simble}</InputAdornment>}
               />
            </>
          ))}
       
        <Button onClick={submit}>vai caraio</Button>
        </FormControl>
       
      </form>
    
      <TextField
        label="Valor inicial"
       
        required
        onChange={handlenChange}
        name="valorInicial"
        margin="normal"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        variant="standard"
      />
      <TextField
        label="Parcela por Mês"
        value={values.parecelaMes}
        required
        onChange={handlenChange}
        name="parecelaMes"
        margin="normal"
        id="formatted-numberformat-input"
        variant="standard"
      />
      <TextField
        label="Parcela por ano"
        value={values.parecelaAno}
        required
        onChange={handlenChange}
        name="parcelaAno"
        margin="normal"
        id="formatted-numberformat-input"
        variant="standard"
      />
      <TextField
        label="%Mes"
        value={values.porMes}
        required
        onChange={handlenChange}
        name="porMes"
        margin="normal"
        id="formatted-numberformat-input"
        variant="standard"
      />
      <TextField
        label="%Ano"
        value={values.porAno}
        required
        onChange={handlenChange}
        name="porAno"
        margin="normal"
        id="formatted-numberformat-input"
        variant="standard"
      />
      <TextField
        label="Valor de Entrada"
        value={values.entrada}
        required
        onChange={handlenChange}
        name="entrada"
        margin="normal"
        id="formatted-numberformat-input"
        variant="standard"
      />
      <TextField
        label="amortizacao"
        value={values.amortizacao}
        required
        onChange={handlenChange}
        name="amortizacao"
        margin="normal"
        id="formatted-numberformat-input"
        variant="standard"
      />
      
    </>
  )
}
