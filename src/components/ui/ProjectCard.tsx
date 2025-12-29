import { Box, Typography, Chip, Stack, IconButton, Tooltip } from '@mui/material';
import { GitHub, Launch, Schedule } from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    if (status.includes('Active') || status.includes('Progress')) return 'warning';
    if (status.includes('Completed')) return 'success';
    return 'default';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        sx={{
          p: 3,
          height: '100%',
          bgcolor: 'background.paper',
          borderRadius: 3,
          border: 1,
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-8px)',
            boxShadow: (theme) =>
              theme.palette.mode === 'dark'
                ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                : '0 20px 40px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 0.5,
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                  fontStyle: 'italic',
                }}
              >
                {project.subtitle}
              </Typography>
            </Box>
            <Stack direction="row" spacing={0.5}>
              {project.github && (
                <Tooltip title="View on GitHub">
                  <IconButton
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <GitHub fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {project.live && (
                <Tooltip title="View Live">
                  <IconButton
                    component="a"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <Launch fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          </Stack>
        </Box>

        {/* Description */}
        <Box sx={{ flex: 1, mb: 3 }}>
          {project.description.map((desc, i) => (
            <Typography
              key={i}
              variant="body2"
              color="text.secondary"
              sx={{ mb: 1, lineHeight: 1.6 }}
            >
              {desc}
            </Typography>
          ))}
        </Box>

        {/* Tech Stack */}
        <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2 }}>
          {project.tech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
                borderColor: 'divider',
                '&:hover': {
                  borderColor: 'primary.main',
                },
              }}
            />
          ))}
        </Stack>

        {/* Status */}
        <Box sx={{ mt: 'auto' }}>
          <Chip
            icon={<Schedule sx={{ fontSize: 16 }} />}
            label={project.status}
            size="small"
            color={getStatusColor(project.status)}
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.75rem',
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProjectCard;
