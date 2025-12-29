import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { forwardRef } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  fullHeight?: boolean;
  bgVariant?: 'default' | 'paper';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, title, subtitle, children, fullHeight = false, bgVariant = 'default' }, ref) => {
    return (
      <Box
        component="section"
        id={id}
        ref={ref}
        sx={{
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 3 },
          minHeight: fullHeight ? '100vh' : 'auto',
          bgcolor: bgVariant === 'paper' ? 'background.paper' : 'background.default',
          display: 'flex',
          alignItems: fullHeight ? 'center' : 'flex-start',
        }}
      >
        <Container maxWidth="lg">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mb: subtitle ? 1 : 4,
                  textAlign: 'center',
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #F1F5F9 0%, #94A3B8 100%)'
                      : 'linear-gradient(135deg, #0F172A 0%, #475569 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {title}
              </Typography>
            </motion.div>
          )}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="body1"
                sx={{
                  mb: 6,
                  textAlign: 'center',
                  color: 'text.secondary',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                {subtitle}
              </Typography>
            </motion.div>
          )}
          {children}
        </Container>
      </Box>
    );
  }
);

Section.displayName = 'Section';

export default Section;
