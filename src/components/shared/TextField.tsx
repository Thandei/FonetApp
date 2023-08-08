import { TextField, Box } from '@mui/material';
import { ErrorMessage } from 'formik';

interface CustomTextFieldProps {
    label: string;
    id: string;
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    multiline?: boolean;
    rows?: number;
    variant?: 'filled' | 'outlined' | 'standard';
    size?: 'small' | 'medium';
    type? : string
  }
  
  const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, id, name, value, handleChange, multiline = false, rows = 1, variant = 'outlined', size = 'small' }) => (
    <Box mb={2}>
      <TextField fullWidth label={label} multiline={multiline} rows={rows} id={id} name={name} value={value} onChange={handleChange} variant={variant} size={size} />
      <span style={{color:"red"}}>
      <ErrorMessage name={name} />
      </span>
    </Box>
  );
  
  export default CustomTextField;
  