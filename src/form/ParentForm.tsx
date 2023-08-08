import React from 'react';
import { Formik, Form } from 'formik';
import GenelBilgilerForm from './subforms/GenelBilgilerForm';
import { Button } from '@mui/material';
import { validationSchema } from '../utils/Validation/validationSchema';
import HastaBilgileriForm from './subforms/HastaBilgileriForm';


interface CombinedFormProps {
  onSubmit: (values: any) => void;
}

const CombinedForm: React.FC<CombinedFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        darpDurumu: '',
        gelisNedeni: '',
        gelisNedeniAciklama: '',
        sikayet: '',
        uygunOrtam: false,
        odadaBulunanlar: [],
        doktorAdi: '',
        organizasyon: '',
        adi: '',
        soyadi: '',
        yas: 0,
        cinsiyet: '',
        kanGrubu: '',
        rhFactor: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const kanGrubuRh = values.kanGrubu + (values.rhFactor === 'pozitif' ? '+' : '-');
        const yeniDegerler = {
          ...values,
          kanGrubuRh,
        };

        onSubmit(yeniDegerler);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, handleChange }) => (
        <Form>

          <HastaBilgileriForm values={values} handleChange={handleChange} isSubmitting={isSubmitting} />
          <GenelBilgilerForm values={values} handleChange={handleChange} />

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>Kaydet</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CombinedForm;
