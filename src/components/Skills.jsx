import React from 'react';
import { Container, Typography, Box, Paper, Chip } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const CategoryContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  elevation: 1,
}));

const SkillsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

const categories = {
  languagesBest: 'Languages - Best at',
  languagesGood: 'Languages - Advanced Knowledge',
  languagesBasic: 'Languages - Basic Knowledge',
  backend: 'Back-end Frameworks & Libraries',
  frontend: 'Front-end Frameworks & Libraries',
  messaging: 'Messaging',
  cloud: 'Cloud',
  database: 'DB',
  devops: 'DevOps',
  observability: 'Observability',
  api: 'API & Integrations'
};

const Skills = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {t('skills.title')}
      </Typography>
      
      {Object.entries(categories).map(([key, label]) => (
        <CategoryContainer key={key} elevation={1}>
          <Typography variant="h6" color="primary" gutterBottom>
            {t(`skills.categories.${key}`)}
          </Typography>
          <SkillsWrapper>
            {t(`skills.${key}`, { returnObjects: true }).map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                variant="outlined"
                sx={{
                  borderColor: theme.palette.divider,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : '#333333',
                    borderColor: theme.palette.text.primary,
                  },
                }}
              />
            ))}
          </SkillsWrapper>
        </CategoryContainer>
      ))}
    </Container>
  );
};

export default Skills; 