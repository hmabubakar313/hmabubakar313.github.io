import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'dot' | 'line' | 'gradient';
}

const SectionDivider = ({ variant = 'dot' }: SectionDividerProps) => {
  if (variant === 'gradient') {
    return (
      <Box
        sx={{
          py: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #3B82F6, #8B5CF6, #3B82F6, transparent)',
            borderRadius: '2px',
          }}
        />
      </Box>
    );
  }

  if (variant === 'line') {
    return (
      <Box
        sx={{
          py: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            width: '60px',
            height: '1px',
            background: 'currentColor',
            opacity: 0.2,
            transformOrigin: 'right',
          }}
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
            }}
          />
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            width: '60px',
            height: '1px',
            background: 'currentColor',
            opacity: 0.2,
            transformOrigin: 'left',
          }}
        />
      </Box>
    );
  }

  // Default: dot variant with animated dots
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: i * 0.1,
            type: 'spring',
            stiffness: 200,
          }}
        >
          <Box
            sx={{
              width: i === 1 ? 10 : 6,
              height: i === 1 ? 10 : 6,
              borderRadius: '50%',
              bgcolor: i === 1 ? 'primary.main' : 'divider',
              boxShadow: i === 1 ? '0 0 12px rgba(59, 130, 246, 0.4)' : 'none',
            }}
          />
        </motion.div>
      ))}
    </Box>
  );
};

export default SectionDivider;
