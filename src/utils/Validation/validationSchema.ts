import * as Yup from 'yup';

export const validationSchema = Yup.object({
  darpDurumu: Yup.string().required('Zorunlu alan'),
  gelisNedeni: Yup.string().test(
    'cond-gelisNedeni',
    'Zorunlu alan',
    function (value) {
      return this.parent.darpDurumu !== 'evet' || !!value;
    }
  ),
  gelisNedeniAciklama: Yup.string().test(
    'cond-gelisNedeniAciklama',
    '25 karakterden az olamaz',
    function (value) {
      return this.parent.darpDurumu !== 'evet' || (value && value.length >= 25) || false;
    }
  ),
  sikayet: Yup.string().test(
    'cond-sikayet',
    '25 karakterden az olamaz',
    function (value) {
      return this.parent.darpDurumu !== 'evet' || (value && value.length >= 25) || false;
    }
  ),
  uygunOrtam: Yup.boolean(),
  odadaBulunanlar: Yup.array().test(
    'cond-odadaBulunanlar',
    'Zorunlu alan',
    function (value) {
      return this.parent.darpDurumu !== 'evet' || (value && value.length > 0) || false;
    }
  ),
  doktorAdi: Yup.string().test(
    'cond-doktorAdi',
    'Zorunlu alan',
    function (value) {
      return this.parent.darpDurumu !== 'evet' || !!value;
    }
  ),
  organizasyon: Yup.string().test(
    'cond-organizasyon',
    'Zorunlu alan',
    function (value) {
      return this.parent.darpDurumu !== 'evet' || !!value;
    }
  ),
  adi: Yup.string().required('Adı zorunludur').min(3, 'Adı en az 3 karakter olmalıdır'),
  soyadi: Yup.string().required('Soyadı zorunludur').max(20, 'Soyadı en fazla 20 karakter olmalıdır'),
  yas: Yup.number().required('Yaş zorunludur').positive('Yaş pozitif bir sayı olmalıdır').integer('Yaş tam sayı olmalıdır'),
  cinsiyet: Yup.string().required('Cinsiyet zorunludur'),
  kanGrubu: Yup.string().required('Kan Grubu zorunludur'),
  rhFactor: Yup.string().required('Rh Faktörü zorunludur'),
});
