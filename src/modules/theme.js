import { createMuiTheme } from "@material-ui/core/styles";
import { green, grey, red } from "@material-ui/core/colors";

// /* Color Theme Swatches in Hex */
// .Kuvitus-1-hex { color: #D9D9D9; }
// .Kuvitus-2-hex { color: #8C8C8C; }
// .Kuvitus-3-hex { color: #595959; }
// .Kuvitus-4-hex { color: #262626; }
// .Kuvitus-5-hex { color: #0D0D0D; }
//
// /* Color Theme Swatches in RGBA */
// .Kuvitus-1-rgba { color: rgba(216, 216, 216, 1); }
// .Kuvitus-2-rgba { color: rgba(140, 140, 140, 1); }
// .Kuvitus-3-rgba { color: rgba(89, 89, 89, 1); }
// .Kuvitus-4-rgba { color: rgba(38, 38, 38, 1); }
// .Kuvitus-5-rgba { color: rgba(12, 12, 12, 1); }
//
// /* Color Theme Swatches in HSLA */
// .Kuvitus-1-hsla { color: hsla(0, 0, 85, 1); }
// .Kuvitus-2-hsla { color: hsla(0, 0, 55, 1); }
// .Kuvitus-3-hsla { color: hsla(0, 0, 35, 1); }
// .Kuvitus-4-hsla { color: hsla(0, 0, 15, 1); }
// .Kuvitus-5-hsla { color: hsla(0, 0, 5, 1); }
const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#69696a",
      main: "#262626",
      dark: "#0D0D0D"
    },
    secondary: {
      light: "#C4E5F2",
      main: "#C7ADD9",
      dark: "#0D1A26"
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e"
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700]
    },
    success: {
      xLight: green[50],
      dark: green[700]
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif"
  }
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200]
    }
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14
    }
  }
};

export default theme;
