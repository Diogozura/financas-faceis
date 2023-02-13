import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { theme } from "../../../../styles/theme";

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
        <Box padding={3} sx={{ backgroundColor: '#201E50' }}>
              <Box width={'100%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'} >
            {footer.map((value) => (
                <>
                    <List>
                        <ListItem  sx={{ fontWeight: 700,fontSize:'1.5em', color:'#FFFF' }}>{value.categoria}</ListItem>
                        <ListItem> <Link href={`${value.item1.link}`} style={{color:'#525B76', textDecoration:'none'}}>{value.item1.nome}</Link></ListItem>
                        <ListItem> <Link href={`${value.item2.link}`} style={{color:'#525B76', textDecoration:'none'}}>{value.item2.nome}</Link></ListItem>
                        <ListItem> <Link href={`${value.item3?.link}`} style={{color:'#525B76', textDecoration:'none'}}>{value.item3?.nome}</Link></ListItem>
                        <ListItem> <Link href={`${value.item4?.link}`} style={{color:'#525B76', textDecoration:'none'}}>{value.item4?.nome}</Link></ListItem>
                    </List>
                   
                </>

            ))}
            
        </Box>
            <Typography color={'white'} variant={"h4" }>Tabelas funcionais</Typography>
        </Box>
      
        
    )
}