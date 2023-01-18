import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function Porcentagen({})  {
  const [yearPercentage, setYearPercentage] = useState('');
  const [monthPercentage, setMonthPercentage] = useState('');

  const handleYearPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearPercentage(event.target.value);
    setMonthPercentage((Number(event.target.value) / 12).toFixed(2));
  }

  const handleMonthPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonthPercentage(event.target.value);
    setYearPercentage((Number(event.target.value) * 12).toFixed(2));
  }

  return (
    <>
      <TextField
              label="% Ano"
              margin="dense"
              id="formatted-numberformat-input"
              variant="outlined"
        value={yearPercentage}
        onChange={handleYearPercentageChange}
      />
          <TextField
              label="% Mês"
             
              margin="dense"
              id="formatted-numberformat-input"
              variant="outlined"
              value={monthPercentage}
            onChange={handleMonthPercentageChange}
      />
    </>
  );
}

