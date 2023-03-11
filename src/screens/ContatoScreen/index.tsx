import BaseSite from "../../components/Base";
import { Box, Typography } from "@mui/material";
import { CardMedia } from '@mui/material';
import Link from "next/link";
import TextoBox from "../../components/TextoBox";
export default function Contato() {
    return (
        <>
            <BaseSite>
                <Box sx={{
                    mt: 10,

                }}>
                    <TextoBox>
                        <Typography variant="h2" component="h1"  fontWeight={500}>
                            Entre em contato
                        </Typography>
                        <Typography variant="body1">
                            <Link href={'mailto:webmaster@example.com'}>
                                2ess.email.com
                            </Link>
                        </Typography>
                    </TextoBox>
                    <CardMedia
                        component={'iframe'}
                        
                        height={'1200px'}
                        src="https://docs.google.com/forms/d/e/1FAIpQLSckjcxQN6Wq-2vaU0O59B01hyBBXhlLwPaGAsqySMWyLkXWxg/viewform?embedded=true">

                    </CardMedia>

                </Box>

            </BaseSite>

        </>
    )
}