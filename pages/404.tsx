import { Box, Typography } from "@mui/material";
import Image from "next/image";
import BaseSite from "../src/components/Base";
import { Navigation } from "../src/components/Links";


export default function Error404() {
    return (
        <>
            <BaseSite>

                <Box textAlign={'center'} sx={{
                    backgroundImage: 'linear-gradient(180deg, rgba(5, 252, 0, 0.5) 0%, rgba(30, 116, 217, 0.5) 100%)',
                    padding: '1em',
                    mt: '3em',
                    height: '100vh'
                }}>
                    <Typography variant="h2" component="h1">
                        Essa pagina não foi encontrada
                    </Typography>

                    <Image src={'/error404.svg'} width={300} height={300} alt={'error 404'} />


                    <Typography>

                        <Navigation href="/"> Click aqui voltar para home</Navigation>
                    </Typography>
                </Box>
            </BaseSite>
        </>
    )
}