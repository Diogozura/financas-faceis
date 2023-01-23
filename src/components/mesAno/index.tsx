import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import styled from 'styled-components'
import { Explica } from '../../../styles';

interface Props {
}


export default function YearToMonthForm({ setMeses }:any) {
  const [year, setYear] = useState<any>('');
  const [month, setMonth] = useState<any>('');

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yearValue:any = event.target.value;
    setYear(yearValue);
    const mes = yearValue * 12
    setMonth(yearValue * 12);
    setMeses(mes)
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const monthValue:any = event.target.value;
    setMonth(monthValue);
    const mes = monthValue / 12
    setMeses(mes)
    setYear(monthValue / 12);
  };

  return (
    <>
      <Explica>*Informe Anos a serem pagos ou a quantidade de meses</Explica>
      <TextField
        label="Anos"
        sx={{marginBottom: 2}}
         id="formatted-numberformat-input"
        variant="outlined"
        
        value={year}
        onChange={handleYearChange}
      />
      <TextField
        label="Meses"
        
        sx={{marginBottom: 2}}
        id="formatted-numberformat-input"
        variant="outlined"
        value={month}
        onChange={handleMonthChange}
      />
           
    </>
  );
};

