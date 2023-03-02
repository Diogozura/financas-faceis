import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Textos({ children }) {
    return (
        <>  <Box margin={'auto'} marginBottom={5} sx={{ bgcolor: '#F4F4F4',  maxWidth: 700, }} borderRadius="10px" padding={3}>
            <Typography variant='h4' fontSize={'1em'} fontWeight={400}>
                O sistema SAC (Sistema de Amortização Constante) é uma forma comum de financiamento de imóveis no Brasil. Ele é semelhante ao sistema Price, mas as parcelas incluem tanto juros quanto amortização.
            </Typography>
        </Box>
            {children}
            <Box borderRadius={2} padding={4} sx={{ maxWidth: 700, m: 'auto', mt:'5em', mb: '7em', bgcolor: '#F4F4F4', }}>
                <Typography variant='h3' sx={{ mb: 2 }}>O que é a Tabela SAC?</Typography>
                <Typography sx={{ mb: 2 }}>
                    O sistema SAC (Sistema de Amortização Constante) é uma forma comum de financiamento de imóveis no Brasil. Ele é semelhante ao sistema Price, mas as parcelas incluem tanto juros quanto amortização. Isso significa que, a cada mês, uma parte da parcela é usada para pagar os juros e outra parte é usada para reduzir o saldo do empréstimo.
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    Uma das principais vantagens do sistema SAC é que, como as parcelas incluem amortização, o valor da dívida diminui ao longo do tempo. Isso significa que, no final do período de financiamento, o comprador terá pago menos juros em comparação com o sistema Price. Além disso, o sistema SAC geralmente permite que o comprador pague parcelas menores no início do financiamento, o que pode ser uma boa opção para quem tem um orçamento apertado.
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    Porém, existe também algumas desvantagens do sistema SAC. Como as parcelas incluem amortização, elas geralmente são mais altas do que as parcelas do sistema Price. Além disso, como o valor da dívida diminui ao longo do tempo, o comprador pode acabar pagando mais juros no início do financiamento.
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    Em resumo, o sistema SAC é uma boa opção para quem quer pagar menos juros ao longo do tempo e tem flexibilidade no orçamento. No entanto, é importante lembrar que as parcelas são geralmente mais altas do que as parcelas do sistema Price e é importante avaliar se é possível arcar com elas ao longo do tempo.
                </Typography>

            </Box>
        </>
    )
}