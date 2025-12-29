import { Box, Typography, Avatar, Grid, Chip } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Section from '../layout/Section';
import { SITE } from '../../config/site';
import { useSectionInView } from '../../hooks/useSectionInView';

interface StoryProps {
  setActiveSection: (section: string) => void;
}

// Floating code symbols around avatar
const codeSymbols = [
  { symbol: '{ }', top: '5%', left: '-15%', delay: 0 },
  { symbol: '< />', top: '25%', right: '-20%', delay: 0.5 },
  { symbol: '( )', top: '60%', left: '-20%', delay: 1 },
  { symbol: '[ ]', top: '80%', right: '-15%', delay: 1.5 },
];

const Story = ({ setActiveSection }: StoryProps) => {
  const { ref } = useSectionInView('story', setActiveSection);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <Box ref={ref}>
      <Section id="story" title={SITE.storyTitle} bgVariant="paper">
        <Grid container spacing={6} alignItems="flex-start">
          {/* Avatar/Image Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Floating code symbols */}
                  {codeSymbols.map((item, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -12, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: item.delay,
                      }}
                      style={{
                        position: 'absolute',
                        top: item.top,
                        left: item.left,
                        right: item.right,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: { xs: '1rem', md: '1.3rem' },
                          color: 'primary.main',
                          opacity: 0.5,
                          fontWeight: 500,
                        }}
                      >
                        {item.symbol}
                      </Typography>
                    </motion.div>
                  ))}

                  {/* Gradient border wrapper */}
                  <Box
                    sx={{
                      position: 'relative',
                      p: '4px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)',
                    }}
                  >
                    <Avatar
                      src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                      alt="Hafiz Muhammad Abubakar"
                      sx={{
                        width: { xs: 180, md: 240 },
                        height: { xs: 180, md: 240 },
                        bgcolor: 'background.paper',
                        fontSize: { xs: '3.5rem', md: '4.5rem' },
                        fontFamily: '"JetBrains Mono", monospace',
                        fontWeight: 700,
                        color: 'primary.main',
                      }}
                    >
                      HMA
                    </Avatar>
                  </Box>

                  {/* Animated orbit - solid line */}
                  <Box
                    component={motion.div}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    sx={{
                      position: 'absolute',
                      inset: { xs: -25, md: -35 },
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: '50%',
                    }}
                  >
                    {/* Orbiting dot */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                      }}
                    />
                  </Box>
                </Box>

                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Chip
                      icon={<Circle sx={{ fontSize: '8px !important', color: '#10B981 !important' }} />}
                      label="Open to opportunities"
                      size="small"
                      sx={{
                        bgcolor: 'rgba(16, 185, 129, 0.1)',
                        color: '#10B981',
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.75rem',
                        '& .MuiChip-icon': {
                          color: '#10B981',
                        },
                      }}
                    />
                  </Box>
                </motion.div>
              </motion.div>
            </Box>
          </Grid>

          {/* Text Column */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {/* Prominent Quote First */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    mb: 4,
                    p: { xs: 3, md: 4 },
                    bgcolor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'rgba(59, 130, 246, 0.08)'
                        : 'rgba(59, 130, 246, 0.04)',
                    borderRadius: 3,
                    borderLeft: 4,
                    borderColor: 'primary.main',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="blockquote"
                    sx={{
                      fontStyle: 'italic',
                      fontWeight: 500,
                      lineHeight: 1.6,
                      color: 'text.primary',
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    "{SITE.storyQuote}"
                  </Typography>
                </Box>
              </motion.div>

              {/* Brief Story Paragraphs */}
              {SITE.storyParagraphs.map((paragraph, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2.5,
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                    }}
                  >
                    {paragraph}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
};

export default Story;
