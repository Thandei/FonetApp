import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ReportData {
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
}

interface DataContextProps {
  reports: ReportData[];
  addReport: (report: ReportData) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useData = (): DataContextProps => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [reports, setReports] = useState<ReportData[]>([]);

  const addReport = (report: ReportData) => {
    setReports((prevReports) => [...prevReports, report]);
  };

  return <DataContext.Provider value={{ reports, addReport }}>{children}</DataContext.Provider>;
};
