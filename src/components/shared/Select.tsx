import { FormControl, Select, MenuItem, Box, InputLabel } from '@mui/material';
import {  ErrorMessage } from 'formik';


interface CustomSelectProps {
    id: string;
    label: string;
    name: string;
    value: string | never[];
    handleSelectChange: React.ComponentProps<typeof Select>['onChange'];
    options: { value: string; label: string }[];
    variant?: 'filled' | 'outlined' | 'standard';
    size?: 'small' | 'medium';
    multiple?: boolean;
    placeholder: string

  }
  
  const CustomSelect: React.FC<CustomSelectProps> = ({ placeholder, id, name, value, handleSelectChange, options, variant = 'outlined', size = 'small', multiple = false }) => (
  <Box mb={2}>
    <FormControl fullWidth>
      <Select
        id={id}
        name={name}
        value={value}
        onChange={handleSelectChange}
        variant={variant}
        size={size}
        multiple={multiple}
        displayEmpty
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <span style={{ color: 'red' }}>
        <ErrorMessage name={name} />
      </span>
    </FormControl>
  </Box>
  );
  
  export default CustomSelect;
  