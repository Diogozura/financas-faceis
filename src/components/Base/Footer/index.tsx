import { Box, List, ListItem, Typography } from "@mui/material";
import styled from 'styled-components'
import Link from "next/link";



const Navigation = styled.a`
color: #8D98BA;
text-decoration: none;
/* font-size: x-large; */
cursor: pointer;
@media only screen and (max-width: 550px){
    margin: 5px;
}
&:hover{    

    text-decoration: underline;
    }
`

const footer = [
    {
        categoria: 'Geral',
        item1: {
            nome: 'Como Usar',
            link: '/404'
        },
        item2: {
            nome: 'Blog',
            link: '/404'
        },
        item3: {
            nome: 'Tabelas',
            link: '/'
        },

    }, {
        categoria: 'Mais',
        item1: {
            nome: 'Contato',
            link: '/contato'
        },
        item2: {
            nome: 'Github',
            link: 'https://github.com/Diogozura/financas-faceis'
        },
        item3: {
            nome: 'Instagram',
            link: '/404'
        },
        item4: {
            nome: 'Lançamentos',
            link: '/404'
        },

    }, {
        categoria: 'Sobre',
        item1: {
            nome: 'Projeto',
            link: '/404'
        },
        item2: {
            nome: 'GitHub',
            link: 'https://github.com/Diogozura/financas-faceis'
        },
        item3: {
            nome: 'Quem Somos?',
            link: '/sobre'
        }
    },
    {
        categoria: 'Privacidade',
        item1: {
            nome: 'politicas de Privacidade',
            link: '/politicas-de-privacidade'
        },
        item2: {
            nome: 'Preferencias de Cookie',
            link: '/404'
        }

    },


]

export default function Footer() {
    return (
        <Box padding={3} mt={0} sx={{ backgroundColor: '#201E50' }}>
            <Box width={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'} >
                {footer.map((value) => (
                    <>
                        <List>
                            <ListItem sx={{ fontWeight: 700, fontSize: '1.5em', color: '#FFFF' }}>{value.categoria}</ListItem>
                            <ListItem>
                                <Link href={`${value.item1.link}`} legacyBehavior>
                                    <Navigation> {value.item1.nome}</Navigation>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={`${value.item2.link}`} legacyBehavior>
                                <Navigation> {value.item2.nome}</Navigation>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={`${value.item3?.link}`} legacyBehavior >
                                <Navigation> {value.item3?.nome}</Navigation>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={`${value.item4?.link}`} legacyBehavior >
                                <Navigation> {value.item4?.nome}</Navigation>
                                </Link>
                            </ListItem>
                        </List>

                    </>

                ))}

            </Box>
            <Typography color={'white'} variant={"h4"}>Tabelas funcionais</Typography>
        </Box>


    )
}