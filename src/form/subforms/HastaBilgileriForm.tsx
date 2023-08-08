import React from 'react';
import { Typography, Container, Grid  } from '@mui/material';
import CustomSelect from '../../components/shared/Select';
import CustomTextField from '../../components/shared/TextField';
import { SelectChangeEvent } from '@mui/material/Select';


enum Cinsiyet {
  Erkek = 'erkek',
  Kadin = 'kadin',
}

enum KanGrubu {
  A = 'A',
  B = 'B',
  AB = 'AB',
  O = 'O',
}

enum RhFactor {
  Pozitif = 'pozitif',
  Negatif = 'negatif',
}

interface HastaBilgileriFormProps {
  values: {
    soyadi: string;
    adi: string;
    cinsiyet: string;
    yas: number;
    kanGrubu: string;
    rhFactor: string;
  };
  handleChange: (e: React.ChangeEvent<any>) => void;
  isSubmitting: boolean;
}

const HastaBilgileriForm: React.FC<HastaBilgileriFormProps> = ({ values, handleChange }) => {


  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    handleChange(event as unknown as React.ChangeEvent<any>);
  };
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" style={{fontSize:"20px"}}>Hasta Bilgileri</Typography>
      <CustomTextField id="adi" label="Adı" name="adi" value={values.adi} handleChange={handleChange} />
      <CustomTextField id="soyadi" label="Soyadı" name="soyadi" value={values.soyadi} handleChange={handleChange} />
      <CustomTextField id="yas" label="Yaş" name="yas" value={values.yas.toString()} type="number" handleChange={handleChange} />
      <CustomSelect
        id="cinsiyet"
        label="Cinsiyet"
        name="cinsiyet"
        placeholder="Cinsiyet Seçin" // Yeni placeholder
        value={values.cinsiyet || ""}
        options={[
          { value: Cinsiyet.Erkek, label: 'Erkek' },
          { value: Cinsiyet.Kadin, label: 'Kadın' },
        ]}
        handleSelectChange={handleSelectChange}
      />
      <Grid container spacing={2}> {/* Yan yana inputlar için Grid kullanılır */}
        <Grid item xs={6}>
          <CustomSelect
            id="kanGrubu"
            label="Kan Grubu"
            name="kanGrubu"
            placeholder="Kan Grubu Seçin" // Yeni placeholder
            value={values.kanGrubu || ""}
            options={[
              { value: KanGrubu.A, label: 'A' },
              { value: KanGrubu.B, label: 'B' },
              { value: KanGrubu.AB, label: 'AB' },
              { value: KanGrubu.O, label: 'O' },
            ]}
            handleSelectChange={handleSelectChange}
          />
        </Grid>
        <Grid item xs={6}>
          <CustomSelect
            id="rhFactor"
            label="Rh Factor"
            name="rhFactor"
            placeholder="Rh Faktörü Seçin" // Yeni placeholder
            value={values.rhFactor || ""}
            options={[
              { value: RhFactor.Pozitif, label: 'Pozitif' },
              { value: RhFactor.Negatif, label: 'Negatif' },
            ]}
            handleSelectChange={handleSelectChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HastaBilgileriForm;
