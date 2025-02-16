import React from 'react';
import { Box, Button } from '@mui/material';
import { Brightness4, Download } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { pdf } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import styled from '@emotion/styled';

const ControlsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  justifyContent: 'flex-end',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
  padding: theme.spacing(0.5),
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

const Header = ({ onThemeChange }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const handleDownloadPDF = async () => {
    try {
      const blob = await pdf(<PDFDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${t('name')}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <ControlsContainer>
      <ActionButton
        startIcon={<Download />}
        onClick={handleDownloadPDF}
      >
        PDF
      </ActionButton>
      <ActionButton
        startIcon={<Brightness4 />}
        onClick={onThemeChange}
      />
      <ActionButton
        onClick={toggleLanguage}
      >
        {i18n.language === 'en' ? 'ES' : 'EN'}
      </ActionButton>
    </ControlsContainer>
  );
};

export default Header; 