import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

const withRoot = Component => props => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...props} />
  </ThemeProvider>
);

export default withRoot;
