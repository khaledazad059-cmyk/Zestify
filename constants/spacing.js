// 📐 Spacing System - نظام المسافات

export const SPACING = {
  // Base spacing unit
  unit: 8,

  // Spacing scale
  xs: 4,        // 0.5x
  sm: 8,        // 1x
  md: 12,       // 1.5x
  lg: 16,       // 2x
  xl: 24,       // 3x
  '2xl': 32,    // 4x
  '3xl': 48,    // 6x
  '4xl': 64,    // 8x
};

// Border Radius
export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  full: 9999,
};

// Shadow Definitions
export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 5.46,
    elevation: 12,
  },
};
