import styled from 'styled-components'
import { theme } from '../../../pages/_app'

export const Navigation = styled.a`
color: #ffffff;
padding: 10px;
text-decoration: none;
/* font-size: x-large; */
font-family: "Museo700";
cursor: pointer;
@media only screen and (max-width: 550px){
    margin: 5px;
}
&:hover{    
    /* color: #ffffff; */
    text-decoration: underline;
    }
`
export const NavigationMenu = styled.a`
padding: 10px;
text-decoration: none;
color: #000;
/* font-size: x-large; */
cursor: pointer;
@media only screen and (max-width: 550px){
    margin: 5px;
}
&:hover{    
    /* color: #ffffff; */
    text-decoration: underline;
    }
`
export const LogoResponse = styled.div`
@media only screen and (min-width: 550px){
    display:none;
}
`