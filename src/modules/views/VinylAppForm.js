import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Paper from "../components/Paper";
import curvyLines from "../../static/pics/vinylAppCurvyLines.png";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundImage: `url(${curvyLines})`,
    backgroundRepeat: "no-repeat"
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(8, 6)
    }
  }
});

const VinylAppForm = props => {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box mt={7} mb={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Box>
      </Container>
    </div>
  );
};

VinylAppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VinylAppForm);
