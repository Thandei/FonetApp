import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { DataGrid } from '@mui/x-data-grid';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import styled from 'styled-components';
import { columns } from '../utils/TableColumns/GridColumns';
import turkishGridLocaleText from '../TableTranslation/TurkishLocale';

const Container = styled.div`
  font-family: 'Helvetica';
  height: 100%;
  width: 100%;
  margin: 20px auto;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #0088FE;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  border: 2px solid #0088FE;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const GridContainer = styled.div`
  height: 300px;
  width: 90%;
  margin-bottom: 20px;
`;

const MainPage: React.FC = () => {
  const { reports } = useData();







  type OrganizationData = {
    [key: string]: number;
  };

  const organizationData = reports.reduce<OrganizationData>(
    (acc, report) => {
      const org = report.organizasyon;
      if (org) {
        acc[org] = (acc[org] || 0) + 1;
      }
      return acc;
    },
    {}
  );

  

  const updatedReports = reports.map((report) => ({
    ...report,
    uygunOrtam: report.uygunOrtam ? 'evet' : 'hayır',
  }));
  const organizationPieData = Object.keys(organizationData).map((key) => ({
    name: key,
    value: organizationData[key],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <Container>
      <h1 style={{ marginBottom: '40px', fontSize:'25px' }}>Adli Vaka Raporları</h1>
      <Content>
        <GridContainer>
          <DataGrid rows={updatedReports} columns={columns} localeText={turkishGridLocaleText}/>
        </GridContainer>
        <StyledLink to="/add-report">Yeni Rapor Ekle</StyledLink>
        {organizationPieData.length > 0 && (
          <>
            <h2 style={{ marginBottom: "-20px" }}>Organizasyon Dağılımı</h2>
            <PieChart width={400} height={400} style={{ marginBottom: '20px' }}>
              <Pie dataKey="value" data={organizationPieData} cx={200} cy={200} outerRadius={80} fill="#8884d8">
                {organizationPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </>
        )}
      </Content>
    </Container>
  );
};

export default MainPage;
