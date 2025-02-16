import React from 'react';
import { Container, Typography } from '@mui/material';
import Timeline from './Timeline';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ marginLeft: '140px' }}
      >
        {t('experience.title')}
      </Typography>
      <Timeline items={t('experience.items', { returnObjects: true })} />
    </Container>
  );
};

export default Experience; 