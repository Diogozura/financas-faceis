import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



export default function SimpleTable() {
    const [count, setCount] = React.useState(134);
    const numbers = Array.from({ length: count + 1 }, (_, i) => count - i);
    return (
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>N</TableCell>
                    <TableCell>Parcelas</TableCell>
                    <TableCell>Juros</TableCell>
                    <TableCell>Amortização</TableCell>
                    <TableCell>Amortização extra</TableCell>
                    <TableCell>Saldo</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {numbers.map((num) => (
                    <TableRow key={num}>
                        <TableCell >{num}</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>5%</TableCell>
                        <TableCell>$100</TableCell>
                        <TableCell>$20</TableCell>
                        <TableCell>$900</TableCell>
                    </TableRow>
                ))}
                <TableRow>



                </TableRow>
            </TableBody>
        </Table>
    );
}