import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'adi', headerName: 'Adı', width: 200 },
  { field: 'soyadi', headerName: 'Soyadı', width: 200 },
  { field: 'yas', headerName: 'Yaş', width: 100 },
  { field: 'cinsiyet', headerName: 'Cinsiyet', width: 150 },
  { field: 'kanGrubuRh', headerName: 'Kan Grubu ve Rh', width: 200 },
  { field: 'darpDurumu', headerName: 'Darp Durumu', width: 200 },
  { field: 'doktorAdi', headerName: 'Doktor Adı', width: 200 },
  { field: 'organizasyon', headerName: 'Organizasyon', width: 200 },
  { field: 'uygunOrtam', headerName: 'Uygun Ortam Hazırlandı', width: 200 },
  { field: 'sikayet', headerName: 'Hasta Şikayeti', width: 200 },
  { field: 'gelisNedeni', headerName: 'Geliş Nedeni', width: 200 },
];
