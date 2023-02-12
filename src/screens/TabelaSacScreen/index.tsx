

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Content from './Content';
import Head from 'next/head';
import BaseSite from '../../components/Base';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function ScrollTop(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

export default function BackToTop(props: Props) {
    return (
        <>

            <Head>
                <title>Calculo Tabela SAC</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BaseSite>

                <React.Fragment>

                    {/* <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to see button
          </Typography>
        </Toolbar>
      </AppBar> */}
                    <Toolbar id="back-to-top-anchor" />
                    <Container>
                        <Typography
                            variant='h1'
                            fontSize={'3em'}
                            fontWeight={500}
                            textAlign={'center'}
                            marginBottom={2}

                            sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', textDecorationLine: 'underline' }}
                        >
                            Calculo da Tabela Sac</Typography>
                        <Box>destinado para Share </Box>
                        <Box margin={'auto'} marginBottom={5} borderRadius={3} boxShadow={10} width={'80%'} padding={2}>
                            <Typography variant='h4' fontSize={'1em'} fontWeight={400}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore, fugiat quia nisi officia ducimus tempore incidunt officiis eveniet molestiae alias. Asperiores, omnis obcaecati. Mollitia ipsam ducimus modi quas laudantium?
                            </Typography>
                        </Box>
                        {/* FORM E TABELA  */}
                        <Content />
                    
                        <Box sx={{ maxWidth: 700, m: 'auto' }}>
                            <Typography variant='h2'>O que é a Tabela SAC?</Typography>
                            <Typography sx={{mb:2}}>
                            O sistema SAC (Sistema de Amortização Constante) é uma forma comum de financiamento de imóveis no Brasil. Ele é semelhante ao sistema Price, mas as parcelas incluem tanto juros quanto amortização. Isso significa que, a cada mês, uma parte da parcela é usada para pagar os juros e outra parte é usada para reduzir o saldo do empréstimo.
                            </Typography>
                            <Typography sx={{mb:2}}>
                            Uma das principais vantagens do sistema SAC é que, como as parcelas incluem amortização, o valor da dívida diminui ao longo do tempo. Isso significa que, no final do período de financiamento, o comprador terá pago menos juros em comparação com o sistema Price. Além disso, o sistema SAC geralmente permite que o comprador pague parcelas menores no início do financiamento, o que pode ser uma boa opção para quem tem um orçamento apertado.
                            </Typography>
                            <Typography sx={{ mb: 2 }}>
                            Porém, existe também algumas desvantagens do sistema SAC. Como as parcelas incluem amortização, elas geralmente são mais altas do que as parcelas do sistema Price. Além disso, como o valor da dívida diminui ao longo do tempo, o comprador pode acabar pagando mais juros no início do financiamento.
                            </Typography>
                            <Typography sx={{ mb: 2 }}>
                            Em resumo, o sistema SAC é uma boa opção para quem quer pagar menos juros ao longo do tempo e tem flexibilidade no orçamento. No entanto, é importante lembrar que as parcelas são geralmente mais altas do que as parcelas do sistema Price e é importante avaliar se é possível arcar com elas ao longo do tempo.
                            </Typography>
                           
                        </Box>

                    </Container>

                    <ScrollTop {...props}>
                        <Fab size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>
                </React.Fragment>
            </BaseSite>
        </>
    );
}