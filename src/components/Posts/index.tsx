import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { theme } from "../../../styles/theme";

export default function Posts({to, title, assunto}) {
    return (
        <>
             <Card sx={{ maxWidth: 345,bgcolor: '#BBC4DF', height:350, mb: 2 }}>
            <CardActionArea>
                <CardMedia sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', padding:4 }}>
                    <Image src={'/photo_posts.svg'} alt='foguete Desafio' width={260} height={100}>
                    </Image>
                </CardMedia>
                <CardContent>
                   
                        <>
                            <Typography gutterBottom textAlign={'center'} color={'#000'} variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" height={70} color={'#000'}>
                                {assunto}
                            </Typography>
                                    <Typography variant="body2" textAlign={'center'} mt={2}  >
                                        <Link href={to}  style={{'color':theme.colors.Azul, fontSize:'1.3em'}}  >
                                            Confira
                                </Link>
                            </Typography>
                        </>

                  

                </CardContent>
            </CardActionArea>
            </Card>
        </>
    )
}