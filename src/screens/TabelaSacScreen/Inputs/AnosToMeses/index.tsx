import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';


export default function YearAndMonthConverter({ setMeses }: any) {
  const [value, setValue] = React.useState(0);
  const [unit, setUnit] = React.useState('anos');

  const handleValueChange = (event) => {
    setValue(event.target.value);

  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const yearsToMonths = (years) => years * 12;
  const monthsToYears = (months) => (months / 12);


  let result;
  if (unit === 'anos') {
    result = yearsToMonths(value);
    result = `${result} meses`;
    setMeses(yearsToMonths(value))
  } else {
    result = yearsToMonths(value);
    result = `${value} meses`;
    setMeses(value)
  }

  return (
    <aside >
      <FormControl sx={{ display: 'flex',marginBottom:5,  maxWidth: 400, flexDirection: 'row' }} >
        <TextField
          label={unit}
          type="number"
        value={value}
        fullWidth
        variant="outlined"
        sx={{ width:180}}
        id="formatted-numberformat-input"
          onChange={handleValueChange}
          margin='none'
        />
       
       <Select
          labelId="simple-select-label"
          id="demo-simple-select"
          value={unit}
          sx={{width:90}}
          onChange={handleUnitChange}
        >

          <MenuItem value={'anos'}>Anos</MenuItem>
          <MenuItem value={'meses'}>Meses</MenuItem>
        </Select>

      </FormControl>

      {/* <Typography>{result}</Typography> */}
    </aside>
  );
};


