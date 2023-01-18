import TextField from '@mui/material/TextField';
import React, { useState } from 'react';


interface Props {
}

export default function YearToMonthForm({ setMeses }:any) {
  const [year, setYear] = useState<any>('');
  const [month, setMonth] = useState<any>('');

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yearValue = event.target.value;
    setYear(yearValue);
    setMonth(yearValue * 12);
    setMeses(yearValue * 12)
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const monthValue = event.target.value;
    setMonth(monthValue);
    setMeses(monthValue)
    setYear(monthValue / 12);
  };

  return (
    <>
      <TextField
        label="Anos"
        margin="dense"
         id="formatted-numberformat-input"
        variant="outlined"
        value={year}
        onChange={handleYearChange}
      />
      <TextField
        label="Meses"
        margin="dense"
        id="formatted-numberformat-input"
        variant="outlined"
        value={month}
        onChange={handleMonthChange}
      />
           
    </>
  );
};

