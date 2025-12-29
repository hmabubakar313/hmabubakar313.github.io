import { Box, Typography, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  name: string;
  skills: string[];
  index: number;
}

const SkillCategory = ({ name, skills, index }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        sx={{
          p: 3,
          bgcolor: 'background.paper',
          borderRadius: 3,
          border: 1,
          borderColor: 'divider',
          height: '100%',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-4px)',
            boxShadow: (theme) =>
              theme.palette.mode === 'dark'
                ? '0 12px 40px rgba(0, 0, 0, 0.3)'
                : '0 12px 40px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: 2,
            color: 'primary.main',
            fontWeight: 600,
          }}
        >
          {name}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
            >
              <Chip
                label={skill}
                variant="outlined"
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.8rem',
                  borderColor: 'divider',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(59, 130, 246, 0.1)'
                        : 'rgba(59, 130, 246, 0.05)',
                  },
                }}
              />
            </motion.div>
          ))}
        </Stack>
      </Box>
    </motion.div>
  );
};

export default SkillCategory;
