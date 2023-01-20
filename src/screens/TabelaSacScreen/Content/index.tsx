import { Box, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { NumberFormatCustom } from '../../../components/number/number'
import FormControl from '@mui/material/FormControl'
import { theme } from '../../../../styles/theme'
import YearToMonthForm from '../../../components/mesAno'
import Porcentagens from '../../../components/Porcentagem'
import CustomizedTables from '../TableSac'



const Title = styled.h1`
  color:${theme.colors.AzulEscuro};
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
    
    
    const [values, setValues] = React.useState<Item>({
        // Valor inicial a pagar
        valorInicial: 0,
        // Valor entrada
        entrada: 0,
        // amortização
        // amortizacao: 0,
    })

    const valorInicial =values.valorInicial
    const valorEntrada = values.entrada
    const parcelaMes = Meses
   

 
    const valores = [{
        simble: 'R$',
        name: 'valorInicial',
        value: values.valorInicial,
        label: 'Valor Financiado',
    },
    {
        simble: 'R$',
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
   
   
   
    // console.log("valor inicial", values.valorInicial)

      
   
    return (
        <>
            
            {/* <MyComponent/> */}
            <Box
                sx={{
                    width: 700,
                    height: 300,
                    margin: 'auto',
                    // backgroundColor: 'primary.dark',
                    // '&:hover': {
                    //   backgroundColor: 'primary.main',
                    //   opacity: [0.9, 0.8, 0.7],
                    // },
                }}
            >
                <form >
                
                    <FormControl
                        color='info'
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }} variant="standard"  >
                        {valores.map((item) => (
                            <>

                                <TextField
                                    label={item.label}
                                    value={item.value}
                                    name={item.name}
                                    required
                                    onChange={handlenChange}
                                    margin="normal"
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
                      
                    </FormControl>

                </form>
               
            </Box>
           
            <CustomizedTables valorInicial={valorInicial} error={error} valorEntrada={valorEntrada} taxaMesal={taxaMesal} parcelaMes={ parcelaMes }/>
            
        </>
    )
}
