import { Box, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import Link from "next/link";
import BaseSite from "../../components/Base";

export default function homeScreen() {
    return (
        <>
            <BaseSite>
                <Box sx={{
                    backgroundImage: 'linear-gradient(#05FC00, #1E74D9)',
                    mt: '3em',
                    padding: '3em',
                    height: '100vh'
                }}>
                    <Typography
                        variant="h1"
                        sx={{ textAlign:'center', fontSize:'4em' }}>
                        Tabelas para facilitar sua vida
                    </Typography>
                    <Typography>
                        Feitas para melhorar sua vida , facil de usar
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundImage: 'linear-gradient(#1E74D9,#F53636)',
                    padding: '4em',
                    height: '100vh'
                }}>
                    <Typography variant="h3" sx={{fontSize:'2em',  textAlign:'center',}}>
                        Utilize a  <Link href={'/tabelasac'} style={{color:'white'} }>
                        Tabela Sac
                    </Link> para calcular seu financiamento 
                    </Typography>
                   
                </Box>

            </BaseSite>
        </>
    )
}