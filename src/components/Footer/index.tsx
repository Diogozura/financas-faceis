import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

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
            link: '/404'
        },

    }, {
        categoria: 'Mais',
        item1: {
            nome: 'Contato',
            link: '/404'
        },
        item2: {
            nome: 'Github',
            link: '/404'
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
            link: '/404'
        }
    },
    {
        categoria: 'Privacidade',
        item1: {
            nome: 'politicas de Privacidade',
            link: '/404'
        },
        item2: {
            nome: 'Preferencias de Cookie',
            link: '/404'
        }

    },


]

export default function Footer() {
    return (
        <Box padding={3} sx={{ backgroundColor: '#D9D9D9' }}>
              <Box width={'100%'} display={'flex'} justifyContent={'space-around'} >
            {footer.map((value) => (
                <>
                    <List>
                        <ListItem sx={{ fontWeight: 500 }}>{value.categoria}</ListItem>
                        <ListItem> <Link href={`${value.item1.link}`}>{value.item1.nome}</Link></ListItem>
                        <ListItem> <Link href={`${value.item2.link}`}>{value.item2.nome}</Link></ListItem>
                        <ListItem> <Link href={`${value.item3?.link}`}>{value.item3?.nome}</Link></ListItem>
                        <ListItem> <Link href={`${value.item4?.link}`}>{value.item4?.nome}</Link></ListItem>
                    </List>
                   
                </>

            ))}
            
        </Box>
             <Typography>Tabelas funcionais</Typography>
        </Box>
      
        
    )
}