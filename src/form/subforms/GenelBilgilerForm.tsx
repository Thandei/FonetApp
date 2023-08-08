import React from 'react';
import { Container, Typography, Select } from '@mui/material';
import DynamicRadio from '../../components/shared/Radio';
import DynamicSwitch from '../../components/shared/Switch';
import CustomTextField from '../../components/shared/TextField';
import CustomSelect from '../../components/shared/Select';


interface GenelBilgilerFormProps {
  values: {
    darpDurumu: string;
    gelisNedeni: string;
    gelisNedeniAciklama: string;
    sikayet: string;
    uygunOrtam: boolean;
    odadaBulunanlar: never[];
    doktorAdi: string;
    organizasyon: string;
  };
  handleChange: (e: React.ChangeEvent<any>) => void;

}

enum DarpDurumu {
  Evet = 'evet',
  Hayir = 'hayir',
}

enum GelisNedeni {
  etkiliEylem = 'Etkili Eylem',
  trafikKazası = 'Trafik Kazası',
  isKazası = 'İş Kazası',
  digerKazalar = 'Diğer Kazalar',
}

enum OdadaBulunanlar {
  doktor = "Tabip",
  saglikci = "Sağlık Personeli",
  other = "Sağlık Meslek Mensubu Personel",
  refakatci = "Refakatçi",
}



const GenelBilgilerForm: React.FC<GenelBilgilerFormProps> = ({ values, handleChange }) => {

  const handleSelectChange: React.ComponentProps<typeof Select>['onChange'] = (event, child) => {
    handleChange(event as unknown as React.ChangeEvent<any>);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" style={{fontSize: "20px"}}>Genel Bilgiler</Typography>
      <DynamicRadio
        label="Darp Durumu"
        name="darpDurumu"
        value={values.darpDurumu}
        options={[
          { value: DarpDurumu.Evet, label: 'Evet' },
          { value: DarpDurumu.Hayir, label: 'Hayır' },
        ]}
        handleChange={handleChange}
      />
      {values.darpDurumu === 'evet' && (
        <>
          <CustomSelect
            id="gelisNedeni"
            label="Geliş Nedeni"
            name="gelisNedeni"
            value={values.gelisNedeni}
            placeholder='Geliş Nedeni'
            options={[
              { value: GelisNedeni.etkiliEylem, label: 'Etkili Eylem' },
              { value: GelisNedeni.digerKazalar, label: 'Diğer Kazalar' },
              { value: GelisNedeni.isKazası, label: 'İş Kazası' },
              { value: GelisNedeni.trafikKazası, label: 'Trafik Kazası' },
            ]}
            handleSelectChange={handleSelectChange}
          />
          <CustomTextField id="gelisNedeniAciklama" label="Geliş Nedeni Açıklama" name="gelisNedeniAciklama" value={values.gelisNedeniAciklama} handleChange={handleChange} />
          <CustomTextField id="sikayet" label="Şikayet" name="sikayet" value={values.sikayet} handleChange={handleChange} />
          <DynamicSwitch label="Uygun Ortam Sağlandı" name="uygunOrtam" checked={values.uygunOrtam} handleChange={handleChange} />
          <CustomSelect
            id="odadaBulunanlar"
            label="Odada Bulunanlar"
            name="odadaBulunanlar"
            placeholder='Odada Bulunanlar'
            value={values.odadaBulunanlar || ""}
            multiple
            options={[
              { value: OdadaBulunanlar.doktor, label: 'Tabip' },
              { value: OdadaBulunanlar.saglikci, label: 'Sağlık Personeli' },
              { value: OdadaBulunanlar.other, label: 'Sağlık Meslek Mensubu Personel' },
              { value: OdadaBulunanlar.refakatci, label: 'Refakatçi' },
            ]}
            handleSelectChange={handleSelectChange}
          />
          <CustomTextField id="doktorAdi" label="Doktor Adı" name="doktorAdi" value={values.doktorAdi} handleChange={handleChange} />
          <CustomTextField id="organizasyon" label="Organizasyon" name="organizasyon" value={values.organizasyon} handleChange={handleChange} />
        </>
      )}
    </Container>
  );
};

export default GenelBilgilerForm;
