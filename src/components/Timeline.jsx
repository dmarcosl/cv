import React from 'react';
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    marginLeft: '200px',
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-40px',
      top: '0',
      bottom: '-40px',
      width: '2px',
      background: theme.palette.primary.main,
    },
    '&:last-child::before': {
      bottom: '0',
    },
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    left: '-44px',
  },
}));

const TimelineDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  fontWeight: 500,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(1),
  },
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    left: '-180px',
    width: '120px',
    textAlign: 'right',
  },
}));

const TimelineContent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
  '&:hover': {
    boxShadow: theme.shadows[2],
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease',
  },
}));

const SkillsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const SkillChip = styled(Box)(({ theme }) => ({
  padding: '2px 8px',
  borderRadius: theme.spacing(0.5),
  backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : '#333333',
  color: theme.palette.text.primary,
  fontSize: '0.75rem',
  fontWeight: 500,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? '#e0e0e0' : '#404040',
  },
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const ItemCompany = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  fontWeight: 500,
}));

const BulletList = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  '& li': {
    marginBottom: theme.spacing(0.5),
  },
}));

const Timeline = ({ items }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const formatPeriod = (period) => {
    if (typeof period === 'string') return period;
    return `${period.start} - ${period.end}`;
  };

  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineContent elevation={1}>
            {isMobile && <TimelineDate>{formatPeriod(item.period)}</TimelineDate>}
            {!isMobile && (
              <>
                <TimelineDot />
                <TimelineDate sx={{ top: '0' }}>
                  {item.period.start}
                </TimelineDate>
                <TimelineDate sx={{ top: '1.5rem' }}>
                  {item.period.end}
                </TimelineDate>
              </>
            )}
            <ItemTitle variant="h6">
              {item.position || item.name}
            </ItemTitle>
            <ItemCompany variant="subtitle1">
              {item.company}
            </ItemCompany>
            {item.description && (Array.isArray(item.description) ? (
              item.description.map((paragraph, idx) => (
                <Typography 
                  key={idx} 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ mb: 1 }}
                >
                  {paragraph}
                </Typography>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            ))}
            {item.bullets && (
              <BulletList component="ul">
                {item.bullets.map((bullet, idx) => (
                  <Typography
                    key={idx}
                    component="li"
                    variant="body2"
                    color="text.secondary"
                  >
                    {bullet}
                  </Typography>
                ))}
              </BulletList>
            )}
            {item.skills && (
              <SkillsContainer>
                {item.skills.map((skill, idx) => (
                  <SkillChip key={idx}>
                    {skill}
                  </SkillChip>
                ))}
              </SkillsContainer>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline; 