import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import BaseSite from "../../components/Base";
import TextoBox from "../../components/TextoBox";
import CardDevs from "./cardDevs";
import PostMVV from "./cardMVV";

export default function SobreScreen() {
    return (
        <>
            <BaseSite>
                <TextoBox>
                    <Typography variant="h3" component={'h1'}>
                        Quem somos
                    </Typography>
                    <Typography variant="body1" component={'p'}>
                        Somos um grupo de Desenvolvedores com sonho de criar soluções para ajudar as pessoas em atividades chatas e repetitivas do dia a dia
                    </Typography>
                </TextoBox>
                <Box display={"flex"} justifyContent={'space-around'} flexWrap={'wrap'}>
                    <PostMVV />
                </Box>
                <Box sx={{
                    backgroundImage: 'linear-gradient(180deg, rgba(5, 252, 0, 0.5) 0%, rgba(30, 116, 217, 0.5) 100%)',
                    mt: '3em',
                    padding: '3em',
                    // height: '100vh'
                }}
                >
                    <Typography variant="h3" textAlign={'center'} mb={5} component={'h1'}>
                    Colaboradores
                    </Typography>
                    <Box display={"flex"} justifyContent={'space-around'} flexWrap={'wrap'}>
                    <CardDevs/>
                    </Box>
                  
                </Box>
            </BaseSite>
        </>
    )
}