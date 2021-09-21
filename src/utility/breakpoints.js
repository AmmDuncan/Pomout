const size = {
  mobileS: "319px",
  mobileM: "374px",
  mobileL: "424px",
  tabletS: "575px",
  tablet: "767px",
  laptop: "1023px",
  laptopL: "1439px",
  desktop: "2560px",
};

const breakpoints = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export default breakpoints;
