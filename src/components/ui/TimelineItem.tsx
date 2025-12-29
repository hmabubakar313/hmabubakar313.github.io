import { Box, Typography, Chip, Stack } from '@mui/material';
import { Work, School } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { timelineColors } from '../../theme/theme';

interface TimelineItemProps {
  type: 'education' | 'experience';
  title: string;
  subtitle: string;
  period: string;
  location: string;
  achievements?: string[];
  isLast?: boolean;
  index: number;
  totalItems?: number;
}

// Get color based on position (0 = most recent = green, 1 = blue, rest = muted)
const getTimelineColor = (index: number, totalItems: number) => {
  if (index === 0) return timelineColors.current;
  if (index === 1 || (totalItems <= 2 && index < totalItems - 1)) return timelineColors.recent;
  return timelineColors.past;
};

const TimelineItem = ({
  type,
  title,
  subtitle,
  period,
  location,
  achievements,
  isLast = false,
  index,
  totalItems = 3,
}: TimelineItemProps) => {
  const colors = getTimelineColor(index, totalItems);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          pb: isLast ? 0 : 4,
        }}
      >
        {/* Timeline line and dot */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mr: 3,
          }}
        >
          {/* Animated timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: 'spring',
              stiffness: 200,
              delay: index * 0.15 + 0.2
            }}
          >
            <Box
              component={motion.div}
              whileHover={{ scale: 1.15 }}
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: colors.main,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: `0 4px 14px ${colors.glow}`,
                zIndex: 1,
                position: 'relative',
                // Pulse animation for current position
                ...(index === 0 && {
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: colors.main,
                    opacity: 0.5,
                    animation: 'pulse-ring 2s ease-out infinite',
                  },
                  '@keyframes pulse-ring': {
                    '0%': { transform: 'scale(1)', opacity: 0.5 },
                    '100%': { transform: 'scale(1.3)', opacity: 0 },
                  },
                }),
              }}
            >
              {type === 'education' ? <School /> : <Work />}
            </Box>
          </motion.div>

          {/* Gradient timeline line */}
          {!isLast && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              style={{
                width: 2,
                flex: 1,
                marginTop: 8,
                transformOrigin: 'top',
                background: `linear-gradient(to bottom, ${colors.main}, transparent)`,
              }}
            />
          )}
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, pb: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.25 }}
          >
            <Box
              sx={{
                p: 3,
                bgcolor: 'background.paper',
                borderRadius: 3,
                border: 1,
                borderColor: 'divider',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                // Accent border on left matching timeline color
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 3,
                  bgcolor: colors.main,
                  borderRadius: '3px 0 0 3px',
                },
                '&:hover': {
                  borderColor: colors.main,
                  transform: 'translateX(4px)',
                  boxShadow: (theme) =>
                    theme.palette.mode === 'dark'
                      ? `0 8px 30px rgba(0, 0, 0, 0.3), -4px 0 20px ${colors.glow}`
                      : `0 8px 30px rgba(0, 0, 0, 0.1), -4px 0 20px ${colors.glow}`,
                },
              }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                spacing={1}
                sx={{ mb: 1 }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600, color: 'text.primary' }}
                >
                  {title}
                </Typography>
                <Chip
                  label={period}
                  size="small"
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                    bgcolor: colors.main,
                    color: 'white',
                    boxShadow: `0 2px 8px ${colors.glow}`,
                  }}
                />
              </Stack>

              <Typography
                variant="subtitle1"
                sx={{
                  color: colors.main,
                  fontWeight: 500,
                  mb: 0.5,
                }}
              >
                {subtitle}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: achievements ? 2 : 0 }}
              >
                {location}
              </Typography>

              {achievements && achievements.length > 0 && (
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                  {achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      style={{ listStyleType: 'none', position: 'relative' }}
                    >
                      {/* Custom bullet with timeline color */}
                      <Box
                        sx={{
                          position: 'absolute',
                          left: -16,
                          top: 8,
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: colors.main,
                          opacity: 0.6,
                        }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.75, lineHeight: 1.7 }}
                      >
                        {achievement}
                      </Typography>
                    </motion.li>
                  ))}
                </Box>
              )}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default TimelineItem;
