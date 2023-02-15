import { Box } from "@mui/material"
import styled from "styled-components"

export default function TextoBox({ children }) {
    return (
        <>
            <Box sx={{
                width: '80%', 

                margin:'10em auto 0 ',
                background: '#F1F1F1',
                textAlign: 'center',
                padding:'2em',
                border: '1px solid #000000',
                borderRadius: '10px',
            }}>
            {children}
        </Box>
        </>
    )
}