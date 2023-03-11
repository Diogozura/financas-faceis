import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavigationMenu } from "../../../components/Links";
const devs = [
    {
        'img': 'diogo',
        'title': 'Diogo',
        'rede': 'diogo__zura',
    },
    {
        'img': 'danilo',
        'title': 'Danilo',
        'rede': 'filitecxz',
    }
]


export default function CardDevs() {
    return (
        <>
            {devs.map((i) => (
                <>
                    <Card sx={{ maxWidth: 345, bgcolor: '#BBC4DF', height: 350, mb: 2 }}>
                        <CardActionArea>
                            <CardMedia sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', textAlign: 'center'}}>
                                <Image src={`/${i.img}.svg`} alt={i.title} width={260} height={260}>
                                </Image>
                            </CardMedia>
                            <CardContent>

                                <>
                                    <Typography gutterBottom textAlign={'center'} color={'#000'} variant="h5" component="div">
                                        {i.title}
                                    </Typography>
                                    <NavigationMenu href={`https://www.instagram.com/${i.rede}`}>
                                        <InstagramIcon />
                                    </NavigationMenu>


                                </>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </>
            ))}

        </>
    )
}