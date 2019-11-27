import React from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ContactsIcon from "@material-ui/icons/Contacts";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(20),
    display: "flex"
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(6, 2)
  },
  cardContent: {
    maxWidth: 100
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  button: {
    width: "100%"
  }
});

const VinylList = props => {
  const { classes } = props;
  return (
    <Container className={classes.root} component="section">
      <div className={classes.cardWrapper}>
        <Typography color="inherit" align="center" variant="h2">
          Vinyl List
        </Typography>
      </div>
      <Grid container>
        {props.vinyls.map(vinyl => {
          return (
            <Grid item key={vinyl.id}>
              <div className={classes.card}>
                <CardContent>
                  <Typography variant="h5">{vinyl.artist}</Typography>
                  <Typography>{vinyl.title}</Typography>
                  <Typography>{vinyl.genre}</Typography>
                  {vinyl.thumbnail ? (
                    <CardMedia
                      // image={url + '/uploads/' + vinyl.thumbnail}
                      title={vinyl.title}
                    />
                  ) : (
                    <Typography>No picture</Typography>
                  )}

                  <IconButton
                    component={Link}
                    to={
                      "/show/" +
                      vinyl.id +
                      "/" +
                      vinyl.artist +
                      "/" +
                      vinyl.title +
                      "/" +
                      vinyl.genre
                    }
                  >
                    <ContactsIcon />
                  </IconButton>
                </CardContent>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

VinylList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VinylList);
