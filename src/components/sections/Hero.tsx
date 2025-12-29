import { Box, Typography, Button, Stack, Container } from '@mui/material';
import { Email, Chat, KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { SITE } from '../../config/site';
import { useSectionInView } from '../../hooks/useSectionInView';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

// Sequential headline data for the story arc - snappy timing
const heroLines = [
  { text: "I failed my first programming course.", style: 'muted' as const, delay: 0 },
  { text: "Then I got back up.", style: 'normal' as const, delay: 0.5 },
  { text: "Now I build systems that matter.", style: 'accent' as const, delay: 1.0 },
];

const Hero = ({ setActiveSection }: HeroProps) => {
  const { ref } = useSectionInView('home', setActiveSection, 0.5);

  const handleCTA = (action: 'email' | 'whatsapp' | 'upwork') => {
    if (action === 'email') {
      window.location.href = `mailto:${SITE.contact.email}`;
    } else if (action === 'upwork') {
      window.open(SITE.hero.cta.primary.url, '_blank');
    } else {
      window.open(SITE.contact.whatsapp, '_blank');
    }
  };

  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="home"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
      }}
    >
      {/* Animated background grid */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: (theme) =>
            theme.palette.mode === 'dark'
              ? `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`
              : `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }}
      />

      {/* Subtle gradient orb - simplified */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Journey path SVG - suggests path downward */}
      <Box
        component="svg"
        viewBox="0 0 100 200"
        sx={{
          position: 'absolute',
          right: { xs: '5%', md: '12%' },
          top: '55%',
          width: { xs: 50, md: 80 },
          height: { xs: 100, md: 160 },
          opacity: 0.25,
          pointerEvents: 'none',
          color: 'primary.main',
        }}
      >
        <motion.path
          d="M50 0 Q25 40, 50 70 Q75 100, 50 130 Q25 160, 50 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.5, ease: 'easeInOut', delay: 2 },
            opacity: { duration: 0.5, delay: 2 }
          }}
        />
        <motion.polygon
          points="45,190 50,200 55,190"
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Sequential headline reveal - the story hook */}
          <Box sx={{ minHeight: { xs: 180, md: 220 } }}>
            {heroLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: line.delay,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Typography
                  variant="h1"
                  component={index === 0 ? 'h1' : 'p'}
                  sx={{
                    fontSize: { xs: '1.6rem', sm: '2rem', md: '2.8rem' },
                    fontWeight: line.style === 'accent' ? 700 : line.style === 'muted' ? 400 : 500,
                    color: line.style === 'muted'
                      ? 'text.secondary'
                      : line.style === 'accent'
                        ? 'primary.main'
                        : 'text.primary',
                    mb: 1.5,
                    lineHeight: 1.3,
                    position: 'relative',
                    display: 'inline-block',
                    // Strike-through animation for the failure line
                    ...(index === 0 && {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        width: '100%',
                        height: '2px',
                        bgcolor: 'text.secondary',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        animation: 'strikethrough 0.6s ease forwards 1.3s',
                      },
                      '@keyframes strikethrough': {
                        to: { transform: 'scaleX(1)' },
                      },
                    }),
                  }}
                >
                  {line.text}
                </Typography>
              </motion.div>
            ))}
          </Box>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
          >
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{
                maxWidth: '650px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              {SITE.hero.subtitle}
            </Typography>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 1 }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Email />}
                onClick={() => handleCTA(SITE.hero.cta.primary.action)}
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                }}
              >
                {SITE.hero.cta.primary.text}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Chat />}
                onClick={() => handleCTA(SITE.hero.cta.secondary.action)}
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                {SITE.hero.cta.secondary.text}
              </Button>
            </Stack>
          </motion.div>

          {/* Story invitation scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            style={{ marginTop: '3rem' }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                letterSpacing: 3,
                textTransform: 'uppercase',
                display: 'block',
                mb: 1.5,
                fontSize: '0.7rem',
                fontWeight: 500,
              }}
            >
              The full story
            </Typography>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Box
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                onClick={scrollToStory}
                sx={{
                  width: 44,
                  height: 44,
                  mx: 'auto',
                  borderRadius: '50%',
                  border: 2,
                  borderColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    '& svg': { color: 'white' },
                  },
                }}
              >
                <KeyboardArrowDown sx={{ color: 'primary.main', fontSize: 28 }} />
              </Box>
            </motion.div>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
