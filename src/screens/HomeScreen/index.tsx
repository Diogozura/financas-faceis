import { Box, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import Link from "next/link";
import BaseSite from "../../components/Base";
import Posts from "../../components/Posts";

export default function homeScreen() {
    return (
        <>
            <BaseSite>
                <Box sx={{
                    backgroundImage: 'linear-gradient(180deg, rgba(5, 252, 0, 0.48) 0%, rgba(30, 116, 217, 0.48) 100%);',
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
                    <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-around' }>
                        <Posts to={'/tabelasac'} title={'Tabela SAC'} assunto={'tabela sac....'} />
                        <Posts to={'/tabelasac'} title={'Tabela SAC'} assunto={'tabela sac....'} />   
                    <Posts to={'/tabelaprice'} title={'Tabela PRICE'} assunto={'tabela price....'} />   
                    </Box>
                </Box>
                <Box sx={{
                    backgroundImage: 'linear-gradient(180deg, rgba(30, 116, 217, 0.5) 0%, rgba(245, 54, 54, 0.5) 100%);',
                    padding: '4em',
                    height: '100vh'
                }}> 
                    
   
                </Box>

                
            </BaseSite>
        </>
    )
}