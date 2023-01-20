import styled from 'styled-components'

export const Navigation = styled.a`
color: #ffffff;
padding: 10px;
/* text-decoration: none; */

cursor: pointer;
@media only screen and (max-width: 550px){
    margin: 5px;
}
&:hover{    
    /* color: #ffffff; */
    text-decoration: underline;
    }
`