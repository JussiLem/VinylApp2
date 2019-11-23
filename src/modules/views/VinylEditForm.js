import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import vinyls from "../../static/pics/vinyls.jpg";
import imageDots from "../../static/pics/productCTAImageDots.png";
import axios from "axios";
import { useParams } from "react-router";

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

function VinylEditForm(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const [vinyl, setValues] = React.useState({
    id: "",
    artist: "",
    title: "",
    genre: ""
  });
  let { id } = useParams();
  let { artist } = useParams();

  const [msg, setMsg] = useState("");
  const editArtist = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("artist", vinyl.artist);
    formData.append("title", vinyl.title);
    formData.append("genre", vinyl.genre);
    axios.post("http://localhost:8080/vinyl/edit/", formData).then(response => {
      if (200 === response.status) {
        setValues({ artist: "", title: "", genre: "" });
        setMsg("Edited");
      } else {
        setMsg("Editing failed");
      }
    });
  };

  const handleChange = e => {
    setValues({
      ...artist,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Edit
              </Typography>
              <Typography variant="h5">Type here to edit {artist}</Typography>
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Your artist"
                name={"artist"}
                value={artist.artist}
                onChange={handleChange}
              />
              <TextField
                noBorder
                name={"title"}
                className={classes.textField}
                placeholder="Artist title"
                value={artist.title}
                onChange={handleChange}
              />
              <TextField
                noBorder
                name={"genre"}
                className={classes.textField}
                placeholder="Artist genre"
                value={artist.genre}
                onChange={handleChange}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={editArtist}
              >
                Add!
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img src={vinyls} alt="call to action" className={classes.image} />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Will look for your artist "
      />
    </Container>
  );
}

VinylEditForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VinylEditForm);
