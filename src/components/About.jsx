import React from 'react';
import { Typography, Box, IconButton, Paper } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const AboutContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  justifyContent: 'center',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease',
  },
}));

const Position = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
}));

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutContainer elevation={0}>
      <Typography variant="h3" component="h1" gutterBottom>
        {t('name')}
      </Typography>
      
      <Position variant="h5" component="h2">
        {t('about.position')}
      </Position>
      
      <Typography variant="body1" paragraph>
        {t('about.description')}
      </Typography>
      
      <SocialLinks>
        <SocialIconButton
          aria-label="GitHub"
          href={t('about.social.github')}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
        >
          <GitHub fontSize="large" />
        </SocialIconButton>
        
        <SocialIconButton
          aria-label="LinkedIn"
          href={t('about.social.linkedin')}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
        >
          <LinkedIn fontSize="large" />
        </SocialIconButton>
      </SocialLinks>
    </AboutContainer>
  );
};

export default About; 