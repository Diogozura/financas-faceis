import { Box } from "@mui/material"
import styled from "styled-components"

export default function TextoBox({ children }) {
    return (
        <>
            <Box sx={{
                width: '80%', 

                margin:'10em auto 1em ',
                background: '#F1F1F1',
                textAlign: 'center',
                padding:'2em',
              
                borderRadius: '10px',
            }}>
            {children}
        </Box>
        </>
    )
}