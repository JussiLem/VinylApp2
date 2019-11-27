import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import VinylHeroLayout from "./VinylHeroLayout";
import Typography from "../components/Typography";
import Button from "../components/Button";
import turntable from "../../static/pics/vinyl-turntable.jpg";

const styles = theme => ({
  background: {
    backgroundImage: `url(${turntable})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
});

const VinylHero = props => {
  const { classes } = props;

  return (
    <VinylHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={turntable}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Vinyl Collection
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Look out for a new mint and rare vinyls from Discogs and add them to
        your collection
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/vinylapp/sign-up/"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the music
      </Typography>
    </VinylHeroLayout>
  );
};

VinylHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VinylHero);
