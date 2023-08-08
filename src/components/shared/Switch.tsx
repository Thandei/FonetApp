import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

interface DynamicSwitchProps {
  checked: boolean;
  label: string;
  name: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
}

const DynamicSwitch: React.FC<DynamicSwitchProps> = ({ checked, label, name, handleChange }) => (
  <Box mb={2}>
    <FormControlLabel control={<Switch id={name} name={name} checked={checked} onChange={handleChange} />} label={label} />
  </Box>
);

export default DynamicSwitch;
