import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'is_admin',
    label: 'Administrador',
  },
  {
    value: 'is_user',
    label: 'Usuario',
  },
];

export default function SelectTextFields(
    { value, required, handleChange, name },
    ref
) {
//   const [currency, setCurrency] = React.useState('EUR');

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 1, width: '30ch',  }, 
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          name={name}
        //   label="Select"
          value={value}
          required={required}
          onChange={(e) => handleChange(e)}
        //   onChange={handleChange}
        //   helperText="Por favor, seleccione su tipo de cuenta"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}