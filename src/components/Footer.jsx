import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}));

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Typography variant="body2" color="text.secondary">
        © {currentYear} - {t('name')}
      </Typography>
    </FooterContainer>
  );
};

export default Footer; 