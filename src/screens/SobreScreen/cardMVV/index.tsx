import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';

const mvv = [
    {
        'title': 'MISSÃO',
        'img': 'foguete',
        'assunto': 'Nossa missão é a melhoria na vida das pessoas , para as que possam viver e não passar tanto tempo fazendo atividade repetitivas .',

    },{
        'title': 'VISÃO',
        'img': 'luneta',
        'assunto': 'Nossa missão é a melhoria na vida das pessoas , para as que possam viver e não passar tanto tempo fazendo atividade repetitivas .',
    },{
        'title': 'VALORES',
        'img': 'lua',
        'assunto': 'Nossa missão é a melhoria na vida das pessoas , para as que possam viver e não passar tanto tempo fazendo atividade repetitivas .',
    }
]


export default function PostMVV() {
    return (
        <>
            {mvv.map((i) => (
                <>
                    <Card  key={uuidv4()} sx={{ maxWidth: 345, bgcolor: '#BBC4DF', height: 350, mb: 2 }}>
                        <CardActionArea>
                            <CardMedia sx={{ bgcolor: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', padding: 4 }}>
                                <Image src={`/${i.img}.svg`} alt='foguete Desafio' width={260} height={100}>
                                </Image>
                            </CardMedia>
                            <CardContent>

                                <>
                                    <Typography gutterBottom textAlign={'center'} color={'#000'} variant="h5" component="div">
                                        {i.title}
                                    </Typography>
                                    <Typography variant="body2" height={70} color={'#000'}>
                                        {i.assunto}
                                    </Typography>

                                </>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </>
            ))}

        </>
    )
}