import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

// Emotional color palette for the journey arc
export const emotionalColors = {
  failure: '#EF4444',     // Red - the struggle
  growth: '#F59E0B',      // Amber - the comeback
  success: '#10B981',     // Green - first wins
  innovation: '#3B82F6',  // Blue - current growth
  philosophy: '#8B5CF6',  // Purple - wisdom gained
} as const;

// Timeline progression colors (most recent to oldest)
export const timelineColors = {
  current: { main: '#10B981', glow: 'rgba(16, 185, 129, 0.4)' },    // Green - present
  recent: { main: '#3B82F6', glow: 'rgba(59, 130, 246, 0.4)' },     // Blue - recent past
  past: { main: '#64748B', glow: 'rgba(100, 116, 139, 0.3)' },      // Muted - older
} as const;

const commonTypography = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontWeight: 700,
    fontSize: '3rem',
    lineHeight: 1.2,
    '@media (max-width:600px)': {
      fontSize: '2rem',
    },
  },
  h2: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontWeight: 600,
    fontSize: '2.25rem',
    lineHeight: 1.3,
    '@media (max-width:600px)': {
      fontSize: '1.75rem',
    },
  },
  h3: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.4,
  },
  h4: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.4,
  },
  h5: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontWeight: 500,
    fontSize: '1.1rem',
  },
  h6: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontWeight: 500,
    fontSize: '1rem',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  button: {
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    textTransform: 'none' as const,
    fontWeight: 500,
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    secondary: {
      main: '#64748B',
      light: '#94A3B8',
      dark: '#475569',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FAFC',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    divider: '#E2E8F0',
  },
  typography: commonTypography,
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '0.95rem',
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.25)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(59, 130, 246, 0.35)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    secondary: {
      main: '#94A3B8',
      light: '#CBD5E1',
      dark: '#64748B',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
    divider: '#334155',
  },
  typography: commonTypography,
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '0.95rem',
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(59, 130, 246, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
