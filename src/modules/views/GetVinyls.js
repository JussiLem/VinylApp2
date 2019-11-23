import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Hidden from "@material-ui/core/Hidden";
import vinyls from "../../static/pics/vinyls.jpg";
import Snackbar from "../components/Snackbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import imageDots from "../../static/pics/productCTAImageDots.png";
import VinylList from "./VinylList";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: "flex"
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.warning.main,
    padding: theme.spacing(8, 3)
  },
  cardContent: {
    maxWidth: 400
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  button: {
    width: "100%"
  },
  imagesWrapper: {
    position: "relative"
  },
  imageDots: {
    position: "absolute",
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: "100%",
    background: `url(${imageDots})`
  },
  image: {
    position: "absolute",
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600
  }
});

function GetVinyls(props) {
  const [open, setOpen] = React.useState(false);
  const [artists, setArtists] = React.useState([]);
  const [error, setError] = React.useState("Loading");
  useEffect(() => {
    async function getAllVinyls() {
      try {
        const response = await fetch("http://localhost:8080/vinyl/all");
        const json = await response.json();
        console.log(json);
        setArtists(json);
        setError("");
      } catch (error) {
        setArtists([]);
        setError("Loading data failed");
      }
    }

    getAllVinyls();
  }, []);

  if (error.length > 0) {
    return <Typography>{error}</Typography>;
  }

  if (artists.length > 0) {
    return <VinylList vinyls={artists} />;
  }

  return <Typography>There was no artists</Typography>;
}

GetVinyls.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetVinyls);
