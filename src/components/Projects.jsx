import React from 'react';
import { Container, Typography } from '@mui/material';
import Timeline from './Timeline';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ marginLeft: '140px' }}
      >
        {t('projects.title')}
      </Typography>
      <Timeline items={t('projects.items', { returnObjects: true })} />
    </Container>
  );
};

export default Projects; 