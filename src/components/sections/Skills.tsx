import { Box, Typography, Grid, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import SkillCategory from '../ui/SkillCategory';
import { SITE } from '../../config/site';
import { useSectionInView } from '../../hooks/useSectionInView';

interface SkillsProps {
  setActiveSection: (section: string) => void;
}

const Skills = ({ setActiveSection }: SkillsProps) => {
  const { ref } = useSectionInView('skills', setActiveSection);

  return (
    <Box ref={ref}>
      <Section id="skills" title="Tech Stack & Skills" bgVariant="paper">
        <Grid container spacing={3}>
          {SITE.skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.name}>
              <SkillCategory
                name={category.name}
                skills={category.skills}
                index={index}
              />
            </Grid>
          ))}
        </Grid>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                mb: 3,
                textAlign: 'center',
                color: 'text.primary',
              }}
            >
              Professional Skills
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              gap={1.5}
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              {SITE.professionalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.85rem',
                      py: 2.5,
                      px: 0.5,
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>
        </motion.div>
      </Section>
    </Box>
  );
};

export default Skills;
