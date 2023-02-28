
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';


export default function Porcentagens({ setTaxaMesal }: any) {
  const [unit, setUnit] = useState('%ano');
  const [value, setValue] = useState(0);
 

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
    const value = event.target.value
    
  };

if(unit == '%ano'){
  const taxaMesal = (1 + +value / 100) ** (1 / 12) - 1
  setTaxaMesal(taxaMesal)
  
} else {
  console.log('mes',)
  const mes =  value * 12
  setTaxaMesal(mes)
  } 

 

  
  return (
    <aside>

  
      <FormControl sx={{ display: 'flex', marginBottom: 5, flexDirection: 'column' }} >
        <TextField
        label={'% Ano'}
        type="number"
        value={value}
          fullWidth
          placeholder='% Ano'
          InputProps={{ inputProps: { min: 0, max: 100 } }}
        sx={{ width: 280 }}
        id="formatted-numberformat-input"
        variant="outlined"
        onChange={handleValueChange}

      />



      </FormControl>
      <p>{ }</p>
    </aside>
  );
};




