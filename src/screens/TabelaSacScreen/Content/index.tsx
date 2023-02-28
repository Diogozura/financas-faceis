import { TextField, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { NumberFormatCustom } from '../../../components/number/number'
import FormControl from '@mui/material/FormControl'
import { theme } from '../../../../styles/theme'
import CustomizedTables from '../TableSac'
import { Moment } from 'moment'
import moment from 'moment'
import 'moment/locale/pt-br';
import dynamic from 'next/dynamic'
import InfoIcon from '@mui/icons-material/Info';

const Porcentagem = dynamic(
    () => import('./Porcentagem'),
    { loading: () => <p>Loading ...</p>, ssr: false }
)
const AnoMes = dynamic(
    () => import('./AnosToMeses'),
    { loading: () => <p>Loading ...</p>, ssr: false }
)



const Box = styled.section`
width: 900px;
margin: auto;
margin: auto;
flex-wrap: wrap;
flex-direction: row;
justify-content:  space-around;
  @media only screen and (max-width: 840px) {
    width: 80%;
}
`
const Inputs = styled.aside`
align-items: center;
display: flex;
flex-wrap: wrap;
 width: 800px;
 justify-content: space-between;
 @media only screen and (max-width: 840px) {
    width: 80%;
    flex-direction: column;
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
    const [add, setAdd] = React.useState(false)
    const [data, setData] = React.useState<Moment | null>(
        moment()
    );

    // console.log('taxa mensal', taxaMesal)
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



    return (
        <>

            {/* <MyComponent/> */}
            <Box>
                <form >

                    <FormControl
                        color='info'
                        variant="standard"  >
                        {/* <Explica>*Informe Anos a serem pagos ou a quantidade de meses</Explica> */}
                        <Inputs >
                            {valores.map((item) => (
                                < >

                                    <TextField
                                        label={item.label}
                                        value={item.value}
                                        name={item.name}
                                        required

                                        onChange=
                                        {handlenChange}
                                        sx={{ marginBottom: 2, width: 280 }}
                                        id="formatted-numberformat-input"
                                        InputProps={{
                                            inputComponent: NumberFormatCustom as any,
                                        }}
                                        variant="outlined"
                                    />
                                </>
                            ))}
                        </Inputs>


                        <Inputs>
                            <AnoMes setMeses={setMeses} />
                            <Porcentagem setTaxaMesal={setTaxaMesal} />
                        </Inputs>

                        {!add ? <Typography sx={{ display: 'flex', cursor: 'pointer', mb: 2, color: theme.colors.link }} onClick={() => setAdd(true)}> <InfoIcon sx={{ color: theme.colors.link }} color='info' />gostaria de adicionar Amortização extra?</Typography> : null}
                        {add ? <>
                            <Typography sx={{ display: 'flex', cursor: 'pointer', mb: 2, color: theme.colors.Vermelho }} onClick={() =>  setAdd(false)}> <InfoIcon sx={{ color: theme.colors.link }} color='info' />não  de adicionar Amortização extra?</Typography>
                            <TextField
                                label='extra'
                                value={values.extra}
                                name="extra"
                                required
                                onChange={handlenChange}
                                sx={{ marginBottom: 2, width: 280 }}
                                id="formatted-numberformat-input"
                                InputProps={{
                                    inputComponent: NumberFormatCustom as any,
                                }}
                                variant="outlined"
                            />
                        </>
                            : null}
                        {/* 
                        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'pt-br'} >
                            <DatePicker
                                value={data}
                                views={['year', 'month']}
                                label="Data de Inicio"
                                inputFormat="MM/YYYY"
                                onChange={(newValue) => setData(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider> */}


                    </FormControl>

                </form>
                <p>{Meses} Meses</p>
                <p>{taxaMesal} Taxa</p>

            </Box>

            <CustomizedTables valorInicial={valorInicial} error={error} data={data} extra={extra} valorEntrada={valorEntrada} taxaMesal={taxaMesal} parcelaMes={parcelaMes} />

        </>
    )
}
