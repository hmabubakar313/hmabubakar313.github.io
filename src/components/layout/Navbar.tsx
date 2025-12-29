import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '../../config/site';
import { useScrollTo } from '../../hooks/useSectionInView';
import ThemeToggle from '../ThemeToggle';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navbar = ({ activeSection, isDark, onThemeToggle }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollTo = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    setMobileOpen(false);
  };

  const navItems = SITE.navItems;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: 1,
          borderColor: 'divider',
          ...(theme.palette.mode === 'dark' && {
            bgcolor: 'rgba(15, 23, 42, 0.8)',
          }),
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick('home')}
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.5px',
                }}
              >
                HMA
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item) => (
                  <Box
                    key={item.id}
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.id)}
                    sx={{
                      px: 2,
                      py: 1,
                      border: 'none',
                      bgcolor: activeSection === item.id ? 'primary.main' : 'transparent',
                      color: activeSection === item.id ? 'white' : 'text.primary',
                      borderRadius: 2,
                      cursor: 'pointer',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: activeSection === item.id ? 'primary.dark' : 'action.hover',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
                <Box sx={{ ml: 1 }}>
                  <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
                </Box>
              </Box>
            )}

            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{ color: 'text.primary' }}
                  aria-label="Open navigation menu"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            bgcolor: 'background.default',
          },
        }}
      >
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleNavClick(item.id)}
                        sx={{
                          py: 2,
                          bgcolor: activeSection === item.id ? 'action.selected' : 'transparent',
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontWeight: activeSection === item.id ? 600 : 400,
                            color: activeSection === item.id ? 'primary.main' : 'text.primary',
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
