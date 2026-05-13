// Theme Configuration - Edit colors here
export const themes = {
  default: {
    name: 'Purple Dream',
    primary: '#8b5cf6',      // Purple
    secondary: '#ec4899',    // Pink
    accent: '#06b6d4',       // Cyan
    dark: '#0f172a',         // Dark blue-gray
    light: '#f8fafc',        // Light
    text: '#1e293b',         // Dark text
    textLight: '#64748b',    // Light text
    border: '#e2e8f0',       // Border
    hover: '#7c3aed',        // Darker purple for hover
  },
  ocean: {
    name: 'Ocean Breeze',
    primary: '#0ea5e9',      // Sky blue
    secondary: '#06b6d4',    // Cyan
    accent: '#3b82f6',       // Blue
    dark: '#0c2d48',         // Dark blue
    light: '#f0f9ff',        // Light blue
    text: '#0c4a6e',         // Dark text
    textLight: '#475569',    // Light text
    border: '#cffafe',       // Border
    hover: '#0284c7',        // Darker blue
  },
  sunset: {
    name: 'Sunset Glow',
    primary: '#f59e0b',      // Amber
    secondary: '#ef4444',    // Red
    accent: '#fb923c',       // Orange
    dark: '#7c2d12',         // Dark brown
    light: '#fffbeb',        // Light amber
    text: '#92400e',         // Dark text
    textLight: '#78350f',    // Light text
    border: '#fed7aa',       // Border
    hover: '#d97706',        // Darker amber
  },
  forest: {
    name: 'Forest Green',
    primary: '#10b981',      // Green
    secondary: '#14b8a6',    // Teal
    accent: '#34d399',       // Light green
    dark: '#064e3b',         // Dark green
    light: '#f0fdf4',        // Light green
    text: '#065f46',         // Dark text
    textLight: '#047857',    // Light text
    border: '#86efac',       // Border
    hover: '#059669',        // Darker green
  },
};

export let currentTheme = themes.default;

export function setTheme(themeName) {
  currentTheme = themes[themeName] || themes.default;
  applyThemeToDOM();
}

export function applyThemeToDOM() {
  document.documentElement.style.setProperty('--primary', currentTheme.primary);
  document.documentElement.style.setProperty('--secondary', currentTheme.secondary);
  document.documentElement.style.setProperty('--accent', currentTheme.accent);
  document.documentElement.style.setProperty('--dark', currentTheme.dark);
  document.documentElement.style.setProperty('--light', currentTheme.light);
  document.documentElement.style.setProperty('--text', currentTheme.text);
  document.documentElement.style.setProperty('--text-light', currentTheme.textLight);
  document.documentElement.style.setProperty('--border', currentTheme.border);
  document.documentElement.style.setProperty('--hover', currentTheme.hover);
}

export function getThemeNames() {
  return Object.keys(themes);
}
