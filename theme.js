import { getRelativeSize } from "./src/utils";

const colors = {
  primaryLight: "#58E0EF",
  primary: "#0000CD",
  primaryDark: "#3B5F7F",
  whitePure: "#ffffff",
  input: "#87CEEB",
  greyDark: "#9CA6AE",
  greyDarker: "#818D97",
};
const theme = {
  color: {
    general: { ...colors },
    text: { ...colors },
    button: { ...colors },
    input: { ...colors },
  },
  radius: {
    small: 4,
    medium: 8,
    large: 50,
    ball: 200,
  },
  space: {
    small: 6,
    medium: 12,
    large: 16,
  },
  text: {
    display: getRelativeSize(34),
    title1: getRelativeSize(28),
    title2: getRelativeSize(22),
  },
};

export default theme;
