import {  TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { NumberFormatCustom } from '../../../components/number/number'
import FormControl from '@mui/material/FormControl'
import { theme } from '../../../../styles/theme'
import YearToMonthForm from '../../../components/mesAno'
import Porcentagens from '../../../components/Porcentagem'
import CustomizedTables from '../TableSac'
import { Explica } from '../../../../styles'

import { Moment } from 'moment'
import moment from 'moment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'



const Box = styled.section`
  width: 450px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 80%;
}
`
type Item = {
    // amortizacao: number,
    valorInicial: number,
    entrada: number,
};

export default function Content() {
    const [Meses, setMeses] = React.useState('');
    const [taxaMesal, setTaxaMesal] = React.useState('')
    const [error, setError] = React.useState(true)
    const [value, setValue] = React.useState<Moment | null>(
        moment()
      );
console.log(value.format("MMM / YY"))
    const [values, setValues] = React.useState<Item>({
        // Valor inicial a pagar
        valorInicial: 0,
        // Valor entrada
        entrada: 0,
        // amortização
        // amortizacao: 0,
    })

    const valorInicial = values.valorInicial
    const valorEntrada = values.entrada
    const parcelaMes = Meses



    const valores = [{
        
        name: 'valorInicial',
        value: values.valorInicial,
        label: 'Valor Financiado',
    },
    {
        
        name: 'entrada',
        value: values.entrada,
        label: 'Valor de Entrada'
    },
        // {
        //     simble: 'R$',
        //     name: 'amortizacao',
        //     value: values.amortizacao,
        //     label: 'amortizacao'
        // }
    ]


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
    const handleChange = (newValue: Moment | null) => {
        setValue(newValue);
      };


    // console.log("valor inicial", values.valorInicial)



    return (
        <>

            {/* <MyComponent/> */}
            <Box>
                <form >

                    <FormControl
                        color='info'
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            justifyContent: ' space-around',
                        }} variant="standard"  >
                        <Explica>*Informe Anos a serem pagos ou a quantidade de meses</Explica>
                        {valores.map((item) => (
                            <>
                                
                                <TextField
                                    label={item.label}
                                    value={item.value}
                                    name={item.name}
                                    required
                                    onChange={handlenChange}
                                    sx={{marginBottom: 2}}
                                    id="formatted-numberformat-input"
                                    InputProps={{
                                        inputComponent: NumberFormatCustom as any,
                                    }}
                                    variant="outlined"
                                />
                            </>
                        ))}
                        <YearToMonthForm setMeses={setMeses} />
                        <Porcentagens setTaxaMesal={setTaxaMesal} />
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
          label="Date desktop"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
                        </LocalizationProvider>
                      
                    </FormControl>

                </form>

            </Box>

            <CustomizedTables valorInicial={valorInicial} error={error} valorEntrada={valorEntrada} taxaMesal={taxaMesal} parcelaMes={parcelaMes} />

        </>
    )
}
