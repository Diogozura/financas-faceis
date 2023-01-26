import { TextField, Typography } from '@mui/material'
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
import 'moment/locale/pt-br';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { DatePicker } from '@mui/x-date-pickers'



const Box = styled.section`
  width: 900px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 80%;
}
`
type Item = {
    // amortizacao: number,
    valorInicial: number,
    entrada: number,
    extra: number,
};

export default function Content() {
    const [Meses, setMeses] = React.useState('');
    const [taxaMesal, setTaxaMesal] = React.useState('')
    const [error, setError] = React.useState(true)
    const [data, setData] = React.useState<Moment | null>(
        moment()
    );

    const [values, setValues] = React.useState<Item>({
        // Valor inicial a pagar
        valorInicial: 0,
        entrada: 0,
        extra: 0,
        // amortização
        // amortizacao: 0,
    })

    const valorInicial = values.valorInicial
    const valorEntrada = values.entrada
    const parcelaMes = Meses
    const extra = values.extra


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
                        {/* <Explica>*Informe Anos a serem pagos ou a quantidade de meses</Explica> */}
                      
                        {valores.map((item) => (
                            <>

                                <TextField
                                    label={item.label}
                                    value={item.value}
                                    name={item.name}
                                    required
                                    onChange={handlenChange}
                                    sx={{ marginBottom: 2 }}
                                    id="formatted-numberformat-input"
                                    InputProps={{
                                        inputComponent: NumberFormatCustom as any,
                                    }}
                                    variant="outlined"
                                />
                            </>
                        ))}
                        <TextField
                            label='extra'
                            value={values.extra}
                            name="extra"
                            required
                            onChange={handlenChange}
                            sx={{ marginBottom: 2 }}
                            id="formatted-numberformat-input"
                            InputProps={{
                                inputComponent: NumberFormatCustom as any,
                            }}
                            variant="outlined"
                        />
                        <YearToMonthForm setMeses={setMeses} />
                        <Porcentagens setTaxaMesal={setTaxaMesal} />

                        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'pt-br'} >
                            <DatePicker
                                value={data}
                                views={['year', 'month']}
                                label="Data de Inicio"
                                inputFormat="MM/YYYY"
                                onChange={(newValue) => setData(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                      

                    </FormControl>

                </form>

            </Box>

            <CustomizedTables valorInicial={valorInicial} error={error} data={data} extra={extra} valorEntrada={valorEntrada} taxaMesal={taxaMesal} parcelaMes={parcelaMes} />

        </>
    )
}
