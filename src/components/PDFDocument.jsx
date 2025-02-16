import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    color: '#333333',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  position: {
    fontSize: 16,
    marginBottom: 15,
    color: '#666666',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666666',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#333333',
  },
  description: {
    fontSize: 12,
    marginBottom: 15,
    color: '#333333',
  },
  contactInfo: {
    marginTop: 5,
    fontSize: 12,
    color: '#333333',
  },
  experienceItem: {
    marginBottom: 15,
  },
  skillCategory: {
    marginBottom: 10,
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  chip: {
    padding: '1 4',
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
    border: '1px solid #e0e0e0',
    marginRight: 5,
    marginBottom: 4,
    fontSize: 10,
    color: '#333333',
  },
  skillCategoryTitle: {
    fontSize: 14,
    marginBottom: 4,
    color: '#666666',
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 4,
  },
  smallChip: {
    fontSize: 8,
    padding: '1 4',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e0e0e0',
    borderRadius: 3,
    color: '#333333',
  },
});

const PDFDocument = () => {
  const { t } = useTranslation();
  const sections = t('sections', { returnObjects: true });

  const formatPeriod = (period) => {
    if (!period) return '';
    if (typeof period === 'string') return period;
    return `${period.start} - ${period.end}`;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.section}>
          <Text style={styles.title}>{t('name')}</Text>
          <Text style={styles.position}>{t('about.position')}</Text>
          <Text style={styles.description}>{t('about.description')}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.text}>GitHub: {t('about.social.github')}</Text>
            <Text style={styles.text}>LinkedIn: {t('about.social.linkedin')}</Text>
          </View>
        </View>

        {/* Experience Section */}
        {sections.experience && <View style={styles.section}>
          <Text style={styles.subtitle}>{t('experience.title')}</Text>
          {t('experience.items', { returnObjects: true }).map((item, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.text}>{`${item.position} - ${item.company}`}</Text>
              <Text style={styles.text}>{formatPeriod(item.period)}</Text>
              {Array.isArray(item.description) ? (
                item.description.map((paragraph, idx) => (
                  <Text key={idx} style={styles.text}>{paragraph}</Text>
                ))
              ) : (
                <Text style={styles.text}>{item.description}</Text>
              )}
              {item.skills && (
                <View style={styles.skillsRow}>
                  {item.skills.map((skill, idx) => (
                    <Text key={idx} style={styles.smallChip}>{skill}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>}

        {/* Projects Section */}
        {sections.projects && <View style={styles.section}>
          <Text style={styles.subtitle}>{t('projects.title')}</Text>
          {t('projects.items', { returnObjects: true }).map((item, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.text}>{`${item.name} - ${item.company}`}</Text>
              <Text style={styles.text}>{formatPeriod(item.period)}</Text>
              {item.bullets.map((bullet, idx) => (
                <Text key={idx} style={styles.text}>• {bullet}</Text>
              ))}
              {item.skills && (
                <View style={styles.skillsRow}>
                  {item.skills.map((skill, idx) => (
                    <Text key={idx} style={styles.smallChip}>{skill}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>}

        {/* Skills Section */}
        {sections.skills && <View style={styles.section}>
          <Text style={styles.subtitle}>{t('skills.title')}</Text>
          {Object.entries(t('skills.categories', { returnObjects: true })).map(([key, label]) => (
            <View key={key} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{label}</Text>
              <View style={styles.skillList}>
                {t(`skills.${key}`, { returnObjects: true }).map((skill, idx) => (
                  <Text key={idx} style={styles.chip}>{skill}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>}
      </Page>
    </Document>
  );
};

export default PDFDocument; 