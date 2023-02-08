import { Box, Typography } from "@mui/material"
import Link from "next/link"
import styled from "styled-components"
import { theme } from "../styles/theme"

const textos = [
    {
        'id':'1',
    "text": "Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado. "
    }, {
        'id':'2',
    'text': 'Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.'
},
    {
        'id':'3',
        'text': 'Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.'
    },
    {
        'id':'4',
        'text': 'O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.'
    },
    {
        'id':'5',
        'text': 'Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.'
    },
    {
        'id':'6',
        'text': 'O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.'
    }
]

export default function politicas() {
    return (
        <Box margin={'auto'} width={800} color={theme.colors.politic}>
            <Typography variant="h1" marginBottom={3} fontSize={50}>
                Política Privacidade
            </Typography>
            <Typography marginBottom={2} variant="body1">
                A sua privacidade é importante para nós. É política do 2S respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <Link href={'/'}>2S</Link> , e outros sites que possuímos e operamos.
            </Typography >
            {textos.map((value) => (
               <Typography marginBottom={2} key={value.id} variant="body1">
              {value.text}
           </Typography>
          ))}
        </Box>
    )
}

const Span = styled.span`
    color: ${theme.colors.politic}
`