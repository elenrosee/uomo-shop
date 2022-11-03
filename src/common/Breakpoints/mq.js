export const Breakpoints = {
  sm: 414,
  lg: 1920,
};

export const MQ = (minWidth) => {
  return `@media screen and (min-width: ${minWidth}px)`;
};

//   isMobile: useMediaQuery({ maxWidth: 771 }),
//   isTablet: useMediaQuery({ minWidth: 772, maxWidth: 1279 }),
//   isDesctop: useMediaQuery({ minWidth: 1280 }),
