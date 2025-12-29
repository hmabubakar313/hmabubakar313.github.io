import { IconButton, Tooltip } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        onClick={onToggle}
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          color: 'text.primary',
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider',
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {isDark ? <LightMode /> : <DarkMode />}
        </motion.div>
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
