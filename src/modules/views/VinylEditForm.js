import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    marginLeft: theme.spacing(60),
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
                placeholder={artist}
                name={"artist"}
                value={artist.artist}
                onChange={handleChange}
              />
              <TextField
                noBorder
                name={"title"}
                className={classes.textField}
                placeholder="New artist title"
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
                Edit!
              </Button>
            </form>
            <Link to="/">
              <Typography>Close</Typography>
            </Link>
          </div>
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
