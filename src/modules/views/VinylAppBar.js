import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import clsx from "clsx";

const styles = theme => ({
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

const VinylAppBar = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {"VinylApp"}
          </Link>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            href="/vinylapp/signin"
          >
            {"Sign In"}
          </Link>
          <Link
            variant="h6"
            underline="none"
            className={clsx(classes.rightLink, classes.linkSecondary)}
            href="/vinylapp/signup"
          >
            {"Sign Up"}
          </Link>
        </Toolbar>
      </AppBar>
      {/*<div className={classes.placeholder}/>*/}
    </div>
  );
};

VinylAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VinylAppBar);
