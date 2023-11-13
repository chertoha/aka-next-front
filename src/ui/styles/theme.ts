export const breakpoints = {
  mobile: 360,
  tablet: 768,
  laptop: 1280,
  desktop: 1920,
};

export const theme = {
  colors: {
    primaryBackground: "#F5F7FF",
    secondaryBackground: "#FFFFFF",
    accent: "#FF0606",
    primaryText: "#000000",
    secondaryText: "#FFFFFF",
    stroke: "#DADADA",
  },

  fonts: {
    // montserrat: "'Montserrat', sans-serif",
  },

  fontSizes: {
    xxs: "14px",
    xs: "15px",
    s: "16px",
    m: "18px",
    l: "20px",
    l2: "22px",
    xl: "24px",
    xl2: "25px",
    xxl: "32px",
  },

  fontWeights: { regular: 400, medium: 500, semiBold: 600, bold: 700 },

  radii: {
    borderRadius: {
      small: "5px",
      medium: "10px",
      large: "20px",
      circle: "50%",
    },
  },

  shadows: {},

  transitions: {
    default: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  breakpoints: {
    mobile: `${breakpoints.mobile}px`,
    tablet: `${breakpoints.tablet}px`,
    laptop: `${breakpoints.laptop}px`,
    desktop: `${breakpoints.desktop}px`,
  },

  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tablet - 0.02}px)`,

    mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,

    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tablet
    }px) and (max-width: ${breakpoints.laptop - 0.02}px)`,

    tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,

    laptopOnly: `@media screen and (min-width: ${
      breakpoints.laptop
    }px) and (max-width: ${breakpoints.desktop - 0.02}px)`,

    laptop: `@media screen and (min-width: ${breakpoints.laptop}px)`,

    notDesktop: `@media screen and (max-width: ${
      breakpoints.desktop - 0.02
    }px)`,

    desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  },
};
