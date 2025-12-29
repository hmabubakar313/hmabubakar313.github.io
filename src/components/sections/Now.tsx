import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Section from '../layout/Section';
import { SITE } from '../../config/site';

const Now = () => {
  return (
    <Section id="now" title="What I'm Working On" bgVariant="paper">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            maxWidth: 800,
            mx: 'auto',
            p: 4,
            bgcolor: 'background.default',
            borderRadius: 3,
            border: 1,
            borderColor: 'divider',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative gradient */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, #3B82F6, #60A5FA, #3B82F6)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s linear infinite',
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '200% 0' },
                '100%': { backgroundPosition: '-200% 0' },
              },
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: '1.1rem',
              textAlign: 'center',
            }}
          >
            {SITE.nowContent}
          </Typography>
        </Box>
      </motion.div>
    </Section>
  );
};

export default Now;
