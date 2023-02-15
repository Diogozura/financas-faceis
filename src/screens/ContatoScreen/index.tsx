import BaseSite from "../../components/Base";
import { Box, Typography } from "@mui/material";
import { CardMedia } from '@mui/material';
import Link from "next/link";
export default function Contato() {
    return (
        <>
            <BaseSite>
                <Box sx={{
                    mt: 10,

                }}>
                    <Box sx={{
                        textAlign: 'center',
                        width: '90%',
                        padding:'30px',
                        m: 'auto',
                        border: '1px solid #000000',
                        borderRadius: ' 10px'

                    }}>
                        <Typography variant="h1" fontSize={'4em'} fontWeight={500}>
                            Contato
                        </Typography>
                        <Typography variant="body1">
                            <Link href={'mailto:webmaster@example.com'}>
                                2ess.email.com
                            </Link>
                        </Typography>
                    </Box>
                    <CardMedia>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSckjcxQN6Wq-2vaU0O59B01hyBBXhlLwPaGAsqySMWyLkXWxg/viewform?embedded=true" width="100%" height="910px" >Carregando…</iframe>
                    </CardMedia>

                </Box>

            </BaseSite>

        </>
    )
}