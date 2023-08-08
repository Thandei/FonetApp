import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { ErrorMessage } from 'formik';

interface DynamicRadioProps {
  value: string;
  label: string;
  name: string;
  options: { value: string; label: string }[];
  handleChange: (e: React.ChangeEvent<any>) => void;
}

const DynamicRadio: React.FC<DynamicRadioProps> = ({ value, label, name, options, handleChange }) => (
  <FormControl component="fieldset" fullWidth sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography component="legend" sx={{ marginRight: 1 }}>{label}</Typography>
    <RadioGroup row id={name} name={name} value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
      ))}
    </RadioGroup>
    <span style={{color:"red"}}>
      <ErrorMessage name={name} />
      </span>
  </FormControl>  
);

export default DynamicRadio;
