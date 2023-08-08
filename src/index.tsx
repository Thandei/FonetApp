import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import MainPage from './pages/MainPage';
import AddReportPage from './pages/AddReportPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-report" element={<AddReportPage />} />
        </Routes>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
