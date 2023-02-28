

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
import Content from './Inputs';
import Head from 'next/head';
import BaseSite from '../../components/Base';
// import Textos from './Textos';
import dynamic from 'next/dynamic';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}
const Textos = dynamic(
    () => import('./Textos'),
    { loading: () => <p>Loading ...</p>, ssr: true }
)



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
                <meta name="description" content="  O sistema SAC (Sistema de Amortização Constante) é uma forma comum de financiamento de imóveis no Brasil. Ele é semelhante ao sistema Price, mas as parcelas incluem tanto juros quanto amortização. " />
            </Head>
            <BaseSite>

                <React.Fragment>

        
                    <Toolbar id="back-to-top-anchor" />
                    <Container>
                        <Typography
                            variant='h1'
                            fontSize={'3em'}
                            fontWeight={500}
                            textAlign={'center'}
                            marginBottom={2}
                            marginTop={5}
                            sx={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', textDecorationLine: 'underline' }}
                        >
                            Tabela SAC </Typography>
                        

                        {/* <Box>destinado para Share </Box> */}
                     
                        <Textos>

                        {/* FORM E TABELA  */}
                            <Content />
                            
                        </Textos>

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