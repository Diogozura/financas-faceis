import { Box } from "@mui/material"
import styled from "styled-components"

export default function TextoBox({ children }) {
    return (
        <>
            <Box sx={{
                width: '80%', 

                margin:'5em auto 5em ',
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