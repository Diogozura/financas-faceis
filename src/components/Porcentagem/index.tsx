import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Explica } from '../../../styles';

export default function Porcentagen({setTaxaMesal})  {
  const [yearPercentage, setYearPercentage] = useState<any>('');
  const [monthPercentage, setMonthPercentage] = useState('');

  const handleYearPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearPercentage(event.target.value);
    setMonthPercentage((Number(event.target.value) / 12).toFixed(2));
  }

  const handleMonthPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonthPercentage(event.target.value);
    setYearPercentage((Number(event.target.value) * 12).toFixed(2));
  }

  const taxaMesal = ( 1 + yearPercentage/100 ) ** ( 1/12 ) -1
  setTaxaMesal(taxaMesal)
  return (
    <>
      <Explica>*Informe Anos a serem pagos ou a quantidade de meses</Explica>
      <TextField
              label="% Ano"
              sx={{marginBottom: 2}}
              id="formatted-numberformat-input"
              variant="outlined"
        value={yearPercentage}
        onChange={handleYearPercentageChange}
      />
          <TextField
              label="% Mês"
              sx={{marginBottom: 2}}
              
              id="formatted-numberformat-input"
              variant="outlined"
              value={monthPercentage}
            onChange={handleMonthPercentageChange}
      />
    </>
  );
}

