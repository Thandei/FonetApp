import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HastaBilgileriForm from '../form/ParentForm';
import { useData } from '../context/DataContext';
import styled from 'styled-components';


const Container = styled.div`
  font-family: 'Helvetica';
  margin: 20px auto;
  width: 80%; // Genişliği azaltıyoruz
  text-align: center; // İçerikleri ortalamak için
`;

const StyledLink = styled(Link)`
  color: #0088FE;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 20px;
  display: block; // Bu, bağlantıyı blok seviyesine getirir, böylece merkezlenebilir
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px; // Daha fazla alt marj ekledik
`;

const AddReportPage: React.FC = () => {

  const { addReport } = useData();
  const history = useNavigate();

  type ReportData = {
    id: number;
    adi: string;
    soyadi: string;
    yas: number;
    cinsiyet: string;
    kanGrubuRh: string;
    darpDurumu: string;
    gelisNedeni?: string;
    gelisNedeniAciklama?: string;
    sikayet?: string;
    uygunOrtam?: boolean;
    odadaBulunanlar?: string[];
    doktorAdi?: string;
    organizasyon?: string;
  };



  const handleHastaBilgileriSubmit = (data: Partial<ReportData>) => {
    const newReport: ReportData = {
      id: Date.now(),
      ...data,
    } as ReportData;



    addReport(newReport);

    console.log(newReport);

    alert('Rapor başarıyla eklendi.');
    history('/');
  };
  return (
    <Container>
      <h1 style={{ marginBottom: '20px', fontSize:"25px"}}>Yeni Rapor Ekle</h1>
      
      <FormContainer>
        <FormWrapper>
          <HastaBilgileriForm onSubmit={handleHastaBilgileriSubmit} />
        </FormWrapper>
      </FormContainer>
      <StyledLink to="/">Geri Dön</StyledLink>
    </Container>
  );
};

export default AddReportPage;
