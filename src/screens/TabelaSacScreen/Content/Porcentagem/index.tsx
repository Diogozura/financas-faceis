// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// // import { Explica } from '../../../styles';

// export default function Porcentagen({setTaxaMesal})  {
//   const [yearPercentage, setYearPercentage] = useState<any>('');
//   const [monthPercentage, setMonthPercentage] = useState('');

//   const handleYearPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setYearPercentage(event.target.value);
//     setMonthPercentage((Number(event.target.value) / 12).toFixed(2));
//   }

//   const handleMonthPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setMonthPercentage(event.target.value);
//     setYearPercentage((Number(event.target.value) * 12).toFixed(2));
//   }

//   const taxaMesal = ( 1 + yearPercentage/100 ) ** ( 1/12 ) -1
//   setTaxaMesal(taxaMesal)
//   return (
//     <>
//       {/* <Explica>*Informe Anos a serem pagos ou a quantidade de meses</Explica> */}
//       <TextField
//               label="% Ano"
//               sx={{marginBottom: 2}}
//               id="formatted-numberformat-input"
//               variant="outlined"
//         value={yearPercentage}
//         onChange={handleYearPercentageChange}
//       />
//           <TextField
//               label="% Mês"
//               sx={{marginBottom: 2}}

//               id="formatted-numberformat-input"
//               variant="outlined"
//               value={monthPercentage}
//             onChange={handleMonthPercentageChange}
//       />
//     </>
//   );
// }

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
  };

  const convertToMonth = (yearPercentage) => (yearPercentage / 12).toFixed(2);
  const convertToYear = (monthPercentage: number) => (
    monthPercentage * 12).toFixed(2);


  const taxaMesal = (1 + +convertToYear(value) / 100) ** (1 / 12) - 1
  setTaxaMesal(taxaMesal.toFixed(2))
  return (
    <aside>
      {/* <form>

        <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row' }}>
          <TextField
            type="number"
            value={value}
            onChange={handleValueChange}
            label={`% ${unit === 'ano' ? 'por ano' : 'por mês'}`}
            InputProps={{
              endAdornment: unit === 'ano' ? '%' : '%/mês',
            }}
          />
          <Select
            labelId="simple-select-label"
            id="demo-simple-select"
            value={unit}
            onChange={handleUnitChange}
          >

            <MenuItem value="ano">Ano</MenuItem>
            <MenuItem value="mês">Mês</MenuItem>
          </Select>


        </FormControl> */}
      {/* <p>
        {unit === 'ano'
          ? `${value}% por ano é equivalente a ${convertToMonth(value)}% por mês.`
          : `${value}% por mês é equivalente a ${convertToYear(value)}% por ano.`}
      </p> */}
      {/* </form> */}

      <FormControl  sx={{ display: 'flex', flexDirection: 'row' }} >
      <TextField
        label={unit}
        // type="number"
        value={value}
        fullWidth
        sx={{ width: 180 }}
        id="formatted-numberformat-input"
        variant="outlined"
        onChange={handleValueChange}

      />

<Select
          labelId="simple-select-label"
          id="demo-simple-select"
          value={unit}
          sx={{width:90}}
          onChange={handleUnitChange}
        >

          <MenuItem value="%ano">Ano</MenuItem>
          <MenuItem value="%mês">Mês</MenuItem>
        </Select> 

      </FormControl>
  
    </aside>
  );
};




