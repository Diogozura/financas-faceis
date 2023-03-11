import { Box, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import BaseSite from "../../components/Base";
import { Navigation } from "../../components/Links";
import Posts from "../../components/Posts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function homeScreen() {
    return (
        <>
            <BaseSite>
                <Box sx={{
                    backgroundImage: 'linear-gradient(180deg, rgba(5, 252, 0, 0.5) 0%, rgba(30, 116, 217, 0.5) 100%)',
                    mt: '3em',
                    padding: '3em',
                    height: '100vh'
                }}>
                      <Box display={'flex'}  flexWrap={'wrap'} alignItems={"center"} justifyContent={'space-around'}>
                    <Typography
                        variant="h1"
                            width={'400px'}
                            
                        fontWeight={'bold'}
                        sx={{ textAlign: 'center', fontSize: '3em' }}>
                        2s technology
                        soluções tech para seus problemas do dia-a-dia
                    </Typography>
                    <Image src={'/pclogo.svg'} blurDataURL={''} width={350} height={300} alt="logo PC 2S" />

                    </Box>
                    <Box textAlign={'center'} mt={5}>
                    <Navigation href="#baixo"> <ExpandMoreIcon color="action" sx={{ fontSize: 70 }}/></Navigation>
                    </Box>
                   
                </Box>
                <Box id="baixo" sx={{
                    backgroundImage: 'linear-gradient(180deg, rgba(30, 116, 217, 0.5) 0%, rgba(245, 54, 54, 0.5) 100%);',
                    padding: '4em',
                    // height: '100vh'
                }}>
                    <Box  display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>
                        <Posts to={'/tabelasac'} title={'Tabela SAC'} assunto={'tabela sac....'} />
                        <Posts to={'/tabelasac'} title={'Tabela SAC'} assunto={'tabela sac....'} />
                        <Posts to={'/tabelaprice'} title={'Tabela PRICE'} assunto={'tabela price....'} />
                    </Box>


                </Box>


            </BaseSite>
        </>
    )
}