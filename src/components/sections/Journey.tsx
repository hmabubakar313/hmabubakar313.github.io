import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import TimelineItem from '../ui/TimelineItem';
import { SITE } from '../../config/site';
import { useSectionInView } from '../../hooks/useSectionInView';

interface JourneyProps {
  setActiveSection: (section: string) => void;
}

const Journey = ({ setActiveSection }: JourneyProps) => {
  const { ref } = useSectionInView('journey', setActiveSection);

  const totalItems = SITE.experience.length + SITE.education.length;
  let itemIndex = 0;

  return (
    <Box ref={ref}>
      <Section id="journey" title="My Journey">
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{
                mb: 4,
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                '&::after': {
                  content: '""',
                  flex: 1,
                  height: 1,
                  bgcolor: 'divider',
                },
              }}
            >
              Experience
            </Typography>
          </motion.div>

          {SITE.experience.map((exp, index) => {
            const currentIndex = itemIndex++;
            return (
              <TimelineItem
                key={`exp-${index}`}
                type="experience"
                title={exp.title}
                subtitle={exp.company}
                period={exp.period}
                location={exp.location}
                achievements={exp.achievements}
                index={currentIndex}
                totalItems={totalItems}
                isLast={index === SITE.experience.length - 1}
              />
            );
          })}

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{
                mt: 6,
                mb: 4,
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                '&::after': {
                  content: '""',
                  flex: 1,
                  height: 1,
                  bgcolor: 'divider',
                },
              }}
            >
              Education
            </Typography>
          </motion.div>

          {SITE.education.map((edu, index) => {
            const currentIndex = itemIndex++;
            return (
              <TimelineItem
                key={`edu-${index}`}
                type="education"
                title={edu.degree}
                subtitle={edu.institution}
                period={edu.years}
                location={edu.location}
                index={currentIndex}
                totalItems={totalItems}
                isLast={currentIndex === totalItems - 1}
              />
            );
          })}
        </Box>
      </Section>
    </Box>
  );
};

export default Journey;
