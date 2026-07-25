export const palette = {
  slate: {
    950: '#020617',
    900: '#0f172a',
    800: '#1e293b',
    700: '#334155',
    400: '#94a3b8',
    300: '#cbd5e1',
    100: '#f1f5f9',
  },
  indigo: {
    700: '#4338ca',
    600: '#4f46e5',
    500: '#6366f1',
    400: '#818cf8',
    300: '#a5b4fc',
    950: '#090d16',
  },
  emerald: { 400: '#34d399' },
  cyan: { 400: '#22d3ee' },
  rose: { 500: '#f43f5e' },
};

export const colors = {
  // Semantic tokens
  background: palette.slate[950],
  surface: palette.slate[900],
  surfaceBorder: palette.slate[800],

  brand: {
    primary: palette.indigo[600],
    primaryHover: palette.indigo[700],
    accent: palette.indigo[400],
    light: palette.indigo[300],
  },

  text: {
    primary: '#ffffff',
    secondary: palette.slate[300],
    muted: palette.slate[400],
    brand: palette.indigo[400],
  },
  status: {
    success: palette.emerald[400],
    info: palette.cyan[400],
    error: palette.rose[500],
  },
};
